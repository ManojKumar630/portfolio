/**
 * @typedef {import('../types').Skill} Skill
 */

import datoCMSClient from './datoCMSClient';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
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
