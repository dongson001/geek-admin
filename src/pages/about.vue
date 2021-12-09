<template>
  <h1>这是关于页面</h1>
  <Rate v-model="score"></Rate>

  <Rate v-model="score">课程评分</Rate>
  <Rate v-model="score">
    <img width="14" src="/favicon.ico" />
  </Rate>
  <!-- <Rate v-model="3.5"></Rate> -->
  <t></t>
  <Heading :level="7">hello geekBang</Heading>
  <Todo></Todo>
</template>

<script setup>
import { ref } from 'vue';
import Rate from '../components/Rate.vue';
import t from '../components/t.vue';
import Heading from '../components/Heading.jsx';
import Todo from '../components/Todo.jsx';
let score = ref(3);
// function update(value) {
//   score.value = value;
// }
</script>

<style lang="scss" scoped></style>
