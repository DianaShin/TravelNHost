import { connect } from 'react-redux';
import Home from './home';
import {withRouter} from 'react-router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToprops = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Home));
