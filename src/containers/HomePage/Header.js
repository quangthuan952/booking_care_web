import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import "./HomeHeader.scss"

class Header extends Component {

    render() {


        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars icon-bar"/>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div className="child-content-header">Chuyên khoa</div>
                                <div className="child-content-description">Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className="child-content">
                                <div className="child-content-header">Cơ sở y tế</div>
                                <div className="child-content-description">Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className="child-content">
                                <div className="child-content-header">Bác sĩ</div>
                                <div className="child-content-description">Chọn bác sĩ giỏi</div>
                            </div>
                            <div className="child-content">
                                <div className="child-content-header">Gói khám</div>
                                <div className="child-content-description">Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"/>
                                Hỗ trợ
                            </div>
                            <div className="flag">VN</div>
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
                               <i className="fas fa-hospital"/>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
