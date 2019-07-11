import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
  },
  mutations: {
    SET_WINNER(state, winner) {
      state.winner = winner;
    },
    CLICK_CELL(state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn);
    },
    CHANGE_TURN(state) {
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    RESET_GAME(state) {
      state.turn = 'O';
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    },
    NO_WINNER(state) {
      state.winner = '';
    },
  },
});
