<template>
  <tr>
    <td-component v-for="(row, i) in rowData" :key="i" :row-index="rowIndex" :cellIndex="i" :cellData="row" />
  </tr>
</template>

<script>
  import TdComponent from './TdComponent';

  export default {
    props: ['rowData', 'rowIndex'],
    components: {
      TdComponent,
    },
  }
</script>

<style>

</style>
