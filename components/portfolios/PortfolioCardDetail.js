import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PortfolioCardDetail = (props) => {
    const { isOpen, toggle, portfolio } = props

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
                <ModalBody>
                    <div className='text-capitalize'>
                    <p><b>description:</b> {portfolio.description}</p>
                    <p><b>company:</b> {portfolio.company}</p>
                    <p><b>position:</b> {portfolio.position}</p>
                    <p><b>location:</b> {portfolio.location}</p>
                    <p><b>start Date:</b> {portfolio.startDate}</p>
                    <p><b>end Date:</b> {portfolio.endDate}</p>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default PortfolioCardDetail;