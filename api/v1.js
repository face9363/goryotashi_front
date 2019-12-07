import axiosBase from "./base";
const axios = axiosBase.axiosCreate("v1");

const client = {

  // 自身の情報
  // !Auth!
  getMe() {
    const url = '/users/me';
    return axiosBase.defaultGet(url);
  },

  // 自身のコミュニティ
  // !Auth!
  getMyCommunity() {
    const url = '/users/me/communities';
    return axiosBase.defaultGet(url);
  },

  // コミュニティ検索
  searchCommunity(q) {
    const url = '/communities/search';
    const query = {q: q};
    return axiosBase.defaultGet(url, query)
  },

  // コミュニティ一覧
  getCommunityById(communityId) {
    const url = `/communities/${communityId}`;
    const query = {id: communityId};
    return axiosBase.defaultGet(url, query)
  },

  // コミュニティのレストラン一覧
  getCommunityRestaurant(communityId, order="random") {
    const url = `/communities/${communityId}/restaurants`;
    const query = {order: order};
    return axiosBase.defaultGet(url, query)
  },

  // レストラン検索
  searchRestaurant(q) {
    const url = '/restaurants/search';
    const query = {q: q};
    return axiosBase.defaultGet(url, query)
  },

  // コミュニティにレストラン追加
  // !Auth!
  addCommunityRestaurant(communityId, shopId, comment) {
    const url = `/communities/${communityId}/restaurants`;
    const body = {
      id: shopId,
      comment: comment
    };
    return axiosBase.defaultPost(url, body);
  },

  // レストラン取得
  getRestaurant(shopId) {
    const url = `/restaurant/${shopId}`;
    return axiosBase.defaultGet(url)
  },

  // レストランのコメント一覧取得
  getRestaurantComment(communityId, shopId){
    const url = `/restaurants/${shopId}/comments`;
    const query = {community: communityId};
    return axiosBase.defaultGet(url)
  },

  // レストランのコメント追加
  // !Auth!
  addRestaurantComment(shopId, communityId, comment){
    const url = `/restaurants/${shopId}/comments`;
    const body = {
      body: comment,
      community_id: communityId
    };
    return axiosBase.defaultPost(url, body)
  }
};
