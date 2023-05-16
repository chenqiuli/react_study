import React from 'react';
import ReactDOM from 'react-dom';

export default function PortalDialog(props) {
  return ReactDOM.createPortal(
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.7)',
        position: 'fixed',
        top: 0,
        left: 0,
        // 一定要写比父组件高的层级
        zIndex: 9999,
        color: '#fff',
      }}
    >
      PortalDialog
      {props.children}
      <button onClick={props.close}>close</button>
    </div>,
    document.body
  );
}
