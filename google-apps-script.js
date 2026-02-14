/**
 * AIERT — Google Apps Script for Email Collection
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1ovwTEu2SUFWPExe2GseNq53ZmGVru63nuTXAqV6gFvU
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Deploy > New deployment
 * 5. Select type: "Web app"
 * 6. Set "Execute as": Me
 * 7. Set "Who has access": Anyone
 * 8. Click Deploy and copy the URL
 * 9. Paste the URL into website/src/config.js as GOOGLE_SCRIPT_URL
 * 10. Redeploy the website
 */

const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet();

    // Get or create "Leads" tab
    let tab = sheet.getSheetByName(SHEET_NAME);
    if (!tab) {
      tab = sheet.insertSheet(SHEET_NAME);
      tab.appendRow(['Email', 'Name', 'Source', 'Date', 'Status']);
      tab.getRange(1, 1, 1, 5).setFontWeight('bold');
      tab.setFrozenRows(1);
    }

    // Append new lead
    tab.appendRow([
      data.email || '',
      data.name || '',
      data.source || 'website',
      new Date().toISOString(),
      'New'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'AIERT email collection endpoint active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
