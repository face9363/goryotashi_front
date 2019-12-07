import client from "../api/v1";
function searchCommunity(searchStr) {
  const communityList = client.searchCommunity(searchStr);
  return communityList;
}
