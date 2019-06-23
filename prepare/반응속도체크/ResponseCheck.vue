<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <div v-show="result.length">
            <div>평균 시간: {{result.reduce((a, c) => a + c / result.length, 0)}}ms</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>
<script>
  let startTime = 0;
  let endTime = 0;
  let timeOut = null;
  export default {
    data: {
      message: '클릭해서 시작하세요.',
      state: 'waiting',
      result: [],
    },
    methods: {
      onClickScreen() {
        if (this.state === 'waiting') {
          timeOut = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭';
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000);
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요';
        } else if (this.state === 'ready') {
          clearTimeout(timeOut);
          this.state = 'waiting';
          this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.';
        } else if (this.state === 'now') {
          endTime = new Date();
          this.state = 'waiting';
          this.message = '클릭해서 시작하세요.';
          this.result.push(endTime - startTime);
        }
      },
      onReset() {
        this.result = [];
      },
    },
  };
</script>
<style>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>
