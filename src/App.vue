<script setup lang="ts">
import { Suspense } from "vue";
import { RouterView, RouterLink, useRoute } from "vue-router";
import Loading from "./loading.vue";
const route = useRoute();
</script>

<template>
  <div>
    <ul>
      <li>
        <RouterLink to="/">/</RouterLink>
      </li>
      <li>
        <RouterLink to="/abc">/abc</RouterLink>
      </li>
      <li>
        <RouterLink to="/qwe">/qwe</RouterLink>
      </li>
      <li>
        <RouterLink to="/zxc">/zxc</RouterLink>
      </li>
    </ul>
    <div>Param: {{ route.params.id ?? "no" }}</div>
    <RouterView v-slot="{ Component, route }">
      <Suspense :timeout="0">
        <template #default>
          <component :is="Component" :key="route.params.id" />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>
