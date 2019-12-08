import client from "../../api/v1";

async function myCommunity() {
  const community = await client.getMyCommunity();
}

export default myCommunity;
