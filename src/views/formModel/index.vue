<template>
  <div>
    <el-button @click="showForm">显示表格</el-button>
    <FormModal
      ref="formModelRef"
      :title="modelDataSource && modelDataSource.id ? '编辑' : '新增'"
      :columns="modalColumns"
      :dataSource="modelDataSource"
      :loading="modelLoading"
      @ok="handleReData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormModal from '@/components/form/FormModel.vue';

type IFormModal = InstanceType<typeof FormModal>;

const modelDataSource = ref({ id: 1, status: 1 });
const modalColumns = ref([
  {
    label: 'id编码',
    prop: 'id',
    component: 'input',
    rules: [{ required: true, message: '请输入ID编码', trigger: 'change' }],
  },
  {
    label: '状态',
    prop: 'status',
    component: 'select',
    rules: [{ required: true, message: '请选择状态', trigger: 'change' }],
    option: [
      { value: 1, label: '激活' },
      { value: 2, label: '未激活' },
    ],
  },
]);
const modelLoading = ref<boolean>(false);
const handleSaveOrEdit = () => {};

// 显示表格
const formModelRef = ref<IFormModal | null>(null);
const showForm = () => {
  formModelRef.value?.showDiolog();
};

const handleReData = (data: unknown) => {
  console.warn(data);
};
</script>
<style lang="scss" scoped></style>
