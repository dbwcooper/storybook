// TS interface 例子
export interface IUser {
  name: string;
  age: number;
  address?: string;
  readonly country?: string;
  // [key: string]: string | number;
}

export type ITools = {
  name: string;
  customer?: string;
  readonly vendor?: string;
  [key: string]: string | undefined;
};

// TS function 例子

export function Append(str: string): string {
  return str + '_append';
}

// 使用 interface 定义函数
interface SearchFunction {
  (source: string, subString: string): boolean;
}
const search: SearchFunction = function (a, b) {
  return a.includes(b);
};

// 可选参数
function urlParse(str: string, length?: number): string {
  return str;
}

// 可选参数 默认值
function urlParse(str: string = '', length?: number): string {
  return str;
}

// 剩余参数
function concat(str: string = '', ...rest: string[]): string {
  return str.concat(rest.join(''));
}

// 函数重载： 精确的表达同一个函数名，但是参数不同时的不同处理方式。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): string | number {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  }
  return x.split('').reverse().join('');
}

const a = reverse(321);
const b = reverse('321');

// TS 类型断言
// 在进行类型判断时 使用 as
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true;
  }
  return false;
}
// 设置 window as any
(window as any).err= 1;

// 双重断言
let aaa = 1;
aaa as any as HttpError;

// 断言 与 泛型

function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}
const tom = getCacheData('tom') as Cat;
tom.run();

function getCacheData1<T>(key: string): T {
  return (window as any).cache[key];
}
const tom1 = getCacheData1<Cat>('tom');
tom1.run();