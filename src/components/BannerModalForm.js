import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class ModalForm extends Component {

    constructor () {
        super ()
        this.state= {
            show:false
        }
    }

    handleModal() {
        this.setState({show:!this.state.show})
    }

    render() {
        return (
            <>
                <Button className="btn_help" onClick={()=>{this.handleModal()}}> Get a quote <i className="fas fa-chevron-right"></i>
                            </Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{this.handleModal()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}