import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import "./UserManager.scss"
import {createUser, deleteUser, getAllUsers} from "../../services/userService";
import {emitter} from "../../utils/emitter";
import ModalUser from "./ModalUser";

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false
        }
    }


    async componentDidMount() {
       await this.getAllUsers()
    }

    getAllUsers = async () => {
        const res = await getAllUsers("ALL")
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    createUser = async (data) => {
        try {
            const res = await createUser(data)
            if(res && res.errCode) {
                alert(res.message)
            }
            else {
                await this.getAllUsers()
                this.setState({
                    isOpenModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        try {
            const res = await deleteUser(user.id)
            if(res && !res.errCode) {
               await this.getAllUsers()
            }
            else {
                alert(res.message)
            }
        }catch (e) {
            console.log(e)
        }
    }


    render() {
        const {arrUsers} = this.state
        return (
            <div className="users-container">
                <ModalUser isOpen={this.state.isOpenModal} toggleFromParent={this.toggleUserModal}
                           createUser={this.createUser}/>
                <div className="title text-center">Manage users with Quang Thuan</div>
                <div className="mx-4">
                    <button className="btn btn-primary px-3" onClick={() => this.handleAddNewUser()}><i
                        className="fas fa-plus"/>Add new user
                    </button>
                </div>
                <div className="user-table m-4 ">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit"><i className="fas fa-pencil-alt"/></button>
                                        <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"/></button>
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
