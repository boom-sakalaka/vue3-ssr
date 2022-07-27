import 'tinymce/themes/silver'
// 富文本语言包
// import './zh_CN.js'

import 'tinymce/icons/default/icons'

import 'tinymce/plugins/autolink'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/emoticons/js/emojis'
import 'tinymce/plugins/help'
import 'tinymce/plugins/codesample'

// 富文本 iframe 的样式，这里只引入了图片缩放的样式
const contentStyle =
  '.mce-content-body audio[data-mce-selected],.mce-content-body embed[data-mce-selected],.mce-content-body img[data-mce-selected],.mce-content-body object[data-mce-selected],.mce-content-body video[data-mce-selected]{outline:3px solid #b4d7ff}' +
  '.mce-content-body img::selection{background:0 0}' +
  '.mce-content-body div.mce-resizehandle{background-color:#4099ff;border-color:#4099ff;border-style:solid;border-width:1px;box-sizing:border-box;height:10px;position:absolute;width:10px;z-index:1298}.mce-content-body div.mce-resizehandle:hover{background-color:#4099ff}.mce-content-body div.mce-resizehandle:nth-of-type(1){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(2){cursor:nesw-resize}.mce-content-body div.mce-resizehandle:nth-of-type(3){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(4){cursor:nesw-resize}.mce-content-body .mce-resize-backdrop{z-index:10000}.mce-content-body .mce-clonedresizable{cursor:default;opacity:.5;outline:1px dashed #000;position:absolute;z-index:10001}.mce-content-body .mce-clonedresizable.mce-resizetable-columns td,.mce-content-body .mce-clonedresizable.mce-resizetable-columns th{border:0}.mce-content-body .mce-resize-helper{background:#555;background:rgba(0,0,0,.75);border:1px;border-radius:3px;color:#fff;display:none;font-family:sans-serif;font-size:12px;line-height:14px;margin:5px 10px;padding:5px;position:absolute;white-space:nowrap;z-index:10002}'

export { contentStyle }
