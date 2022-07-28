import { ENUM } from '@/utils/enum';

/** 状态 */
export const GLB_STATUS_ENUM = new ENUM([
  {
    key: 'ENABLED',
    value: 1,
    text: '启用',
  },
  {
    key: 'DISABLED',
    value: 0,
    text: '禁用',
  },
]);
