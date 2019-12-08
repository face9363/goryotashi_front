import client from "../../api/v1";

function searchRestaurant(searchStr) {
  return client.searchRestaurant(searchStr);
}
