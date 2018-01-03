import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      formType: "login"
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(formType){
    // return () => {
    return this.setState({showModal:true});
    // };
  }

  handleCloseModal(formType){
    // return () => {
      return this.setState({showModal:false});
    // };
  }

  render(){
    return (
      <div>
        <nav>
          <div class="header-left">
            <img class="logo" src="http://res.cloudinary.com/ayoung0131/image/upload/v1514944664/backpackicon_htgwjb.svg" />
            <h1 class="brand-name">TRAVEL N HOST</h1>
          </div>
          <ul class="header-nav-buttons-list">
             <li class='header-nav-demo-button'>
               <button class='header-nav-demo-button'> DEMO</button>
             </li>
             <li class='header-nav-buttons-list-item'>
               <button class='header-nav-buttons-list-item' onClick={()=>this.handleOpenModal()}>SIGN UP</button>
                 <Modal
                   isOpen={this.state.showModal}
                   onRequestClose={this.handleCloseModal}
                   contentLabel='sessionModal'
                   >
                   <SessionFormContainer
                     formType={this.state.formType}
                     closeModal={this.handleCloseModal}
                     openModal={this.handleOpenModal}/>
                 </Modal>
             </li>
             <li class='header-nav-buttons-list-item'>
               <button class='header-nav-buttons-list-item'>LOG IN </button>
            </li>
          </ul>
        </nav>
        <div class="whitespace"> </div>
      </div>
    );
  }
}

export default Header;
