import React from 'react';

function foo(bar: string) {
  return { baz: 1 }
}
type FooReturn = ReturnType<typeof foo>;
export const Example1 = (bar: string) => {
  return <div>return type</div>
}

function foo2() {
  return { 
    a: 1,
    b: '',
    example: [{
      c: true,
      d: 3
    }]
  }
}

type InstType = ReturnType<typeof foo2>;
type SubInstArr = InstType['example'];
type SubIsntType = SubInstArr[0];
let bas: SubIsntType = {
  c: true,
  d: 12000
}
