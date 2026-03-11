import { google, sheets_v4 } from "googleapis";

type GoogleCredentials = {
  client_email: string;
  private_key: string;
};

export async function getSheetsClient(): Promise<sheets_v4.Sheets> {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY");
  }

  const credentials: GoogleCredentials = {
    client_email: clientEmail,
    private_key: privateKey,
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}
