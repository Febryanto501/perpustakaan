import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.delete = this.delete.bind(this)
    }

    delete(){
        const url = `http://localhost:3001/buku/` + this.props.kd_buku;
        axios.delete(url)
           .then((result) => {
            //    const data = result.data.data
            console.log(result)
               this.props.toggle()
               window.location.reload();
               //location.reload()
        })
        
    }
    render() {
        // console.log(this.props.id)
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Delete</ModalHeader>
                    <ModalBody>
                        are you sure to delete it?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.delete}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Modals;