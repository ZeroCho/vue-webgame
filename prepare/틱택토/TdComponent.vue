<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
  export default {
    props: ['rowIndex', 'cellIndex', 'cellData'],
    methods: {
      onClickTd() {
        if (this.cellData) return;

        const rootData = this.$root.$data;
        this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);

        let win = false;
        if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn) {
          win = true;
        }
        if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
          win = true;
        }
        if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
          win = true;
        }
        if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
          win = true;
        }
        if (win) { // 승리시
          rootData.winner = rootData.turn;
          rootData.turn = 'O';
          rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          rootData.recentCell = [-1, -1];
        } else {
          let all = true; // all이 true면 무승부라는 뜻
          rootData.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) {
            rootData.turn = 'O';
            rootData.winner = '';
            rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
            rootData.recentCell = [-1, -1];
          } else {
            rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
          }
        }
      },
    },
  }
</script>

<style>

</style>
