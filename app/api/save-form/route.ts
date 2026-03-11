import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import z from "zod";

import { getSheetsClient } from "@/lib/googleSheet";

const FormDataProp = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string().min(10).max(15),
  company: z.string(),
  industry: z.string(),
  message: z.string().optional().default("NO-MESSAGE"),
});

function formatDate(date: Date) {
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: unknown = await req.json();
    console.log(body);

    const parsed = FormDataProp.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data: FormData = parsed.data;
    const sheets = await getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.name,
            data.phone,
            data.email,
            data.message,
            data.company,
            data.industry,
            formatDate(new Date()),
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in save-form route:", err);
    if (err instanceof Error) {
      return NextResponse.json(
        { success: false, error: err.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
