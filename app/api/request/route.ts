import { NextRequest, NextResponse } from "next/server";
import { getCategory } from "@/lib/categories";

// Keeps a single field from blowing up the URL length.
function clean(value: FormDataEntryValue | null, max = 600): string {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.length > max ? `${trimmed.slice(0, max)}…` : trimmed;
}

function line(label: string, value: string): string {
  return value ? `${label}: ${value}\n` : "";
}

export async function POST(req: NextRequest) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER;

  if (!whatsappNumber) {
    console.error("[BLACK VISION] WHATSAPP_NUMBER is not set — cannot route request.");
    return NextResponse.json(
      { ok: false, error: "Request routing is not configured." },
      { status: 500 }
    );
  }

  try {
    const formData = await req.formData();

    const need = clean(formData.get("need"));
    const name = clean(formData.get("name"), 120);
    const contact = clean(formData.get("contact"), 120);

    if (!need || !name || !contact) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const categorySlug = clean(formData.get("category"), 60);
    const categoryLabel =
      getCategory(categorySlug)?.navLabel ?? categorySlug.toUpperCase();

    const message =
      `NEW REQUEST — BLACK VISION\n\n` +
      line("Looking for", need) +
      line("Category", categoryLabel) +
      line("Budget", clean(formData.get("budget"), 60)) +
      line("Quantity", clean(formData.get("quantity"), 60)) +
      line("Destination", clean(formData.get("destination"), 80)) +
      line("Deadline", clean(formData.get("deadline"), 40)) +
      line("Link", clean(formData.get("reference_link"), 300)) +
      line("Details", clean(formData.get("details"))) +
      `\nName: ${name}\n` +
      `Contact: ${contact}`;

    // Logged server-side as a safety net in case the client never taps send.
    console.log("[BLACK VISION] Request prepared\n" + message);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return NextResponse.json({ ok: true, whatsappUrl });
  } catch (error) {
    console.error("[BLACK VISION] Request submission failed", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected error." },
      { status: 500 }
    );
  }
}
