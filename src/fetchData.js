// src/fetchData.js
import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const fetchData = async () => {
  const params = {
    TableName: 'AqaraDeviceData',
  };

  try {
    const data = await dynamodb.scan(params).promise();
    return data.Items.map(item => ({
      ...item,
      timestamp: new Date(item.timestamp).getTime(), // Ensure timestamp is in milliseconds
    }));
  } catch (error) {
    console.error('Error fetching data: ', error);
    console.error('Error details: ', error.stack);
    return [];
  }
};

export default fetchData;
