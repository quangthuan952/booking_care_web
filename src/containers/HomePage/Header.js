import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import "./HomeHeader.scss"
import { FormattedMessage } from 'react-intl';
import {LANGUAGES} from "../../utils";
import {changeLanguage} from "../../store/actions";
class Header extends Component {


    changeLanguage = (language) => {
       this.props.changeLanguageAppRedux(language)
    }
    render() {
        const language = this.props.language
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars icon-bar"/>
                            <div className="header-logo"/>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div className="child-content-header"><FormattedMessage id="homeHeader.specialty"/></div>
                                <div className="child-content-description"><FormattedMessage id="homeHeader.findDoctor"/></div>
                            </div>
                            <div className="child-content">
                                <div className="child-content-header"><FormattedMessage id="homeHeader.healthFacilities"/></div>
                                <div className="child-content-description"><FormattedMessage id="homeHeader.chooseHospitalClinic"/></div>
                            </div>
                            <div className="child-content">
                                <div className="child-content-header"><FormattedMessage id="homeHeader.doctor"/></div>
                                <div className="child-content-description"><FormattedMessage id="homeHeader.chooseDoctor"/></div>
                            </div>
                            <div className="child-content">
                                <div className="child-content-header"><FormattedMessage id="homeHeader.examinationPackage"/></div>
                                <div className="child-content-description"><FormattedMessage id="homeHeader.generalHealthCheck"/></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"/>
                                <span><FormattedMessage id="homeHeader.support"/></span>
                            </div>
                            <div className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}><FormattedMessage id="homeHeader.vn"/></span></div>
                            <div className={language === LANGUAGES.EN ? "language-en active" : "language-en"}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}><FormattedMessage id="homeHeader.en"/></span></div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title-1"><FormattedMessage id="banner.medicalBackground"/></div>
                        <div className="title-2"><FormattedMessage id="banner.comprehensiveHealthCare"/></div>
                        <div className="search">
                            <i className="fas fa-search"/>
                            <input type="text" placeholder="Tìm gói khám"/>
                        </div>
                    </div>
                    <div className="content-down">
                        <ul className="option-list">
                            <li className="option-item">
                                <i className="fas fa-hospital"/>
                                <div className="option-item-title"><FormattedMessage id="banner.specialistExamination"/></div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-mobile-alt"/>
                                <div className="option-item-title"><FormattedMessage id="banner.remoteExamination"/></div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-procedures"/>
                                <div className="option-item-title"><FormattedMessage id="banner.medicalTest"/></div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-stethoscope"/>
                                <div className="option-item-title"><FormattedMessage id="banner.generalExamination"/></div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-user-md"/>
                                <div className="option-item-title"><FormattedMessage id="banner.mentalHealth"/></div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-briefcase-medical"/>
                                <div className="option-item-title"><FormattedMessage id="banner.medicalProducts"/></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language)  => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
