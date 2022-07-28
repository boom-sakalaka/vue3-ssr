// TODO text 希望能够根据不同的场景(module), 有不同的取值
interface IList {
  key: string | number;
  value: string | number;
  text: string;
}

export class ENUM {
  [x: string]: any;
  constructor(list: IList[] = []) {
    const descriptor = {
      writable: false,
      configurable: false,
      enumerable: true,
    };

    list.forEach(item => {
      const { key, value, text } = item;

      if (key !== undefined) {
        Object.defineProperty(this, key, {
          ...descriptor,
          value,
        });
      }

      if (text !== undefined) {
        Object.defineProperty(this, value, {
          ...descriptor,
          value: text,
        });
      }
    });

    Object.defineProperty(this, '_list_', {
      ...descriptor,
      value: list,
    });
  }

  getList({ format }: { format?: any } = {}) {
    return typeof format === 'function' ? this._list_.map(format) : this._list_;
  }

  getItem(keyOrVal: string) {
    return this.getList().find(
      (item: { key: string; value: string }) => item.key === keyOrVal || item.value === keyOrVal
    );
  }
}
