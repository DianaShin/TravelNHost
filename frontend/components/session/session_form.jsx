import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn){
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.setState({
    //   username: '',
    //   password: ''
    // });
    this.props.processForm(user).then(
     () => this.props.closeModal()
   )
   .then(() => this.props.history.push("/"));
 }


  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    let title;
    let linkTo;
    switch (this.props.formType) {
      case('login'):
        title = 'Login';
        linkTo = <Link to='/login'> Login</Link>;
        break;
      case ('signup'):
        title = 'Sign Up';
        linkTo = <Link to='/signup'> Sign up</Link>;
    }
    let errors = '';
    if (this.props.errors.length !== 0){
      errors = <h3> {this.props.errors[0]}</h3>;
    }

   return (
     <form onSubmit = {this.handleSubmit}>
         <img className="x-box"
						src='http://res.cloudinary.com/ayoung0131/image/upload/v1515036419/x-icon_zdcj8l.svg'
						width="20"
						height="20"
						onClick={this.props.closeModal}/>
         <h1>
           Welcome to TravelNHost!
         </h1>
         <h2>{title}</h2>

       {errors}
       {linkTo}
          <br />
       <input onChange = {this.handleChange('username')}
          placeholder='username' value={this.state.username}/>
          <br />
       <input type="password" onChange = {this.handleChange('password')}
         placeholder='password' value={this.state.password}/>
         <br />
      <input type='submit' value={this.props.formType} />
     </form>
   );
  }
}

export default withRouter(SessionForm);
