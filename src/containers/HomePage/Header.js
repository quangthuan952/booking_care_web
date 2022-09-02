import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import "./HomeHeader.scss"
import { FormattedMessage } from 'react-intl';

class Header extends Component {

    render() {


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
                            <div className="language-vi"><FormattedMessage id="homeHeader.vn"/></div>
                            <div className="language-en"><FormattedMessage id="homeHeader.en"/></div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title-1">nền tảng y tế</div>
                        <div className="title-2">chăm sóc sức khỏe toàn diện</div>
                        <div className="search">
                            <i className="fas fa-search"/>
                            <input type="text" placeholder="Tìm gói khám"/>
                        </div>
                    </div>
                    <div className="content-down">
                        <ul className="option-list">
                            <li className="option-item">
                                <i className="fas fa-hospital"/>
                                <div className="option-item-title">Khám Chuyên khoa</div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-mobile-alt"/>
                                <div className="option-item-title">Khám từ xa</div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-procedures"/>
                                <div className="option-item-title">Xét nghiệm y học</div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-stethoscope"/>
                                <div className="option-item-title">Khám tổng quát</div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-user-md"/>
                                <div className="option-item-title">Sức khỏe tinh thần</div>
                            </li>
                            <li className="option-item">
                                <i className="fas fa-briefcase-medical"/>
                                <div className="option-item-title">Sản phẩm y tế</div>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
