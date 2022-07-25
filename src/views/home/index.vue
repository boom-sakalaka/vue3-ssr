<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import useCurrentInstance from '@/utils/useCurrentInstance.js';

const router = useRouter();
const route = useRoute();

const { proxy } = useCurrentInstance();

// proxy?.$message({
//   message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
// });

proxy!.$message('测试');

console.log(route.params);
</script>

<template>
  <div class="my-text">
    首页
    <el-button
      type="primary"
      @click="
        () => {
          router.push({ path: '/mine', query: { id: 1 } });
        }
      "
    >
      个人中心
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.my-text {
  background: $red;
}
</style>
