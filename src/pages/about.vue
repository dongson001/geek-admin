<template>
  <h1>这是关于页面</h1>
  <Rate v-model="score"></Rate>

  <Rate v-model="score">课程评分</Rate>
  <Rate v-model="score">
    <img width="14" src="/favicon.ico" />
  </Rate>
  <!-- <Rate v-model="3.5"></Rate> -->
  <t></t>
</template>

<script setup>
import { ref } from 'vue';
import Rate from '../components/Rate.vue';
import t from '../components/t.vue';
let score = ref(3);
// function update(value) {
//   score.value = value;
// }
</script>

<style lang="scss" scoped></style>
