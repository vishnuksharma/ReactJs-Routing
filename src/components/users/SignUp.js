import React, { Component } from "react";

class SignUp extends Component {

    constructor(){
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }
    state = {users: []};
    componentDidMount(){
       
    }

    handleLogin(e){
        e.preventDefault();
        const formData = {};
        for(const field in this.refs){
            formData[field] = this.refs[field].value;
        }
        console.log('-->', formData);

    }
    render(){
        return (
            <div className="signup-component container-fluid bg-1">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-centered">                    
                        <h2 className="text-left"><em>Get Users List:</em></h2>
                        <ul>
                            {this.state.users.map(user=> 
                            <li key={user.id}>{user.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-centered">                    
                        <h2 className="text-left"><em>User Signup:</em></h2>
                    </div>
                </div>
                <hr/>

                <div className="signup-form">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-centered">
                        <form onSubmit={this.handleLogin} className="form-horizontal">
                        <div className="form-group text-left">
                                <label className="control-label col-sm-2">Name:</label>
                                <div className="col-sm-10">
                                <input ref="name" type="text" className="form-control" name="name" placeholder="Enter name" />
                                </div>
                            </div>
                            <div className="form-group text-left">
                                <label className="control-label col-sm-2">Email:</label>
                                <div className="col-sm-10">
                                <input ref="email" type="email" className="form-control" name="email" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="form-group text-left">
                                <label className="control-label col-sm-2">Password:</label>
                                <div className="col-sm-10"> 
                                <input ref="password" type="password" className="form-control" name="password" placeholder="Enter password" />
                                </div>
                            </div>
                            <div className="form-group text-left"> 
                                <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary btn-block">Signup</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default SignUp;