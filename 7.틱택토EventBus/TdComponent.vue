<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
  import EventBus from './EventBus';

  export default {
    props: {
      cellData: String,
      rowIndex: Number,
      cellIndex: Number,
    },
    methods: {
      onClickTd() {
        if (this.cellData) return;

        EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
      }
    }
  };
</script>
