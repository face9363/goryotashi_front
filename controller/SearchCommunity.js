import client from "../api/mock";

async function searchCommunity(searchStr) {
  const communityList = await client.searchCommunity(searchStr);
  // console.log(communityList);
  return communityList;
}

export default searchCommunity;
