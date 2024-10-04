// app/api/send-to-sheet/route.js

import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const SERVICE_ACCOUNT_EMAIL =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
    /\\n/g,
    "\n"
  );
const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
async function getAccessToken() {
  const iat = Math.floor(Date.now() / 1000); // Issued at time
  const exp = iat + 60 * 60; // Expiration time (1 hour)

  // Create JWT token payload
  const payload = {
    iss: SERVICE_ACCOUNT_EMAIL,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token", // Audience should be the token endpoint
    exp,
    iat,
  };

  // Sign the JWT token using the private key
  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256" });

  // Exchange JWT token for an access token
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: token,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || "Failed to fetch access token");
  }

  return data.access_token;
}
export async function POST(request) {
  try {
    console.log(request);
    const accessToken = await getAccessToken();
    console.log(accessToken);
    const { data } = await request.json();
    const spreadsheetId = SHEET_ID; // Replace with your actual Spreadsheet ID
    const range = "Users"; // Adjust the range based on your sheet
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [data], // Sending data as an array of arrays
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ message: "Data added successfully", result });
    } else {
      return NextResponse.json(
        { error: "Error adding data to Google Sheets", details: result },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "An error occurred while appending data to Google Sheets",
        data: error,
      },
      { status: 500 }
    );
  }
}
