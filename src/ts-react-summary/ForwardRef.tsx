import React from 'react';

type Props = { children: React.ReactNode; type: 'submit' | 'button' };
export type Ref = HTMLButtonElement;

export const FancyButton = React.forwardRef<Ref, Props>((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

export class RootRef extends React.Component<Props> {
  private rootRef = React.createRef<HTMLDivElement>();
  render() {
    return <div ref={this.rootRef}>{this.props.children}</div>;
  }
}
