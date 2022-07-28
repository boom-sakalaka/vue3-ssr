<template>
  <!-- 添加visibility: hidden防止初始化之前显示出来 -->
  <textarea :id="editorId" style="visibility: hidden"></textarea>
</template>

<script setup lang="ts">
import tinymce, { Editor } from 'tinymce/tinymce';

import 'tinymce/skins/ui/oxide/skin.min.css'; //富文本样式
import 'tinymce/icons/default'; //富文本样式
// 把tinymce插件引入抽取为一个文件
import { contentStyle } from './plugins';
import { ref, watch, onMounted } from 'vue';

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

interface Props {
  modelValue: string;
  opt?: object;
  disabled?: boolean;
}
// 设置默认值
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
});

onMounted(() => {
  init();
});

const editorId = ref<string>(`editor-${Math.floor(Math.random() * 1000000)}`);
const editor = ref<Editor>();

watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (editor.value && val !== oldVal && val !== editor.value.getContent!()) {
      editor.value.setContent(val);
    }
  }
);

watch(
  () => props.disabled,
  val => {
    if (editor.value !== null) {
      editor.value?.setMode(val ? 'readonly' : 'design');
    }
  }
);

const init = () => {
  // 默认配置
  const opt = {
    // selector dom 来初始化
    selector: '#' + editorId.value,
    // menubar 不想顶栏太高所以隐藏掉了
    menubar: false,
    // 指定使用的插件
    plugins: [
      'autolink lists link image',
      'searchreplace charmap emoticons',
      'media help paste wordcount codesample hr preview',
    ],
    // 选择显示在 toolbar 上的功能
    toolbar:
      'bold italic underline strikethrough lineheight | forecolor backcolor removeformat | ' +
      'fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist | outdent indent | subscript superscript | hr | ' +
      'charmap emoticons | codesample | preview help',
    // link image media
    // 指定使用的字体，默认没有中文字体
    font_formats:
      'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;宋体=宋体;黑体=黑体;仿宋=仿宋;微软雅黑=Microsoft YaHei;楷体-GB2312=楷体-GB2312',
    // 引入语言包，也要引入下载好的js文件，下载地址(https://www.tiny.cloud/get-tiny/language-packages/)
    language_url: '/zh_CN.js', // 语言包位置，因为放在public下所以可以省略public
    language: 'zh_CN',
    height: 500,
    // 工具栏显示模式，默认只显示一行
    // toolbar_mode: 'wrap',
    // 如果不用cdn，要手动引入皮肤样式
    skin: false,
    content_css: false,
    content_style: contentStyle,
    // 图片上传
    automatic_uploads: true,
    file_picker_types: 'image',
    branding: false,
    // images_upload_handler: (blobInfo, success, failure) => {
    //   // 调用了一个公共函数，会返回上传好的图片地址
    //   // uploadFile({ filename: blobInfo.filename(), blob: blobInfo.blob() })
    //   //   .then(res => {
    //   //     success(res)
    //   //   })
    //   //   .catch(err => {
    //   //     console.debug(err)
    //   //     failure(err)
    //   //   })
    // },
    // 合并配置
    ...props.opt,
    // 富文本实例化之前执行的回调
    setup: (ed: Editor) => {
      editor.value = ed;
      // 注册初始化的事件
      editor.value.on('init', () => initSetup());
    },
  };

  // 参数
  tinymce.init(opt);
};

const initSetup = () => {
  if (!editor.value) return;
  editor.value?.setContent(props.modelValue);

  // 注册富文本更新的事件，监听更新实现v-model
  editor.value?.on('change keyup undo redo', () => {
    const content = editor.value?.getContent();
    // this.$emit('input', content)
    emit('update:modelValue', content as string);
  });
};
</script>
<style lang="scss" scoped></style>
