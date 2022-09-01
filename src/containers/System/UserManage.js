import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import "./UserManager.scss"
import {getAllUsers} from "../../services/userService";

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }


    async componentDidMount() {
        const res = await getAllUsers("ALL")
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users
            })
        }
    }


    render() {
        const {arrUsers} = this.state
        return (
            <div className="users-container">
                <div className="title text-center">Manage users with Quang Thuan</div>
                <div className="user-table m-4 ">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {arrUsers && arrUsers.map(item => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit"><i className="fas fa-pencil-alt"/></button>
                                        <button className="btn-delete"><i className="fas fa-trash"/></button>
                                    </td>
                                </tr>
                            )
                        })}

                    </table>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
