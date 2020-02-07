import { DATA_REQUEST, DATA_ERROR, DATA_SUCCESS, DATA_SWITCH } from "../actions/charts";

import axios from "axios";

const state = {
  status: "",
  period: "week",
  data: []
};


const getters = {
  getPeriod: state => state.period,
  getData: state => state.data,
  isDataLoaded: state => state.data.length > 0
};

const actions = {
  [DATA_REQUEST]: ({ commit }) => {
    return new Promise(resolve => {
      commit(DATA_REQUEST);
      axios.get(`mentions/stats`)
        .then(resp => {
          console.log(resp);
          if (resp.data.status) {
            commit(DATA_SUCCESS, resp);
            resolve(resp);
          }
        })
        .catch(() => {
          commit(DATA_ERROR);
          resolve();
        });
    });
  },
  [DATA_SWITCH]: ({ commit }, { period }) => {
    commit(DATA_SWITCH, period);
  }
};

const mutations = {
  [DATA_REQUEST]: state => {
    state.status = 'loading'
  },
  [DATA_SWITCH]: ( state, period )   => {
    console.log(period);
    state.period = period;
  },
  [DATA_SUCCESS]: (state, resp) => {
    state.status = resp.data.status
    state.date = resp.data;
  },
  [DATA_ERROR]: state => {
    state.status = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
