import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('root') as HTMLDivElement;

export default class Modal extends React.Component {
  el: HTMLDivElement = document.createElement('div');

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }
  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
