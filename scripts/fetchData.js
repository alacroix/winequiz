require('dotenv').config();
const fs = require('fs');
const { google } = require('googleapis');

const sheets = google.sheets('v4');

const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

async function main() {
  const authClient = await auth.getClient();
  const request = {
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: 'A2:D',
    auth: authClient,
  };

  let values;

  try {
    const { data } = await sheets.spreadsheets.values.get(request);

    values = data.values.reduce((acc, [region, name, estate, picture]) => {
      if (!acc[region]) acc[region] = [];
      acc[region].push({
        name,
        estate,
        picture,
      });
      return acc;
    }, {});
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  try {
    Object.keys(values).forEach((region) => {
      fs.writeFileSync(
        `./assets/data/${region}.json`,
        JSON.stringify(values[region], null, 2) + '\n'
      );
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
