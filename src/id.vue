<template>
  <div>
    <div>Page: {{ $route.params.id }}</div>
    <Child />
  </div>
</template>

<script setup lang="ts">
import Child from './child.vue';
import { sleep } from './sleep';

console.log('waiting');
await sleep(3000);
console.log('waited');
</script>
