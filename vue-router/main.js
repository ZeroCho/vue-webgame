import Vue from 'vue';
import Router from './Router';

new Vue({
  render: createElement => createElement(Router)
}).$mount('#root');
