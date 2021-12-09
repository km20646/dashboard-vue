const state = {
  page: null,
  indexed: 'from store'
};
const getters = {
  getIndex() {
    console.log(state.indexed);
    return state.indexed;
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
