import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {emitter} from "../../utils/emitter";

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        const currentUser = this.props.currentUser
        this.setState({
            id: currentUser.id,
            email: currentUser.email,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            address: currentUser.address
        })
    }

    toggle = () => {
        this.props.toggleEditUserModal()
    }

    checkValidateInput = () => {
        const arrInput = Object.keys(this.state);
        let isValid = true
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                isValid = false
                alert("Missing paramerter!")
                break
            }
        }
        return isValid
    }

    handleChangeInput = (event, id) => {
        const stateCopy = {...this.state}
        stateCopy[id] = event.target.value
        this.setState({
            ...stateCopy
        })
    }

    handleEditUser = () => {
        if(this.checkValidateInput()) {
            this.props.editUser(this.state)
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} size="lg" centered={true}
                   className="modal-create-user">
                <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email" value={this.state.email}
                                   disabled={true}
                                   onChange={(event) => this.handleChangeInput(event, "email")}/>
                        </div>
                        <div className="input-container">
                            <label>First name</label>
                            <input type="text" value={this.state.firstName}
                                   onChange={(event) => this.handleChangeInput(event, "firstName")}/>
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input type="text" value={this.state.lastName}
                                   onChange={(event) => this.handleChangeInput(event, "lastName")}/>
                        </div>
                        <div className="input-container">
                            <label>Address</label>
                            <input type="text" value={this.state.address}
                                   onChange={(event) => this.handleChangeInput(event, "address")}/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggle()} className="px-3">
                        Cancel
                    </Button>{' '}
                    <Button color="primary" onClick={() => this.handleEditUser()} className="px-3">
                        Edit
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


