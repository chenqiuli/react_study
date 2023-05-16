import React, { Component } from 'react';
import styles from "./App.module.css";
// import Dialog from './components/Dialog';
import PortalDialog from './components/PortalDialog';

class App extends Component {
  state = {
    isShow: false
  };

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <button onClick={() => {
            this.setState({
              isShow: true
            });
          }}>click</button>
          {/* 1. 引出portal */}
          {/* {this.state.isShow && <Dialog close={() => {
            this.setState({
              isShow: false
            });
          }}></Dialog>} */}

          {/* 
          React的Portal是一种特殊的渲染方式，允许将子组件渲染到父组件DOM层次结构以外的位置。

        
          */}
          {this.state.isShow && <PortalDialog close={() => {
            this.setState({
              isShow: false
            });
          }}>
            <div>111</div>
            <div>222</div>
            <div>333</div>
          </PortalDialog>}
        </div>
      </div>
    );
  }
}

export default App;


/**
 * portal：操作Dom节点的
 * 当有弹窗需要在整个页面弹出的时候，这个时候就要用portal
 * 
 * 
 */