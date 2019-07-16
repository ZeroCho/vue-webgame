<template>
  <td
    @click="onClickTd"
    @contextmenu.prevent="onRightClickTd"
    :style="cellDataStyle"
  >
    {{cellDataText}}
  </td>
</template>

<script>
  import { mapState } from 'vuex';

  import { CLICK_MINE, CODE, FLAG_CELL, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL } from './store';

  export default {
    props: ['rowIndex', 'cellIndex'],
    computed: {
      ...mapState({
        cellData(state) {
          return state.tableData[this.rowIndex][this.cellIndex];
        },
        halted: state => state.halted,
        tableData: state => state.tableData,
        cellDataStyle(state) {
          switch (state.tableData[this.rowIndex][this.cellIndex]) {
            case CODE.NORMAL:
            case CODE.MINE:
              return {
                background: '#444',
              };
            case CODE.CLICKED_MINE:
            case CODE.OPENED:
              return {
                background: 'white',
              };
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
              return {
                background: 'yellow',
              };
            case CODE.FLAG_MINE:
            case CODE.FLAG:
              return {
                background: 'red',
              };
            default:
              return {
                background: 'white',
              };
          }
        },
        cellDataText(state) {
          switch (state.tableData[this.rowIndex][this.cellIndex]) {
            case CODE.NORMAL:
              return '';
            case CODE.MINE:
              return 'X';
            case CODE.CLICKED_MINE:
              return '펑';
            case CODE.FLAG_MINE:
            case CODE.FLAG:
              return '!';
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
              return '?';
            default:
              return state.tableData[this.rowIndex][this.cellIndex] || '';
          }
        },
      }),
    },
    methods: {
      onClickTd() {
        if (this.halted) {
          return;
        }
        switch (this.tableData[this.rowIndex][this.cellIndex]) {
          case CODE.OPENED:
          case CODE.FLAG_MINE:
          case CODE.FLAG:
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            return;
          case CODE.NORMAL:
            this.$store.commit(OPEN_CELL, { row: this.rowIndex, cell: this.cellIndex });
            return;
          case CODE.MINE:
            this.$store.commit(CLICK_MINE, { row: this.rowIndex, cell: this.cellIndex });
            return;
          default:
            return;
        }
      },
      onRightClickTd() {
        if (this.halted) {
          return;
        }
        switch (this.tableData[this.rowIndex][this.cellIndex]) {
          case CODE.NORMAL:
          case CODE.MINE:
            this.$store.commit(FLAG_CELL, { row: this.rowIndex, cell: this.cellIndex });
            return;
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            this.$store.commit(QUESTION_CELL, { row: this.rowIndex, cell: this.cellIndex });
            return;
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            this.$store.commit(NORMALIZE_CELL, { row: this.rowIndex, cell: this.cellIndex });
            return;
          default:
            return;
        }
      },
    },
    updated() {
      console.log(this.rowIndex, this.cellIndex, 'updated');
    }
  };
</script>

<style>

</style>
