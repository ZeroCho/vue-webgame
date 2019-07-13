<template>
  <div>
    <mine-form />
    <div>{{timer}}</div>
    <table-component />
    <div>{{result}}</div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import TableComponent from './TableComponent';
  import MineForm from './MineForm';
  import { INCREMENT_TIMER } from './store';

  let timer = null;
  export default {
    components: {
      TableComponent,
      MineForm,
    },
    computed: {
      ...mapState(['timer', 'result', 'halted'])
    },
    mounted() {
      timer = setInterval(() => {
        this.$store.commit(INCREMENT_TIMER);
      }, 1000);
    },
    beforeDestroy() {
      clearTimeout(timer);
    },
    watch: {
      halted(value) {
        if (value === true) {
          clearTimeout(timer);
        }
      }
    }
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
