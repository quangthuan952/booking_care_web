import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import "./HomeHeader.scss"

class Header extends Component {

    render() {


        return (
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
