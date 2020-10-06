import Vue from 'vue';
import MineSweeper from './MineSweeper';

new Vue({
  render: createElement => createElement(MineSweeper)
}).$mount('#root');
