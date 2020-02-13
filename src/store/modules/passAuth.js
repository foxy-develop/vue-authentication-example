/* eslint-disable promise/param-names */
import {
  PASS_REQUEST,
  PASS_ERROR,
  PASS_SUCCESS,
  PASS_LOGOUT
} from "../actions/pass";

import axios from "axios";


const state = {
  status: "",
  hasLoadedOnce: false,
  phone: "",
  message: ''
};

const getters = {
  isPhoneApproved: state => !!state.phone,
  getMessage: state => state.message,
  hasError: state => state.status === false
};

const actions = {
  [PASS_REQUEST]: ({ commit }, phone ) => {
    return new Promise((resolve, reject) => {
      commit(PASS_REQUEST, phone);
      axios.post('auth', { phone } )
        .then(resp => {
          console.log(resp);
          commit(PASS_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(PASS_ERROR, err);
          reject(err);
        });
    });
  },
  [PASS_LOGOUT]: ({ commit }) => {
    commit(PASS_LOGOUT);
  }
};

const mutations = {
  [PASS_REQUEST]: (state, phone) => {
    state.status = "loading";
    state.phone = phone;
  },
  [PASS_SUCCESS]: (state, resp ) => {
    state.status = resp.data.status;
    state.hasLoadedOnce = true;
    state.message = '';
  },
  [PASS_ERROR]: (state, resp)  => {
    state.message = resp.data.message;
    state.status = false;
    state.hasLoadedOnce = true;
    state.phone = "";
    localStorage.removeItem("user-token");
  },
  [PASS_LOGOUT]: (state, resp)  => {
    state.phone = "";
    localStorage.removeItem("user-token");
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
