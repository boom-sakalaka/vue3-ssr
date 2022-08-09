<template>
  <div>Elmessage 封装</div>

  <div></div>
</template>

<script setup lang="ts">
import useCurrentInstance from '@/utils/useCurrentInstance.js';
const { proxy } = useCurrentInstance();
proxy!.$message('测试');

// proxy?.$message({
//   message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
// });
</script>
<style lang="scss" scoped></style>
