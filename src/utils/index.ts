/**
 * 下载文件
 * @param {*} params
 * @returns
 */
export function downloadFile(params: { data: BlobPart; headers: { 'content-disposition': string } }) {
  const { data, headers } = params;
  if (!data || (data as Blob).size === 0) {
    // message.warning('文件下载失败');
    return;
  }
  let name = headers && headers['content-disposition'].split(';')[1].split('filename=')[1];
  name = decodeURIComponent(name).replaceAll('"', '');
  let url = window.URL.createObjectURL(new Blob([data]));
  let link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', name || '导出.xlsx');
  document.body.appendChild(link);
  // link.click()
  link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  document.body.removeChild(link); // 下载完成移除元素
  window.URL.revokeObjectURL(url); // 释放掉blob对象
}

/**
 * @description:  根据url 导出文件
 * @param {*} url 文件地址
 * @param {*} filename 文件名
 * @return {*}
 */
export function downloadFileByUrl(url: string, filename: string) {
  if (!url) return;
  let link = document.createElement('a'); //创建a标签
  link.style.display = 'none'; //使其隐藏
  link.href = url; //赋予文件下载地址
  link.setAttribute('download', filename); //设置下载属性 以及文件名
  document.body.appendChild(link); //a标签插至页面中
  link.click(); //强制触发a标签事件
  document.body.removeChild(link);
}

export function sleep(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function isVoid(value: any) {
  return value === undefined || value === null || value === '';
}
