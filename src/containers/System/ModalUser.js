import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {emitter} from "../../utils/emitter";

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmitter()
    }
    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
          this.setState({
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              address: ''
          })
        })

    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
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

    handleCreateUser = () => {
        if(this.checkValidateInput()) {
            this.props.createUser(this.state)
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} size="lg" centered={true}
                   className="modal-create-user">
                <ModalHeader toggle={() => this.toggle()}>Create new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email" value={this.state.email}
                                   onChange={(event) => this.handleChangeInput(event, "email")}/>
                        </div>
                        <div className="input-container">
                            <label>First name</label>
                            <input type="text" value={this.state.password}
                                   onChange={(event) => this.handleChangeInput(event, "password")}/>
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input type="text" value={this.state.firstName}
                                   onChange={(event) => this.handleChangeInput(event, "firstName")}/>
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="text" value={this.state.lastName}
                                   onChange={(event) => this.handleChangeInput(event, "lastName")}/>
                        </div>
                        <div className="input-container max-width-input">
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
                    <Button color="primary" onClick={() => this.handleCreateUser()} className="px-3">
                        Create
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


