const header = {
  "Content-Type": "application/json"
};
const state = {
  page: null,
  indexed: 'from store',
  apiJuso: window.location.origin,
  sHeader: header
};

const getters = {
  getApiJuso() {
    return state.apiJuso;
  },
  getHeader() {
    return state.sHeader;
  }
};
// const mutations = {

// };
// const actions = {

// };

export default {
  state,
  getters,
  //   mutations,
  //   actions
}
