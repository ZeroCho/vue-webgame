import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../3.숫자야구/NumberBaseball';
import ResponseCheck from '../4.반응속도체크/ResponseCheck';
import RockScissorsPaper from '../5.가위바위보/RockScissorsPaper';
import LottoGenerator from '../6.로또/LottoGenerator';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/number-baseball', component: NumberBaseball },
    { path: '/response-check', component: ResponseCheck },
    { path: '/rock-scissors-paper', component: RockScissorsPaper },
    { path: '/lotto-generator', component: LottoGenerator },
    { path: '/game/:name', component: GameMatcher } // /game
  ],
});
