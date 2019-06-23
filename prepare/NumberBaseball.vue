<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value">
            <button>입력!</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  };
  export default {
    data: {
      answer: getNumbers(),
      tries: [],
      value: '',
      result: '',
    },
    methods: {
      onSubmitForm(e) {
        e.preventDefault();
        if (this.value === this.answer.join('')) {
          this.tries.push({
            try: this.value,
            result: '홈런',
          });
          this.result = '홈런!';
          alert('게임을 다시 실행합니다.');
          this.value = '';
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
        } else {
          const answerArray = this.value.split('').map(v => parseInt(v));
          let strike = 0;
          let ball = 0;
          if (this.tries.length >= 9) {
            this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다!`;
            alert('게임을 다시 시작합니다.');
            this.value = '';
            this.answer = getNumbers();
            this.tries = [];
            this.$refs.answer.focus();
          } else {
            console.log('답은', this.answer.join(''));
            for (let i = 0; i < 4; i += 1) {
              if (answerArray[i] === this.answer[i]) {
                console.log('strike', answerArray[i], this.answer[i]);
                strike += 1;
              } else if (this.answer.includes(answerArray[i])) {
                console.log('ball', answerArray[i], this.answer.indexOf(answerArray[i]));
                ball += 1;
              }
            }
            this.tries.push({
              try: this.value,
              result: `${strike} 스트라이크, ${ball} 볼입니다.`,
            });
            this.value = '';
            this.$refs.answer.focus();
          }
        }
      },
    },
  };
</script>
<style>

</style>
