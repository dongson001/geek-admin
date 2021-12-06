<template>
  <component :is="comp"></component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from './grouter';
const router = useRoute();
const comp = computed(() => {
  const route = router.routes.find((r) => r.path === router.current.value);
  return route ? route.component : null;
});
</script>

<style scoped></style>
