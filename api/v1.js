import axiosBase from "./base";
import Community from "../model/Community";
import User from "../model/Uesr";
import Restaurant from "../model/Restaurant";
import RestaurantComment from "../model/RestaurantComment";
const axios = axiosBase.axiosCreate("v1");

const client = {

  cache: {
    myCommunity: []
  },

  // 自身の情報
  // !Auth!
  async getMe() {
    const url = '/users/me';
    const data = await axiosBase.defaultGet(url, true);
    return new User(data)
  },

  // 自身のコミュニティ
  // !Auth!
  async getMyCommunity() {
    const url = '/users/me/communities';
    if(this.cache.myCommunity){
      return this.cache.myCommunity
    }
    const array = await axiosBase.defaultGet(url, true);
    const list = this._$insertCommunityList(array);
    this.cache.myCommunity = list;
    return list;
  },

  // コミュニティ検索
  async searchCommunity(q) {
    const url = '/communities/search';
    const query = {q: q};
    const array = await axiosBase.defaultGet(url, false, query);
    return this._$insertCommunityList(array)
  },

  // コミュニティ一覧
  async getCommunityById(communityId) {
    const url = `/communities/${communityId}`;
    const query = {id: communityId};
    const array = await axiosBase.defaultGet(url, false, query)
    return this._$insertCommunityList(array)
  },

  // コミュニティのレストラン一覧
  async getCommunityRestaurant(communityId, order="random") {
    const url = `/communities/${communityId}/restaurants`;
    const query = {order: order};
    const array = await axiosBase.defaultGet(url, false, query);
    return this._$insertRestaurantList(array)
  },

  // レストラン検索
  async searchRestaurant(q) {
    const url = '/restaurants/search';
    const query = {q: q};
    const array = await axiosBase.defaultGet(url, false, query);
    return this._$insertRestaurantList(array)
  },

  // コミュニティにレストラン追加
  // !Auth!
  async addCommunityRestaurant(communityId, shopId, comment) {
    const url = `/communities/${communityId}/restaurants`;
    const body = {
      id: shopId,
      comment: comment
    };
    const data = await axiosBase.defaultPost(url, true, body);
  },

  // レストラン取得
  async getRestaurant(shopId) {
    const url = `/restaurant/${shopId}`;
    const array = await axiosBase.defaultGet(url, false)
    return this._$insertRestaurantList(array)
  },

  // レストランのコメント一覧取得
  async getRestaurantComment(communityId, shopId){
    const url = `/restaurants/${shopId}/comments`;
    const query = {community: communityId};
    const array =  await axiosBase.defaultGet(url, false)
    return this._$insertCommunityList(array)
  },

  // レストランのコメント追加
  // !Auth!
  async addRestaurantComment(communityId, shopId, comment){
    const url = `/restaurants/${shopId}/comments`;
    const body = {
      body: comment,
      community_id: communityId
    };
    return await axiosBase.defaultPost(url, true, body)
  },

  _$insertCommunityList(array){
    if (array){
      const items = array.items;
      const communityList = [];
      for (let data of items){
        communityList.push(new Community(data))
      }
      return communityList;
    }
    else {
      return null;
    }
  },

  _$insertRestaurantList(array){
    if (array){
      const restaurantList = [];
      const items = array.items;
      for (let data of items){
        restaurantList.push(new Restaurant(data))
      }
      return restaurantList;
    }
    else {
      return null;
    }
  },

  _$insertRestaurantCommentList(array){
    if (array){
      const items = array.items;
      const commentList= [];
      for (let data of items){
        commentList.push(new RestaurantComment(data))
      }
      return commentList;
    }
    else {
      return null;
    }
  }
};

export default client;
