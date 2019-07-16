<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
  export default {
    props: ['rowIndex', 'cellIndex'],
    computed: {
      cellData() {
        console.log('updated');
        return this.$store.getters.tableData[this.rowIndex][this.cellIndex];
      },
    },
    methods: {
      onClickTd() {
        if (this.cellData) return;

        this.$store.commit('CLICK_CELL', { row: this.rowIndex, cell: this.cellIndex });
        const state = this.$store.state;

        let win = false;
        if (state.tableData[this.rowIndex][0] === state.turn && state.tableData[this.rowIndex][1] === state.turn && state.tableData[this.rowIndex][2] === state.turn) {
          win = true;
        }
        if (state.tableData[0][this.cellIndex] === state.turn && state.tableData[1][this.cellIndex] === state.turn && state.tableData[2][this.cellIndex] === state.turn) {
          win = true;
        }
        if (state.tableData[0][0] === state.turn && state.tableData[1][1] === state.turn && state.tableData[2][2] === state.turn) {
          win = true;
        }
        if (state.tableData[0][2] === state.turn && state.tableData[1][1] === state.turn && state.tableData[2][0] === state.turn) {
          win = true;
        }
        if (win) { // 승리시
          this.$store.commit('SET_WINNER', state.turn);
          this.$store.commit('RESET_GAME');
        } else {
          let all = true; // all이 true면 무승부라는 뜻
          state.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) {
            this.$store.commit('RESET_GAME');
            this.$store.commit('NO_WINNER');
          } else {
            this.$store.commit('CHANGE_TURN');
          }
        }
      },
    },
  };
</script>

<style>

</style>
