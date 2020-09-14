import React, {Component} from 'react';
import {Badge, Toast, ActivityIndicator, Modal} from "antd-mobile";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavTitle: '<。)#)))≦',
      account: '',
      nickname: '',
      password: '',
      animating: false,
      modal1: false
    }
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
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
    const {account, nickname, password} = this.state

    if (!account || !nickname || !password) {
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

        <div className="register-layout">
          <h3>注&nbsp;&nbsp;册</h3>
          <div className="content">
            <p>
              <span>账号<input type="text" maxLength="8" name='account' value={this.state.account}
                             onChange={this.inputHandle}/></span>
            </p>
            <p>
              <span>昵称<input type="text" name="nickname" maxLength="8" value={this.state.nickname}
                             onChange={this.inputHandle}/></span>
            </p>
            <p>
              <span>密码<input type="password" maxLength="16" name="password" value={this.state.password}
                             onChange={this.inputHandle}/></span>
            </p>
            <p>
              <button onClick={this.go}>注册</button>
            </p>
            <p>
              <span>注册即同意<p onClick={this.showModal('modal1')}>《用户协议》</p></span>
            </p>
          </div>
        </div>
        <ActivityIndicator
          toast
          text="正在注册用户"
          animating={this.state.animating}
        />
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="Title"
          style={{
            width:300
          }}
          footer={[{
            text: 'Ok', onPress: () => {
              this.onClose('modal1')();
            }
          }]}
        >
          <div style={{
            overflow: 'scroll'
          }}>
            scoll content...<br/>
            scoll content...<br/>
            scoll content...<br/>
            scoll content...<br/>
            scoll content...<br/>
            scoll content...<br/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Index;