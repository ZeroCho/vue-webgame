<template>
  <table>
    <tr-component v-for="(row, i) in tableData" :key="i" :row-data="row" :row-index="i" />
  </table>
</template>

<script>
  import TrComponent from './TrComponent';

  export default {
    props: ['tableData'],
    components: {
      TrComponent,
    }
  }
</script>

<style>

</style>
