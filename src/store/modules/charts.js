import { DATA_REQUEST, DATA_ERROR, DATA_SUCCESS, DATA_SWITCH } from "../actions/charts";

import axios from "axios";

const state = {
  status: "",
  period: "week",
  data: {},
};

const getters = {
  getPeriod: state => state.period,
  getData: state => state.data[state],
  isDataLoaded: state => state.status !== 'loading' && state.status
}

const prepareDatasets = response => {
  const dataset = response.data;
  const periods = ['day', 'week', 'month'];
  const datasets = {};
  periods.forEach(period => {
    datasets[period] = {
      labels: dataset[period].dates,
      xAxisID: 'Дата',
      yAxisID: 'Количество',
      datasets: [
        {
          label: ['Позитивные'],
          data: dataset[period].positive.values,
          backgroundColor: 'rgba(14, 214, 220, 0.05)',
          borderColor: '#0ED6DC',
          borderWidth: 2
        },
        {
          label: ['Негативные'],
          data: dataset[period].negative.values,
          backgroundColor:'rgba(241, 117, 78, 0.1)',
          borderColor:'#F17105',
          borderWidth: 2
        }
      ]
    }
  });
  return datasets;
};

const actions = {
  [DATA_REQUEST]: ({ commit }) => {
    return new Promise(resolve => {
      commit(DATA_REQUEST);
      axios.get(`mentions/stats`)
        .then(resp => {
          if (resp.data.status) {
            const data = prepareDatasets(resp);
            commit(DATA_SUCCESS, data);
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
    state.period = period;
  },
  [DATA_SUCCESS]: (state, data) => {
    state.data = data;
    state.status = true;
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

