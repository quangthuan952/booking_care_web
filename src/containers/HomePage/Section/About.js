import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Section.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {FormattedMessage} from "react-intl";

class Handbook extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <div className="section-specialty">
                    <div className="section-content">
                        <div className="section-header">
                            <span className="title-section">Truyền thông nói gì về Bookingcare</span>
                        </div>
                        <div className="section-about">
                            <div className="video">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/FyDQljKtWnI"
                                        title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className="content-right">
                               <span>
                                    Một sáng sớm mùa đông, ba người trong gia đình từ một tỉnh miền Tây Bắc xa xôi đứng xếp
                                hàng lấy số khám bác sĩ chuyên khoa giỏi tại một bệnh viện tư có uy tín ở Hà Nội. Thật
                                không may, đến lượt họ thì số đăng ký khám bác sĩ hôm đó đã hết. Họ bật khóc vì người mẹ
                                già đã chịu đựng quá lâu rồi mà chưa được đăng ký khám.

                                BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện cung cấp nền tảng công nghệ
                                giúp bệnh nhân dễ dàng lựa chọn dịch vụ y tế từ mạng lưới bác sĩ chuyên khoa giỏi, phòng
                                khám/ bệnh viện uy tín với thông tin đã xác thực và đặt lịch nhanh chóng.
                               </span>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
