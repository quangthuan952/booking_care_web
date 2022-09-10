import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from "connected-react-router";

import {handleLogin} from "../../services/userService";
import "./Login.scss"
import * as actions from "../../store/actions";
import {userLoginSuccess} from "../../store/actions/userActions"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errorMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleLogin = async () => {
        this.setState({
            errorMessage: ''
        })
        try {
           const data = await handleLogin(this.state.username, this.state.password)
           if(data && data.errCode) {
               this.setState({
                   errorMessage: data.message
               })
           }
           else if (data && !data.errCode) {
               this.props.userLoginSuccess(data.user)
           }
        } catch (e) {
            if(e?.response?.data) {
                this.setState({
                    errorMessage: e.response.data.message
                })
            }
            console.log(e)
        }
    }

    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" value={this.state.username} className="form-control"
                                   placeholder="Enter your username"
                                   onChange={(event) => this.handleOnChangeUsername(event)}/>
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custom-form-password">
                                <input type={this.state.isShowPassword ? "text" : "password"}
                                       value={this.state.password} className="form-control"
                                       placeholder="Enter your password"
                                       onChange={(event) => this.handleOnChangePassword(event)}/>
                                <span onClick={() => this.handleShowHidePassword()}>
                                   <i className={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}/>
                               </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <span style={{color: 'red', fontSize: 12}}>{this.state.errorMessage}</span>
                        </div>
                        <div className="col-12">
                            <button className="btn-login" onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="text-forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-option-login">Or Login with</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"/>
                            <i className="fab fa-facebook-f facebook"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
