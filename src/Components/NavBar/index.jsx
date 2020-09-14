import React, {Component} from 'react';

import {Badge} from "antd-mobile";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavTitle: '<。)#)))≦',
      isLogged: false
    }
  }

  // TODO

  render() {
    let vDom
    if (this.state.isLogged) {
      vDom = (
        <span>个人中心</span>
      )
    } else {
      vDom = (
        <>
          <span onClick={()=>window.location.href = '/login'}>登陆</span>
          <span className='reg-border' onClick={()=>window.location.href = '/register'}>注册</span>
        </>
      )
    }

    return (
      <div>
        <div className="navbar-layout">
          <div className="l" onClick={()=>window.location.href = '/'}>
            {this.state.NavTitle}
            <Badge text="Beta" style={{
              marginLeft: 5,
              padding: '0 3px',
              borderRadius: 2,
              background: 'none',
              color: '#999999',
              border: '1px solid #999999',
            }}
            /></div>
          <div className="m"></div>
          <div className="r">
            {vDom}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;