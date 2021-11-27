import React from 'react';

export const Hello: React.FC<{ greet: string }> = ({ greet }) => {
  return <div>{greet}</div>;
};
export default Hello;
