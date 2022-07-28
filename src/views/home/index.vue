<script setup lang="ts">
import { ref } from 'vue';
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

const size = ref<'' | 'large' | 'small'>('large');

const value1 = ref('');
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

    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
  </div>
</template>

<style lang="scss" scoped>
.my-text {
  background: $red;
}
</style>
