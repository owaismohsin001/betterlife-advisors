import { NextRequest, NextResponse } from "next/server";

const ODOO_URL = "http://localhost:8069";
const ODOO_DB  = "odoo19_dev";
const ODOO_USER = "admin";
const ODOO_PASS = "admin";

async function odooAuth(): Promise<{ uid: number; cookie: string } | null> {
  const res = await fetch(`${ODOO_URL}/web/session/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0", method: "call", id: 1,
      params: { db: ODOO_DB, login: ODOO_USER, password: ODOO_PASS },
    }),
  });
  const data = await res.json();
  if (!data?.result?.uid) return null;
  const cookie = res.headers.get("set-cookie") ?? "";
  return { uid: data.result.uid, cookie };
}

async function odooCall(cookie: string, model: string, method: string, args: unknown[], kwargs: Record<string, unknown> = {}) {
  const res = await fetch(`${ODOO_URL}/web/dataset/call_kw`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({
      jsonrpc: "2.0", method: "call", id: 2,
      params: { model, method, args, kwargs },
    }),
  });
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, destination, visaType, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Name, phone and email are required" }, { status: 400 });
    }

    // Authenticate with Odoo
    const auth = await odooAuth();
    if (!auth) {
      return NextResponse.json({ error: "Could not connect to CRM" }, { status: 503 });
    }

    const leadName = `Consultation Request — ${name}`;
    const description = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      destination ? `Destination: ${destination}` : "",
      visaType   ? `Visa Type: ${visaType}` : "",
      message    ? `Message: ${message}` : "",
    ].filter(Boolean).join("\n");

    // Create CRM lead
    const result = await odooCall(auth.cookie, "crm.lead", "create", [{
      name: leadName,
      contact_name: name,
      email_from: email,
      phone: phone,
      description,
      type: "lead",
      priority: "1",
      tag_ids: [],
    }]);

    if (result?.error) {
      console.error("Odoo error:", result.error);
      return NextResponse.json({ error: "CRM error: " + result.error.message }, { status: 500 });
    }

    const leadId = result?.result;
    return NextResponse.json({ success: true, leadId }, { status: 201 });

  } catch (err) {
    console.error("Consultation API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
