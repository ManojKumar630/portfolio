/**
 * @typedef {import('../types').Skill} Skill
 */

import datoCMSClient from './datoCMSClient';

const GET_SKILLS = `
{
  allSkills(orderBy: category_id_ASC) {
    name
    category
    description
    icon
    category_id
  }
}
`;

/**
 * Fetches skills data from DatoCMS
 * @returns {Promise<Skill[]>}
 */
export async function getSkills() {
  const data = await datoCMSClient.request(GET_SKILLS);
  return data.allSkills;
}
