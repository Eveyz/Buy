var React = require('react');

import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/users_actions';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const domNode = findDOMNode(this.refs.modal);
    domNode.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

  componentWillUnmount() {
    const domNode = findDOMNode(this.refs.modal);
    domNode.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(event) {
    const domNode = findDOMNode(this);
    const modalContent = findDOMNode(this.refs.modalContent);
    const target = event.target;
    if (target.contains(modalContent) && target != modalContent) {
      this.closeModal();
    }
  }

  loginModal() {
    this.props.loginModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  handleSubmit() {
    const user = {
      email: findDOMNode(this.refs.email).value,
      username: findDOMNode(this.refs.username).value,
      firstname: findDOMNode(this.refs.firstname).value,
      lastname: findDOMNode(this.refs.lastname).value,
      password: findDOMNode(this.refs.password).value,
      passwordCon: findDOMNode(this.refs.passwordCon).value,
      agreement: findDOMNode(this.refs.agreement).checked
    };
    // console.log(user);
    this.props.signup(user);
    this.props.closeModal();
  }

  render() {
    return(
      <div className="custom-modal" ref="modal">
        <div className="custom-modal-content" ref="modalContent">
          <span className="custom-close" onClick={this.closeModal.bind(this)}>&times;</span>
          <div className="row">
            <div className="col s12 no-padding">
              <div className="row no-margin">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" ref="firstname"></input>
                  <label htmlFor="first_name">姓氏</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" ref="lastname"></input>
                  <label htmlFor="last_name">名字</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="input-field col s12">
                  <input id="username" type="text" className="validate" ref="username"></input>
                  <label htmlFor="username">用户名</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" ref="password"></input>
                  <label htmlFor="password">密码</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="input-field col s12">
                  <input id="passwordCon" type="password" className="validate" ref="passwordCon"></input>
                  <label htmlFor="passwordCon">确认密码</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" ref="email"></input>
                  <label htmlFor="email">邮箱地址</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="col s12">
                  <p>
                    <input type="checkbox" id="agreements" defaultChecked="checked" ref="agreement" />
                    <label htmlFor="agreements">我同意注册条款</label>
                  </p>
                  <button type="button" className="btn waves-effect waves-light" onClick={this.handleSubmit.bind(this)}>注册</button>
                  <hr/>
                  <p>已有账号，请直接登录</p>
                  <button type="button" className="btn waves-effect waves-light red" onClick={this.loginModal.bind(this)}>登录</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => dispatch(signup(user)),
  };
}

module.exports = connect(null, mapDispatchToProps)(SignupForm);

// module.exports = SignupForm;