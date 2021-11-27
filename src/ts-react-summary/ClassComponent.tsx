import React, { Component } from 'react';
type Props = {
  name: string;
};
type State = {
  age: number;
};

export declare interface AppProps {
  children: React.ReactNode; // best, accepts everything
  functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  props: Props & React.PropsWithoutRef<JSX.IntrinsicElements['button']>; // to impersonate all the props of a button element without its ref
}

export default class ClassComponent extends Component<Props, State> {
  static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Partial<State> | null {
    return null;
  }

  onChange = (e:React.FormEvent<HTMLInputElement>): void => {
    console.log('e.currentTarget.value: ', e.currentTarget.value)
  }

  handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('e.currentTarget.value: ', e.currentTarget.value)
  }

  render() {
    return <div></div>;
  }
}

class Comp extends React.Component<
  Props,
  ReturnType<typeof Comp["getDerivedStateFromProps"]>
> {
  static getDerivedStateFromProps(props: Props) {}
}