// app/api/send-to-sheet/route.js

import dayjs from "dayjs";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log(request);
    const body = await request.json();
    const { data } = body; // Assuming `data` is an array to be appended to the sheet
    if (request.method !== "POST") {
      request.status(405).send({ message: "Only POST requests are allowed" });
      return;
    }
    // Load the service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      serviceAccountAuth
    );
    // Load the document properties and worksheets
    await doc.loadInfo();
    // Get the sheet by name in the document
    const sheet = doc.sheetsByTitle["Users"];
    // Append a new row to the sheet
    await sheet.addRow(
      {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        date: dayjs().format("MM/DD/YYYY H:mm z"),
      },
      { raw: true }
    );
    return NextResponse.json({ message: "Data added successfully" });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "An error occurred while appending data to Google Sheets" },
      { status: 500 }
    );
  }
}
