export default class DB {
  // 数据库名称
  private dbName: string;
  // 创建事务对象
  private db: any;

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  // 打开数据库
  public openStore(storeName: string, keyPath: string, index?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 1);
    return new Promise(resolve => {
      request.onsuccess = event => {
        const { result }: any = event.target;
        this.db = result;
        console.log('数据库打开成功');
        console.log(event);
        resolve(true);
      };
      request.onerror = event => {
        console.log('数据库打开失败');
        console.log(event);
      };
      request.onupgradeneeded = event => {
        console.log('数据库更新成功');
        // 创建对象仓库
        const { result }: any = event.target;
        const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath });
        if (index && index.length > 0) {
          index.map((v: string) => {
            store.createIndex(v, v, { unique: false });
          });
        }
        store.transaction.oncomplete = (event: any) => {
          console.log('创建对象仓库成功');
        };
        console.log(event);
      };
    });
  }

  // 增、改数据
  updateItem(storeName: string, data: any) {
    // param1:表名 param2:要传入的数据
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName);
    return new Promise(resolve => {
      const request = store.put({
        ...data,
        updateTime: new Date(), // 给对象添加一个时间戳属性，放置因为值相同而插入失败
      });
      request.onsuccess = (event: any) => {
        console.log('更新数据成功');
        console.log(event);
        resolve(true);
      };
      request.onerror = (event: any) => {
        console.log('更新数据失败');
        console.log(event);
      };
    });
  }

  // 删除数据
  deletItem(storeName: string, key: number | string) {
    // param1:表名 param2:要传入的数据
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName);
    return new Promise(resolve => {
      const request = store.delete(key);
      request.onsuccess = (event: any) => {
        console.log('删除数据成功');
        console.log(event);
        resolve(true);
      };

      request.onerror = (event: any) => {
        console.log('删除数据失败');
        console.log(event);
      };
    });
  }

  // 查询所有数据
  getList(storeName: string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName);
    return new Promise(resolve => {
      const request = store.getAll();
      request.onsuccess = (event: any) => {
        console.log('查询所有数据成功');
        console.warn(event);
        console.log(event.target.result);
        resolve(event.target.result);
      };

      request.onerror = (event: any) => {
        console.log('查询所有数据失败');
        console.log(event);
      };
    });
  }

  // 查询单条数据
  getItem(storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName);
    return new Promise(resolve => {
      const request = store.get(key);
      request.onsuccess = (event: any) => {
        console.log('查询数据成功');
        console.log(event.target.result);
        resolve(event.target.result);
      };

      request.onerror = (event: any) => {
        console.log('查询数据失败');
        console.log(event);
      };
    });
  }
}
