<template>
  <tr>
    <td-component v-for="(_, i) in rowData" :key="i" :row-index="rowIndex" :cellIndex="i" />
  </tr>
</template>

<script>
  import TdComponent from './TdComponent';

  export default {
    props: ['rowIndex'],
    components: {
      TdComponent,
    },
    computed: {
      rowData() {
        return this.$store.state.tableData[this.rowIndex];
      },
    },
  };
</script>

<style>

</style>
