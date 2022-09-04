import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderHome from "./Header"
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/MedicalFacility";
import OutstandingDoctor from "./Section/OutstandingDoctor";
import Handbook from "./Section/Handbook";
import About from "./Section/About";

class HomePage extends Component {

    render() {


        return (
            <div>
                <HeaderHome/>
                <Specialty/>
                <MedicalFacility />
                <OutstandingDoctor />
                <Handbook />
                <About />
                <div style={{height: '300px'}}></div>
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
