1. Open the Google Sheet:
   https://docs.google.com/spreadsheets/d/1aEsXU7p2NgQjHhlgkWm2cxYeTcrm198ZPGu_LuKY4Pc/edit
2. Open Extensions > Apps Script.
3. Replace the script content with the code from google-apps-script/code.gs and save.
4. Choose the function "setup" in the toolbar and click Run. Approve the permission prompt.
   This creates two tabs with headers:
   - RSVP: Timestamp, Full Name, Guests, Dietary Notes
   - Wishes: Timestamp, Name, Message
5. Click Deploy > New deployment.
6. Select type: Web app.
7. Execute as: Me.
8. Who has access: Anyone.
9. Deploy and copy the Web App URL (it ends with /exec).
10. Paste it into GOOGLE_SCRIPT_URL in src/config.ts, then rebuild / redeploy the site.

Notes:
- If you update the Apps Script code later, use Deploy > Manage deployments > Edit > New version
  so the same URL keeps working.
- The website sends RSVPs to the RSVP tab and wishes to the Wishes tab.
