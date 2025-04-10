// src/api/contactMe.js
import datoCMSClient from './datoCMSClient';

const GET_CONTACT_ME = `
  query {
    allContactmes {
      me {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export const getContactMe = async () => {
  try {
    const response = await datoCMSClient.request(GET_CONTACT_ME);
    return response.allContactmes;
  } catch (error) {
    console.error('Error fetching contact data:', error);
    throw error;
  }
};
