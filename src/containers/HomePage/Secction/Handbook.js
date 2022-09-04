import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Specialty.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import section_1 from "../../../assets/images/section_1.jpg"
import section_2 from "../../../assets/images/section_2.jpg"
import section_3 from "../../../assets/images/section_3.jpg"
import section_4 from "../../../assets/images/section_4.jpg"
import section_5 from "../../../assets/images/section_5.jpg"
import section_6 from "../../../assets/images/section_6.jpg"
import {FormattedMessage} from "react-intl";
class Handbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrSection: [
                {
                    img: section_1,
                    title: 'Chương trình ưu đãi tháng 9 tại Phòng khám Mediplus'
                },
                {
                    img: section_2,
                    title: '5 Địa chỉ xét nghiệm máu tổng quát tốt và uy tín tại Hà Nội'
                },
                {
                    img: section_3,
                    title: 'Nhi khoa'
                },
                {
                    img: section_4,
                    title: 'Da liễu'
                },
                {
                    img: section_5,
                    title: 'Bệnh viên gan'
                },
                {
                    img: section_6,
                    title: 'Sức khỏe tâm thần'
                }
            ]
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <React.Fragment>
                <div className="section-specialty">
                    <div className="section-content">
                        <div className="section-header">
                            <span className="title-section"><FormattedMessage id="section.handbook"/></span>
                            <div className="btn-section"><FormattedMessage id="section.search"/></div>
                        </div>
                        <Slider {...settings}>
                            {this.state.arrSection.map((item, index) => {
                                return (
                                    <div className="section-item" key={index}>
                                        <div className="section-item-handbook">
                                            <img className="thumbnail-handbook" alt="" src={item.img} style={{height: '150px'}}/>
                                            <div className="py-2 title-handbook">{item.title}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
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
