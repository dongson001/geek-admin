<template>
  <div>
    <p @click="add">count:{{ count }}</p>
    <p @click="asyncAdd">SyncCount:{{ count }}</p>
    <p>doubleCount:{{ doubleCount }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// import { useStore } from 'vuex';
import { useStore } from '../store/gvuex';
let store = useStore();
let count = computed(() => store.state.count);
function add() {
  store.commit('add');
}
function asyncAdd() {
  store.dispatch('asyncAdd');
}

let doubleCount = computed(() => store.getters.double);
</script>

<style scoped></style>
