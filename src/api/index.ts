// 真实线上接口
// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3
// http://110.42.184.111/api/room/room/getRoomList?pageNo=2&pageSize=6&cityCode=hz
import { http } from '@/utils/http';
import IndexDB from '@/utils/indexedDB';

const indexDB = new IndexDB('aribnb');

// 真实接口
export function fetchRoomList() {
  const url =
    'https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3';
  return http.httpRequestGet(url, {});
}

// mock接口
export async function fetchElephant() {
  await indexDB.openStore('elephant', 'id', ['nose', 'ear']);
  const result = indexDB.getList('elephant').then((res: any) => {
    return {
      code: '000000',
      message: '操作成功',
      result: res,
    };
  });
  return result;
}

export function addDB() {
  indexDB.updateItem('elephant', {
    nose: '33m',
    ear: '大',
  });
}
