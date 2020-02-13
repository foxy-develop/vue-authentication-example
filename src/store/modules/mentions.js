import {
  MENTIONS_REQUEST,
  MENTIONS_ERROR,
  MENTIONS_SUCCESS,
  MENTIONS_FILTER_REQUEST,
  MENTIONS_FILTER_SUCCESS,
  MENTIONS_FILTER,
  MENTIONS_CHANGE_FILTER
} from "../actions/mentions";

import axios from "axios";

const state = {
  mentions: null,
  filter: null,
  status: false,
  total: {
    negative: 0,
    positive: 0
  },
  filtered: {
    region_id: '',
    per_page: 10,
    keyword_id : ''
  }
};

const getters = {
  isMentionsLoaded: state => state.status && state.filter && state.mentions,
  getMentions: state => state.mentions,
  getMentionsTotal: state => state.total,
  getFilter: state => state.filter
};

const actions = {
  [MENTIONS_REQUEST]: ({ commit }) => {
    return new Promise(resolve => {
      axios.post(`mentions/list`)
        .then(resp => {
          if (resp.data.status) {
            console.log(resp.data);
            const mentions = resp.data;
            commit(MENTIONS_SUCCESS, mentions);
            resolve();
          }
        })
        .catch(() => {
          commit(MENTIONS_ERROR);
          resolve();
        });
    });
  },
  [MENTIONS_FILTER_REQUEST]: ({ commit }) => {
    return new Promise(resolve => {
      commit(MENTIONS_REQUEST);
      axios.get(`mentions/control`)
        .then(resp => {
          if (resp.data.status) {
            console.log(resp.data);
            const filter = resp.data;
            commit(MENTIONS_FILTER_SUCCESS, filter);
            resolve();
          }
        })
        .catch(() => {
          commit(MENTIONS_ERROR);
          resolve();
        });
    });
  },
  [MENTIONS_CHANGE_FILTER]: ({ commit, dispatch }, { options } ) => {
    return new Promise(resolve => {
      console.log('Запуск фильтра');
      commit(MENTIONS_REQUEST);
      commit(MENTIONS_CHANGE_FILTER, options);
      axios.post(`mentions/list`, {
        per_page: options.per_page,
        region_id: options.region_id,
        keyword_id: options.keyword_id
      })
        .then(resp => {
          if (resp.data.status) {
            console.log('Данные после фильтра');
            console.log(resp.data);
            const mentions = resp.data;
            commit(MENTIONS_SUCCESS, mentions);
            resolve();
          }
        })
        .catch(() => {
          commit(MENTIONS_ERROR);
          resolve();
        });
    });
    // dispatch(MENTIONS_REQUEST);
  }
};

const mutations = {
  [MENTIONS_REQUEST]: state => {
    state.status = 'loading'
  },
  [MENTIONS_SUCCESS]: (state, mentions) => {
    state.total.negative = mentions.negative_mentions_total;
    state.total.positive = mentions.positive_mentions_total;
    state.mentions = mentions.mentions;
    state.status = true;
  },
  [MENTIONS_CHANGE_FILTER]: (state, options)=> {

    state.filtered.per_page = options.per_page != ''? options.per_page : state.filtered.per_page;
    state.filtered.region_id = options.region_id != '' ? options.region_id : state.filtered.region_id;
    state.filtered.keyword_id = options.keyword_id != '' ? options.keyword_id : state.filtered.keyword_id;
  },
  [MENTIONS_FILTER_SUCCESS]: (state, filter) => {
    state.filter = filter;
    state.status = true;
  },
  [MENTIONS_ERROR]: state => {
    state.status = false;
  },
  [MENTIONS_FILTER]: (state, mentions) => {
    state.mentions = mentions;
    state.status = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
