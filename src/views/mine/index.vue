<script setup lang="ts">
import { GLB_STATUS_ENUM } from '@/const';
import { useRouter } from 'vue-router';

console.warn(
  GLB_STATUS_ENUM.getList({
    format: (item: { text: any }) => ({
      lable: item.text,
    }),
  })
);

const router = useRouter();
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
