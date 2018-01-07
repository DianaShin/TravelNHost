import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { login, logout} from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sessionFormType: state.sessionFormType
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
