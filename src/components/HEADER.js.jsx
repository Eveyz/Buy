var React = require('react');
import { Link } from 'react-router-dom';

class HEADER extends React.Component {
  constructor(props){
    super(props);
  }

  onSearch() {
    this.props.onSearch();
  }

  loginModal() {
    this.props.loginModal();
  }

  signupModal() {
    this.props.signupModal();
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const isAuthenticated = this.props.isAuthenticated;

    const userLinks = (
      <div className="col m3 right-align">
        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>设置<i className="material-icons right">arrow_drop_down</i></a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#" onClick={this.logout.bind(this)}>退出</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
        </ul>
      </div>
    );
    const guestLinks = (
      <div className="col m3">
        <div className="row no-margin valign-wrapper">
          <div className="col m4 center-align no-margin chinese-slim text-md-center" onClick={this.loginModal.bind(this)}><span className="navbar-button">登录</span></div>
          <div className="col m8 center-align">
            <button className="waves-effect waves-light btn" onClick={this.signupModal.bind(this)}>创建我的活动</button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="header-padding header-shadow border-top-0">
        <div>
          <div className="row no-margin">
            <div className="col m12 valign-wrapper">
              <div className="col m4">
                <p className="emerald no-margin"><Link to="/books" className="link-styless"><b>探索</b></Link></p>
              </div>
              <div className="col m4">
                <h3 className="center-align no-margin fresh-red"><Link to="/" className="link-styless"><b>原创者</b></Link></h3>
              </div>
              <div className="col m1" onClick={this.onSearch.bind(this)}><p className="no-margin chinese-slim">搜索</p></div>
              { isAuthenticated ? userLinks : guestLinks }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = HEADER;