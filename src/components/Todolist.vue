<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>

    x1:{{ x }} y:{{ y }}

    <h1 @click="toggle">click</h1>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useMouse } from '../utils/mouse';

function useStorage(name, value = []) {
  let data = ref(JSON.parse(localStorage.getItem(name) || value));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}

function useTodos() {
  let title = ref('');
  // let todos = ref([{ title: '学习Vue', done: false }]);
  let todos = useStorage('todos', []);

  function addTodo() {
    todos.value.push({ title: title.value, done: false });
    title.value = '';
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone };
}

let { x, y } = useMouse();
const { title, todos, addTodo, clear, active, all, allDone } = useTodos();

import useFavicon from './model/useFavicon';
let { favicon } = useFavicon();
function loading() {
  favicon.value = '/geek.png';
}

import { useFullscreen } from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
