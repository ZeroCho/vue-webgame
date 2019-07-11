import Vue from 'vue';
import TicTacToe from './TicTacToe';
import store from './store';

new Vue({
  el: '#root',
  store,
  template: '<TicTacToe />',
  components: {
    TicTacToe,
  },
});
