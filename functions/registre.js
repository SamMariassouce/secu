const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    const products = response.records.map((product) => {
      const { id, fields } = product;
      //console.log(fields);
      const {
        name,
        diffr,
        description,
        category,
        antenne,
        image,
        soustitre,
        observation,
      } = fields;
      console.log(image);
      const { url } = image[0];
      return {
        id,
        name,
        diffr,
        antenne,
        description,
        category,
        soustitre,
        observation,
        image: url,
      };
    });

    /*  console.log('#######');
    console.log(products);
    console.log('#######'); */

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'Il y a eu une erreur',
    };
  }
};
