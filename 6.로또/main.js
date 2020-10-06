import Vue from 'vue';
import LottoGenerator from './LottoGenerator';

new Vue({
  render: createElement => createElement(LottoGenerator)
}).$mount('#root');
