<template>
  <tr>
    <td-component v-for="(r, i) in rowData" :key="i" :row-index="rowIndex" :cellIndex="i" :cellData="r" />
  </tr>
</template>

<script>
  import TdComponent from './TdComponent';

  export default {
    props: ['rowData', 'rowIndex'],
    components: {
      TdComponent,
    },
    mounted() {
      console.log(this.rowData);
    },
    updated() {
      console.log(this.rowData);
    }
  }
</script>

<style>

</style>
