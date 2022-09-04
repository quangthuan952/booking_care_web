import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Section.scss"
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

class OutstandingDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrSection: [
                {
                    img: section_1,
                    title: 'Sản phụ khoa'
                },
                {
                    img: section_2,
                    title: 'Siêu âm thai'
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
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <React.Fragment>
                <div className="section-specialty">
                    <div className="section-content">
                        <div className="section-header">
                            <span className="title-section"><FormattedMessage id="section.outstandingDoctor"/></span>
                            <div className="btn-section"><FormattedMessage id="section.seeMore"/></div>
                        </div>
                        <Slider {...settings}>
                            {this.state.arrSection.map((item, index) => {
                                return (
                                    <div className="section-item-carousel" key={index}>
                                       <div className="section-item-doctor" style={{border: '1px solid #eee'}}>
                                           <img alt="" className="avt-doctor" src={item.img} style={{height: '120px', width: '120px'}}/>
                                         <div className="py-2">
                                             <div className="doctor-name">Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                                             <div className="doctor-position">Da liễu</div>
                                         </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
