<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
  export default {
    props: ['rowIndex', 'cellIndex', 'cellData'],
    methods: {
      onClickTd() {
        if (this.cellData) return;
        console.log(this, this.$root.$data.tableData);
        this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
        this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O';
      },
    }
  }
</script>

<style>

</style>
