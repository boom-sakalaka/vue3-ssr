<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { useI18n } from 'vue-i18n';
import en from 'element-plus/lib/locale/lang/en';
const { locale: localeLanguage, t } = useI18n();

const locale = ref(zhCn);

//修改语言
const changLang = (language: any) => {
  locale.value = language;
  localeLanguage.value = language.name;
  console.log('name', language);
};
</script>

<template>
  <el-config-provider :locale="locale">
    {{ t('header.orders') }}
    <button @click="changLang(zhCn)">中文</button>
    <button @click="changLang(en)">英文</button>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
