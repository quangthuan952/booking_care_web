import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
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
                            <input type="email"/>
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="password"/>
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email"/>
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="password"/>
                        </div>
                        <div className="input-container max-width-input">
                            <label>Email</label>
                            <input type="password"/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => this.toggle()} className="px-3">
                        Cancel
                    </Button>{' '}
                    <Button color="primary" onClick={() => this.toggle()} className="px-3">
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


