import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn){
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
    () => this.props.closeModal()
   )
   .then(() => this.props.history.push("/"));
 }


  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  demoUserLogin(e) {
    e.preventDefault();

    const demoUser = {
      username: 'mustafa',
      password: 'Istanbul'
    };
    this.setState(demoUser, () => {
      this.props.processForm(demoUser);
    });
  }

  render() {
    let title;
    let linkTo;
    let switchModalMessage;
    let switchModalButton;
    let guestLogin = "DEMO";
    switch (this.props.formType) {
      case('login'):
        title = 'LOGIN';
        switchModalMessage = "Don't have an account?";
        switchModalButton = "Join";
        break;
      case ('signup'):
        title = 'SIGNUP';
        switchModalMessage = "Already have an account?";
        switchModalButton = "Login";
    }
    let errors = '';
    if (this.props.errors.length !== 0){
      errors = <h3> {this.props.errors[0]}</h3>;
    }

   return (
     <form onSubmit = {this.handleSubmit}>
       <div className="modal-header">
         <div className="space-holder-for-modal-header"></div>
         <h1 className="modal-title">
           Welcome to TravelNHost!
         </h1>
         <img className="x-box"
           src='http://res.cloudinary.com/ayoung0131/image/upload/v1515036419/x-icon_zdcj8l.svg'
           width="20"
           height="20"
           onClick={this.props.closeModal}/>
       </div>
         <h2 className="modal-subtitle">PLEASE {title}</h2>
         <div className="modal-line-break"></div>

       {errors}

          <br />
       <input onChange = {this.handleChange('username')} className="input"
          placeholder='username' value={this.state.username}/>
          <br />
       <input type="password" onChange = {this.handleChange('password')} className="input"
        placeholder='password' value={this.state.password}/>
        <br />
      <input type='submit' value={this.props.formType} className="submit-button"/>
      <br />
      <input type='submit' value={guestLogin} onClick={this.demoUserLogin} className="guest-button"/>
      <p className="switchModalMessage">{switchModalMessage}</p>
      <input type='submit' value={switchModalButton} className="switchModalButton" />
     </form>
   );
  }
}

export default withRouter(SessionForm);
