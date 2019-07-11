<template>
  <table>
    <tr-component v-for="(_, i) in tableData" :key="i" :row-index="i" />
  </table>
</template>

<script>
  import TrComponent from './TrComponent';

  export default {
    components: {
      TrComponent,
    },
    computed: {
      tableData() {
        return this.$store.state.tableData;
      },
    },
  };
</script>

<style>

</style>
