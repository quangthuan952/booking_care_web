import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {LANGUAGES} from "../../../utils";
import * as actions from "../../../store/actions/index"
import "./UserRedux.scss"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImageURL: '',
            isOpen: false,
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getRole()
        this.props.getPosition()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genders !== this.props.genders) {
            this.setState({
                genderArr: this.props.genders
            })
        }
        if (prevProps.roles !== this.props.roles) {
            this.setState({
                roleArr: this.props.roles
            })
        }
        if (prevProps.positions !== this.props.positions) {
            this.setState({
                positionArr: this.props.positions
            })
        }
    }

    handleOnChangeImage = (event) => {
        const file = event.target.files[0]
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageURL: objectUrl
            })
        }
    }
    openPreviewImage = () => {
        this.setState({
            isOpen: true
        })
    }

    render() {
        const {language, genders, positions, roles} = this.props
        return (
            <React.Fragment>
                <div className="user-redux-container">
                    <div className="title">
                        UserRedux
                    </div>
                    <div className="user-redux-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><FormattedMessage id="manage-user.add"/></div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.email"/></label>
                                    <input className="form-control" type="email"/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.password"/></label>
                                    <input className="form-control" type="password"/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.first-name"/></label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.last-name"/></label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.phone-number"/></label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="col-9">
                                    <label><FormattedMessage id="manage-user.address"/></label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.gender"/></label>
                                    <select className="form-control">
                                        {this.state.genderArr.length &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.position"/></label>
                                    <select className="form-control">
                                        {positions && positions.length &&
                                            positions.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.role"/></label>
                                    <select className="form-control">
                                        {this.state.roleArr.length &&
                                            this.state.roleArr.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.image"/></label>
                                    <div className="preview-img-container">
                                        <input id="previewImg" type="file" hidden onChange={(event) => {
                                            this.handleOnChangeImage(event)
                                        }}/>
                                        <label className="label-upload" htmlFor="previewImg">Tải ảnh <i
                                            className="fas fa-upload"/></label>
                                        <div className="preview-image"
                                             style={{backgroundImage: ` url(${this.state.previewImageURL})`}}
                                             onClick={() => this.openPreviewImage()}
                                        >

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.state.previewImageURL}
                        onCloseRequest={() => this.setState({isOpen: false})}
                    />}
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
        positions: state.admin.positions,
        roles: state.admin.roles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRole: () => dispatch(actions.fetchRoleStart()),
        getPosition: () => dispatch(actions.fetchPositionStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
