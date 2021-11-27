import React from 'react';

// 可见 https://github.com/microsoft/TypeScript/blob/2c458c0d1ccb96442bca9ce43aa987fb0becf8a9/src/lib/es5.d.ts#L1401-L1474
// 把传入可选项 变为 必选项
type Required<T> = { [P in keyof T]-?: T[P]};

// 把传入必选项 变为 可选项
type Option<T> = {
  [P in keyof T]+?: T[P]
};

// 去掉 传入的readonly的选项
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

export const Example = () => {
  return <div>Utilities</div>
}