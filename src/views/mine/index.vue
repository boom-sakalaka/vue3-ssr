<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

console.log(route.query);
</script>

<template>
  <div>
    个人中心
    <button
      @click="
        () => {
          router.push({ name: 'home', params: { id: 2 } });
        }
      "
    >
      首页
    </button>
  </div>
</template>

<style scoped></style>
