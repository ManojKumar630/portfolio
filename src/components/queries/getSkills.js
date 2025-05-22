/**
 * @typedef {import('../types').Skill} Skill
 */

import datoCMSClient from './datoCMSClient';


const GET_SKILLS = `
{
  allSkills(orderBy: [order_ASC]) {
    name
    description
    icon
    order
    category {
      id
      name
      order
    }
  }
}
`;

export async function getSkills() {
  console.log('GraphQL Query:', GET_SKILLS);
  const data = await datoCMSClient.request(GET_SKILLS);
  console.log('Skills data fetched:', data);
  return data.allSkills;
}


/**
 * Fetches skills data from DatoCMS
 * @returns {Promise<Skill[]>}
 */
// export async function getSkills() {
//   const data = await datoCMSClient.request(GET_SKILLS);
//   return data.allSkills;
// }
