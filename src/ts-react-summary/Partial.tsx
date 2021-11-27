import React, { useCallback } from 'react';

type sdd = {
  foo: number;
  bar: number;
};
export const Example1 = () => {
  const [state, setState] = React.useState({
    foo: 1,
    bar: 2,
  });
  // 可以不用声明 state的类型， 直接使用 typeof
  const partialStateUpdate = (obj: Partial<typeof state>) =>
    setState({
      ...state,
      ...obj,
    });

  const onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void = useCallback(() => {}, []);
  return (
    <div>
      <h4>state:</h4>
      <span>{`foo: ${state.foo}`}</span>
      <span>{`bar: ${state.bar}`}</span>

      <button onClick={onClick}>update state</button>
    </div>
  );
};
