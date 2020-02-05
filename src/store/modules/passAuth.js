/* eslint-disable promise/param-names */
import {
  PASS_REQUEST,
  PASS_ERROR,
  PASS_SUCCESS
} from "../actions/pass";
import apiCall from "utils/api";

const state = {
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isPhoneApproved: state => state.status === "success"
};

const actions = {
  [PASS_REQUEST]: ({ commit }, phone) => {
    return new Promise((resolve, reject) => {
      apiCall({ url: "phone_pass", data: phone, method: "POST" })
        .then(resp => {
          commit(PASS_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(PASS_ERROR, err);
          reject(err);
        });
    });
  },
};

const mutations = {
  [PASS_REQUEST]: state => {
    state.status = "loading";
  },
  [PASS_SUCCESS]: state => {
    state.status = "success";
    state.hasLoadedOnce = true;
  },
  [PASS_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
