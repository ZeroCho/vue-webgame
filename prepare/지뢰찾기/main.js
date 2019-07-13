import Vue from 'vue';
import MineSearch from './MineSearch';
import store from './store';

new Vue({
  el: '#root',
  store,
  template: '<MineSearch />',
  components: {
    MineSearch,
  },
});
