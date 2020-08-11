import React,{Component} from 'react';
import md5 from 'md5-hash';
import '../css/login.css';
import axios from 'axios';

class Login extends Component
{
constructor(props)
{
	super(props)
    this.state={
        username:null,
		password:null,
		isLoggedIn:false,
		error:false,
    }
}

handleChange=(e)=>{
	this.setState({
	  [e.target.name]:e.target.value
	})
  }


handleSubmit=(e)=>{
	e.preventDefault();
	axios.post("http://127.0.0.1:8000/owner/login_user/", {'username':this.state.username,'password':this.state.password})
    .then(response => {
		console.log(response)
		// console.log(response.status);
		if(response.data.status === 200)
		{
			this.setState({isLoggedIn:true,error:false})	
			sessionStorage.setItem('username',this.state.username);
			console.log(response.data.Data.token)
			sessionStorage.setItem('token',response.data.Data.token);
			this.props.history.push('/home');
		}
		else
		{
			this.setState({error:true})
		}})
    // .catch(error => {
    //     alert('unknown error occured,please contact operator');
	// });
	
  }

render()
{
	var Error=this.state.error?(<div className='alert alert-danger'>
	<strong>ERROR!</strong> Given Username and Password are invalid
	</div>):((""))
    return(
        <div className="container">
			{Error}

	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
			</div>
			<div className="card-body">
				<form onSubmit={this.handleSubmit} id="login_form">
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input onChange={ this.handleChange } type="text" className="form-control" id="username" name="username" placeholder="username" required></input>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input onChange={ this.handleChange } type="password" className="form-control" id="password" name="password" placeholder="password" required></input>
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn-lg float-right login_btn"/>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    )
}
}
export default Login;