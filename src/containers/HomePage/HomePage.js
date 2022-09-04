import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderHome from "./Header"
import Specialty from "./Secction/Specialty";
import MedicalFacility from "./Secction/MedicalFacility";
import OutstandingDoctor from "./Secction/OutstandingDoctor";
import Handbook from "./Secction/Handbook";

class HomePage extends Component {

    render() {


        return (
            <div>
                <HeaderHome/>
                <Specialty/>
                <MedicalFacility />
                <OutstandingDoctor />
                <Handbook />
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
