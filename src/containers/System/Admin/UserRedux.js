import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {LANGUAGES} from "../../../utils";
import * as actions from "../../../store/actions/index"
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.genders !== this.props.genders) {
             this.setState({
                 genderArr: this.props.genders
             })
        }
    }


    render() {
        const {language, genders} = this.props
        return (
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
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className="form-control">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.image"/></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);