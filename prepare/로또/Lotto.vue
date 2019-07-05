<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <ball v-for="ball in winBalls" :key="ball" :number="ball"></ball>
    </div>
    <div>보너스!</div>
    <ball v-if="bonus" :number="bonus"></ball>
    <button v-if="redo" @click="onClickRedo">한 번 더!</button>
  </div>
</template>
<script>
  import Ball from './Ball';

  function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }

  let timeouts = [];
  export default {
    components: {
      ball: Ball,
    },
    data() {
      return {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
        timeouts: [],
      };
    },
    methods: {
      onClickRedo() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
        this.timeouts = [];
      },
      showBalls() {
        for (let i = 0; i < this.winNumbers.length - 1; i++) {
          this.timeouts[i] = setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 1000);
        }
        this.timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 7000);
      }
    },
    created() {
      console.log('created');
    },
    mounted() {
      console.log('mounted');
      this.showBalls();
    },
    beforeUpdate(...rest) {
      console.log(...rest);
    },
    beforeDestroy() {
      this.timeouts.forEach(v => {
        clearTimeout(v);
      });
    },
    watch: {
      timeouts(val, oldVal) {
        console.log('watch timeouts', val, oldVal);
        if (val.length === 0) {
          this.showBalls();
        }
      },
    },
  };
</script>

<style></style>
