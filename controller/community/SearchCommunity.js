import client from "../../api/v1";

async function searchCommunity(searchStr) {
  const communityList = await client.searchCommunity(searchStr);
  return communityList;
}

export default searchCommunity;
