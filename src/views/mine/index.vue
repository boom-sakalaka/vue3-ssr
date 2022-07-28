<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { getListInfo } from '@/api/myapi';

const router = useRouter();
const route = useRoute();

const resutl = await getListInfo({ pages: 1, name: 2 });
console.warn(resutl.list);
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
