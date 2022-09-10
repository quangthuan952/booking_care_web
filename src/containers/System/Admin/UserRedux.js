import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {LANGUAGES} from "../../../utils";
import * as actions from "../../../store/actions/index"
import "./UserRedux.scss"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {createUserService} from "../../../services/userService";

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImageURL: '',
            isOpen: false,
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            gender: "",
            role: "",
            position: "",
            avatar: ""


        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getRole()
        this.props.getPosition()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genders !== this.props.genders) {
            const arrGenders = this.props.genders
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length ? arrGenders[0].key : ''
            })
        }
        if (prevProps.roles !== this.props.roles) {
            const arrRoles = this.props.roles
            this.setState({
                roleArr: this.props.roles,
                role: arrRoles && arrRoles.length ? arrRoles[0].key : ''
            })
        }
        if (prevProps.positions !== this.props.positions) {
            const arrPositions = this.props.positions
            this.setState({
                positionArr: this.props.positions,
                position: arrPositions && arrPositions.length ? arrPositions[0].key : ''
            })
        }
    }

    handleOnChangeImage = (event) => {
        const file = event.target.files[0]
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageURL: objectUrl,
                avatar: file
            })
        }
    }
    openPreviewImage = () => {
        this.setState({
            isOpen: true
        })
    }
    handleSaveUser = () => {
        if (this.handleValidateInput) {
            const {
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                address,
                gender,
                role,
                position,
                avatar
            } = this.state
            const data = {email, password, firstName, lastName, phoneNumber, address, gender, role, position, avatar}
            this.props.createUser(data)

        }
    }

    handleValidateInput = () => {
        let isValid = true
        const arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address', 'gender', 'role', 'positon', 'avatar']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false
                alert('This input is required' + arrCheck[i])
                break
            }
        }
        return isValid
    }

    onChangeInput = (event, id) => {
        let copyState = {...this.state}
        copyState[id] = event.target.value
        this.setState({...copyState})
    }

    render() {
        const {language, genders, positions, roles} = this.props
        const {email, password, firstName, lastName, phoneNumber, address, gender, role, position, avatar} = this.state
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
                                    <input className="form-control" type="email" value={email}
                                           onChange={(event) => this.onChangeInput(event, "email")}/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.password"/></label>
                                    <input className="form-control" type="password" value={password}
                                           onChange={(event) => this.onChangeInput(event, "password")}/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.first-name"/></label>
                                    <input className="form-control" type="text" value={firstName}
                                           onChange={(event) => this.onChangeInput(event, "firstName")}/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.last-name"/></label>
                                    <input className="form-control" type="text" value={lastName}
                                           onChange={(event) => this.onChangeInput(event, "lastName")}/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.phone-number"/></label>
                                    <input className="form-control" type="text" value={phoneNumber}
                                           onChange={(event) => this.onChangeInput(event, "phoneNumber")}/>
                                </div>
                                <div className="col-9">
                                    <label><FormattedMessage id="manage-user.address"/></label>
                                    <input className="form-control" type="text" value={address}
                                           onChange={(event) => this.onChangeInput(event, "address")}/>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.gender"/></label>
                                    <select className="form-control"
                                            onChange={(event) => this.onChangeInput(event, "gender")}>
                                        {genders && genders.length &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option
                                                        value={item.key}
                                                        key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.position"/></label>
                                    <select className="form-control"
                                            onChange={(event) => this.onChangeInput(event, "position")}>
                                        {positions && positions.length &&
                                            positions.map((item, index) => {
                                                return (
                                                    <option
                                                        value={item.key}
                                                        key={index}>{LANGUAGES.VI === language ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label><FormattedMessage id="manage-user.role"/></label>
                                    <select className="form-control"
                                            onChange={(event) => this.onChangeInput(event, "role")}>
                                        {this.state.roleArr.length &&
                                            this.state.roleArr.map((item, index) => {
                                                return (
                                                    <option
                                                        value={item.key}
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
                                    <button className="btn btn-primary" onClick={() => this.handleSaveUser()}>Save
                                    </button>
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
        getPosition: () => dispatch(actions.fetchPositionStart()),
        createUser: (data) => dispatch(actions.createUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
