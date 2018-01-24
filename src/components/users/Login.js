import React, { Component } from "react";

class Login extends Component {
    render(){
        return(
            <div className="login-component container-fluid bg-1">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-centered">                    
                    <h2 className="text-left"><em>User Login:</em></h2>
                </div>
            </div>
            <hr/>
            <div className="login-form">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-centered">
                    <form className="form-horizontal" action="">
                        <div className="form-group text-left">
                            <label className="control-label col-sm-2">Email:</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="form-group text-left">
                            <label className="control-label col-sm-2">Password:</label>
                            <div className="col-sm-10"> 
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
                            </div>
                        </div>
                        <div className="form-group text-left"> 
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
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
export default Login;