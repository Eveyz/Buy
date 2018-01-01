var React = require("react");

import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { login } from '../actions/users_actions';

class LoginForm extends React.Component {
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

  signupModal() {
    this.props.signupModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  handleSubmit() {
    const user = {
      email: findDOMNode(this.refs.email).value,
      password: findDOMNode(this.refs.password).value
    };
    this.props.login(user);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="custom-modal" ref="modal">
        <div className="custom-modal-content" ref="modalContent">
          <span className="custom-close" onClick={this.closeModal.bind(this)}>&times;</span>
          <div className="row">
            <div className="col s12 no-padding">
              <div className="row no-margin">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" ref="email"></input>
                  <label htmlFor="email">邮箱地址</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" ref="password"></input>
                  <label htmlFor="password">密码</label>
                </div>
              </div>
              <div className="row no-margin">
                <div className="col s12">
                  <p>
                    <input type="checkbox" id="rememberMe" defaultChecked="checked" ref="remember" />
                    <label htmlFor="rememberMe">记住我</label>
                  </p>
                  <button type="button" className="btn waves-effect waves-light" onClick={this.handleSubmit.bind(this)}>登录</button>
                  <hr/>
                  <p>没有账号，请注册</p>
                  <button type="button" className="btn waves-effect waves-light red" onClick={this.signupModal.bind(this)}>注册</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Any thing returned from this function will end up as props on the Login component
function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(login(user)),
  }; // this.props.doSearch will become the result of headSearch
}

// module.exports = Login;
module.exports = connect(null, mapDispatchToProps)(LoginForm);