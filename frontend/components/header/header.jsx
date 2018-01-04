import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal(formType){
      return this.props.history.push('/');
  }

  // <button class='header-nav-buttons-list-item' onClick={()=>this.handleOpenModal('login')}>LOG IN </button>
  render() {
    return (
      <div>
        <nav>
          <div class="header-left">
            <img className="logo" src="http://res.cloudinary.com/ayoung0131/image/upload/v1514944664/backpackicon_htgwjb.svg" />
            <h1 class="brand-name">TRAVEL N HOST</h1>
          </div>
          <ul class="header-nav-buttons-list">
            <li class='header-nav-demo-button'>
              <button class='header-nav-demo-button'>DEMO</button>
            </li>
            <li class='header-nav-buttons-list-item'>
              <Link to='/signup' class='header-nav-buttons-list-link'>SIGN UP</Link>
            </li>
            <li class='header-nav-buttons-list-item'>
              <Link to='/login' class='header-nav-buttons-list-link'>LOG IN </Link>
              <Switch>
                <Route path='/signup'>
                  <Modal
                    isOpen={true}
                    onRequestClose={this.handleCloseModal}
                    contentLabel='sessionModal'
                    className="modal"
                    overlayClassName="modalOverlay"
                    shouldCloseOnOverlayClick={false}
                  >
                    <SessionFormContainer
                      formType={"signup"}
                      closeModal={this.handleCloseModal}
                      openModal={this.handleOpenModal}/>
                  </Modal>
                </Route>

                 <Route path='/login'>
                   <Modal
                     isOpen={true}
                     onRequestClose={this.handleCloseModal}
                     contentLabel='sessionModal'
                     className="modal"
                     overlayClassName="modalOverlay"
                     shouldCloseOnOverlayClick={false}
                     >
                     <SessionFormContainer
                       formType={"login"}
                       closeModal={this.handleCloseModal}
                       openModal={this.handleOpenModal}/>
                   </Modal>
                 </Route>

                 <Route path='/'>
                   <Modal
                     isOpen={false}
                     onRequestClose={this.handleCloseModal}
                     contentLabel='sessionModal'
                     className="modal"
                     overlayClassName="modalOverlay"
                     shouldCloseOnOverlayClick={false}
                     />

                 </Route>


               </Switch>


            </li>
          </ul>
        </nav>
        <div class="whitespace"> </div>
      </div>
    );
  }
}

export default Header;
