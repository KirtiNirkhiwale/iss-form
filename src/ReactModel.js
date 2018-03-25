import React, {Component} from "react";
import {Button, Modal, ModalBody} from "reactstrap";

class ReactModel extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.cancelModal();
    };

    notToggle() {
        // Later it will be used
    }

    confirm(props) {
        this.props.selectFieldType(props);
    }


    render() {
        return (
            <div>
                <Modal isOpen={ this.props.isOpen } toggle={ this.toggle } className='modal-info iss-model text-center '>
                        <ModalBody className="modal-wrapper">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 text-center">
                                    <h5 className="mt-2 mb-3"> { this.props.title } </h5>
                                </div>
                            </div>
                            <div className="row bottom-btns">
                                <div className="col-md-12 py-2 my-2  field-select col-lg-12" onClick={ () => this.confirm('textField') }>  Single Line Element </div>
                                <div className="col-md-12 py-2 my-2 field-select col-lg-12" onClick={ () => this.confirm('selectField') }> Dropdown Element </div>
                                <div className="col-md-12 col-lg-12 px-0">
                                    <Button onClick={ this.toggle } className="btn btn-primary iss-button btn-sm" > { this.props.cancel } </Button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
            </div>
        );
    }
}
export default ReactModel;