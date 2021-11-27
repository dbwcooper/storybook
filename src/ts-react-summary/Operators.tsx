const Obj = {
  a: 1,
};

export type OperationList = {
  typeof: typeof Obj;
  keyof: keyof typeof Obj;
  b: string;
};

const aa: OperationList = {
  typeof: { a: 12 },
  keyof: 'a',
  b: '123'
};

console.log('aa: ', aa);