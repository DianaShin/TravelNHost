import React from 'react';
import { connect } from 'react-redux';
import Header from './header';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sessionFormType: state.sessionFormType
});


export default connect(mapStateToProps, null)(Header);
