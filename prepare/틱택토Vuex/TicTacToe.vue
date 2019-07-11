<template>
  <div>
    <table-component />
    <div v-if="winner">{{winner}}님의 승리</div>
  </div>
</template>
<script>
  import TableComponent from './TableComponent';

  export default {
    components: {
      TableComponent,
    },
    computed: {
      winner() {
        return this.$store.state.winner;
      },
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }

  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>
