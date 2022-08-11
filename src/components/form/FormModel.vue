<template>
  <el-dialog v-model="dialogVisible" :closeOnClickModal="false" title="Tips" width="30%">
    <el-form :model="form" :label-width="props.labelWidth" ref="ruleFormRef">
      <el-row>
        <template v-for="(col, colIndex) in columns" :key="col.key || col.prop">
          <el-col :span="props.colspan">
            <el-form-item
              v-if="col.component === 'input'"
              :label="col.label"
              v-bind="col.attrs"
              :rules="col.rules"
              :prop="col.prop"
            >
              <el-input
                v-model="form[col.prop]"
                :placeholder="col.placeholder"
                v-bind="col.componentProps || {}"
                v-on="col.componentListeners || {}"
              />
            </el-form-item>

            <el-form-item
              v-if="col.component === 'select'"
              :label="col.label"
              v-bind="col.attrs"
              :rules="col.rules"
              :prop="col.prop"
            >
              <el-select
                v-model="form[col.prop]"
                :placeholder="col.placeholder"
                v-bind="col.componentProps || {}"
                v-on="col.componentListeners || {}"
              >
                <el-option v-for="oItem in col.option" :label="oItem.label" :value="oItem.value" :key="oItem.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button :loading="loading" @click="dialogVisible = false">取消</el-button>
        <el-button :loading="loading" type="primary" @click="handleOk">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';

interface IColumns {
  label: string;
  prop: string;
  component: string;
  attrs?: object;
  componentProps?: object;
  componentListeners?: object;
  rules?: object[];
  placeholder?: string;
  option?: { value: any; label: string }[];
}

interface iDataSource {
  [key: string]: any; // 意味着 使用该接口的 对象的key 是可以为任意值
}

interface Props {
  labelWidth?: string;
  loading: boolean;
  columns: IColumns[];
  dataSource: iDataSource;
  colspan?: number;
}

// 设置默认值
const props = withDefaults(defineProps<Props>(), {
  labelWidth: '100px',
  loading: false,
  colspan: 24,
});

const emit = defineEmits<{
  (e: 'ok', value: unknown): void;
}>();

const dialogVisible = ref<boolean>(false);
const showDiolog = () => {
  dialogVisible.value = true;
};

const form = ref<iDataSource>({});
const ruleFormRef = ref<FormInstance>();
const handleOk = async () => {
  if (!ruleFormRef.value) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      emit('ok', form.value);
    } else {
      console.log('error submit!', fields);
    }
  });
};

defineExpose({
  showDiolog,
});
</script>
<style lang="scss" scoped></style>
