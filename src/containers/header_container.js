var React = require('react');

import { connect } from 'react-redux';
import HEADER from "../components/HEADER.js.jsx";
import SearchForm from "../components/header/search_form.js";
import { headSearch } from "../actions/header.js";
import { cancelSearch } from "../actions/header.js";
import { logout } from "../actions/users_actions.js";
import { close_modal, login_modal, signup_modal } from "../actions/modal_actions.js";
import { SIGN_UP_MODAL, LOG_IN_MODAL, CLOSE_MODAL } from '../actions/types'
import SignupForm from "./signup_form.js";
import LoginForm from './login_form';
// import { bindActionCreators } from "redux";

class HeaderContainer extends React.Component {
  renderHeader() {
    return (this.props.search ? <SearchForm cancelSearch={this.cancelSearch.bind(this)}/> : <HEADER onSearch={this.performSearch.bind(this)} loginModal={this.login_modal.bind(this)} signupModal={this.signup_modal.bind(this)} logout={this.logout.bind(this)} isAuthenticated={this.props.isAuthenticated} />);
  }

  showModal() {
    var modal = "";
    if(this.props.modal === SIGN_UP_MODAL) {
      modal = <SignupForm closeModal={this.closeModal.bind(this)} loginModal={this.login_modal.bind(this)} />;
    } else if(this.props.modal === LOG_IN_MODAL) {
      modal = <LoginForm closeModal={this.closeModal.bind(this)} signupModal={this.signup_modal.bind(this)} />;
    }
    return modal;
  }

  performSearch() {
    this.props.doSearch();
  }

  cancelSearch() {
    this.props.cancelSearch();
  }

  login_modal() {
    this.props.loginModal();
  }

  signup_modal() {
    this.props.signupModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.showModal()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    modal: state.modal,
    isAuthenticated: state.auth.isAuthenticated
  };
}

// Any thing returned from this function will end up as props on the HeaderContainer
function mapDispatchToProps(dispatch) {
  // Whenever search is called, the result should be passed to all reducers
  return {
    doSearch: () => dispatch(headSearch()),
    cancelSearch: () => dispatch(cancelSearch()),
    loginModal: () => dispatch(login_modal()),
    signupModal: () => dispatch(signup_modal()),
    closeModal: () => dispatch(close_modal()),
    logout: () => dispatch(logout())
  }; // this.props.doSearch will become the result of headSearch
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

