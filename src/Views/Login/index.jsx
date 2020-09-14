import React, {Component} from 'react';
import {ActivityIndicator, Badge, Toast} from "antd-mobile";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavTitle: '<。)#)))≦',
      animating: false,
      account: '',
      password: ''
    }
  }

  inputHandle = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  go = () => {
    // todo
    const {account, password} = this.state

    if (!account || !password) {
      Toast.fail('还未填写完整', 2)
    } else {
      this.setState({
        animating: true
      })
    }
  }

  render() {
    return (
      <div>

        <div className="navbar-layout">
          <div className="l" onClick={() => window.location.href = '/'}>
            {this.state.NavTitle}
            <Badge text="Beta" style={{
              marginLeft: 5,
              padding: '0 3px',
              borderRadius: 2,
              background: 'none',
              color: '#999999',
              border: '1px solid #999999',
            }}
            />
          </div>
          <div className="m"></div>
          <div className="r"></div>

        </div>

        <div className="signin-layout">
          <div className="register-layout">
            <h3>登&nbsp;&nbsp;录</h3>
            <div className="content">
              <p>
              <span>账号<input type="text" maxLength="8" name='account' value={this.state.account}
                             onChange={this.inputHandle}/></span>
              </p>

              <p>
              <span>密码<input type="password" maxLength="16" name="password" value={this.state.password}
                             onChange={this.inputHandle}/></span>
              </p>
              <p>
                <button onClick={this.go}>登&nbsp;录</button>
              </p>
              <p>
                <span>没有账号？<p>点我注册</p></span>
              </p>
            </div>
          </div>
          <ActivityIndicator
            toast
            text="正在登录..."
            animating={this.state.animating}
          />
        </div>
      </div>
    );
  }
}

export default Index;