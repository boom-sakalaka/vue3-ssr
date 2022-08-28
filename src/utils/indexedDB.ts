export default class DB {
  private dbName: string; // 数据库名称

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  // 打开数据库
  public openStore(storeName: string, keyPath: string, index?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 2);

    request.onsuccess = event => {
      console.log('数据库打开成功');
      console.log(event);
    };

    request.onerror = event => {
      console.log('数据库打开失败');
      console.log(event);
    };

    request.onupgradeneeded = event => {
      console.log('数据库升级成功');
      const { result }: any = event.target;
      const store = result.createObjectStore(storeName, {
        autoIncrement: true,
        keyPath,
      });
      if (index && index.length) {
        index.map(v => {
          store.createIndex(v, v, { unique: true });
        });
      }

      store.transaction.oncomplete = (event: unknown) => {
        console.log('创建对象仓库成功');

        console.log(event);
      };
      console.log(event);
    };
  }
}
