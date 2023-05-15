import React from 'react';

export default function Dialog(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.7)',
        position: 'fixed',
        top: 0,
        left: 0,
        // 失效
        zIndex: 9999,
      }}
    >
      Dialog
      <button onClick={props.close}>close</button>
    </div>
  );
}
