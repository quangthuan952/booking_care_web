import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderHome from "./Header"

class HomePage extends Component {

    render() {


        return (
            <div>
                <HeaderHome/>
                <div>Hello HomePage</div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
