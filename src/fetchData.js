// src/fetchData.js
import dynamodb from './aws-config';

const fetchData = async () => {
  const params = {
    TableName: 'AqaraDeviceData',
  };

  try {
    const data = await dynamodb.scan(params).promise();
    return data.Items;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

export default fetchData;
