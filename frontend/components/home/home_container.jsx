import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToprops = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToprops)(Home);
