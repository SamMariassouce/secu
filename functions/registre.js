const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    console.log('#######');
    console.log(response);
    console.log('#######');

    return {
      statusCode: 200,
      body: 'products route',
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'Il y a eu une erreur',
    };
  }
};
