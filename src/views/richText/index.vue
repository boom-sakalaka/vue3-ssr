<template>
  <div>
    <MyEditor v-model="richText" />

    <h1>{{ richText }}</h1>
  </div>
</template>

<script setup lang="ts">
import MyEditor from '@/components/richText/tinymce/myEditor.vue';
import { ref } from 'vue';

const richText = ref<string>('');
</script>
<style lang="scss" scoped></style>
