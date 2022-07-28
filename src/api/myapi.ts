import { request } from '@/utils/request2';

interface Ilist {
  total: number;
  page: number;
  page_size: number;
  list: number[];
}

/* 获取用户信息 */
export const getListInfo = (data: any): Promise<Ilist> => {
  return request<Ilist>(
    {
      url: 'api/getList',
      method: 'get',
      data,
    },
    {
      isMock: true,
    }
  );
};
