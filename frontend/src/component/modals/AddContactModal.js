import { useState, useReducer } from 'react';
import nbp_logo from 'image/nbp_foree_remittance_logo.svg'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import FormText from 'react-bootstrap/FormText'
import InputGroup from 'react-bootstrap/InputGroup'
import ProgressBar from 'react-bootstrap/ProgressBar';

import css from './AddContactModal.module.css'

const CreateContact = () => {
  return (
    <>
      <h3
        style={{
          textAlign: 'center'
        }}
      >Create a Contact</h3>
      <Form>
        <Row sm={3} xs={1} className="mb-3">
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text"/>
            <FormText muted>Required</FormText>
          </Form.Group>
          <Form.Group as={Col} controlId="middleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group as={Col} controlId="middleName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text"/>
            <FormText muted>Required</FormText>
          </Form.Group>
        </Row>
        <Row sm={2} xs={1} className="mb-3">
          <Form.Group as={Col} controlId="address1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control type="text"/>
            <FormText muted>Required</FormText>
          </Form.Group>
          <Form.Group as={Col} controlId="address2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
        </Row>
        <Row sm={2} xs={1} className="mb-3">
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text"/>
            <FormText muted>Required</FormText>
          </Form.Group>
          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" disabled value={'Pakistan'}/>
          </Form.Group>
        </Row>
        <Row sm={2} xs={1} className="mb-3">
          <Form.Group as={Col} controlId="province">
            <Form.Label>Province</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option value="">Please select...</option>
              <option value="pv1">province 1</option>
            </Form.Select>
            <FormText muted>Required</FormText>
          </Form.Group>
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
        </Row>
        <Row sm={1} xs={1} className="mb-3">
          <Form.Group as={Col} controlId="relationship">
            <Form.Label>Relationship to Contact</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option value="">Choose from personal relationship types...</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
            </Form.Select>
            <FormText muted>Required</FormText>
          </Form.Group>
        </Row>
        <Row sm={1} xs={1} className="mb-3">
          <Form.Group as={Col} controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
        </Row>
      </Form>
    </>
  )
}

const AddPKBankAccount = () => {
  return (
    <>
      <h4>Contact Bank Account in Pakistan</h4>
    </>
  )
}

export const AddContactModal = () => {
  return (
    <>
      <Modal
        show={true}
        centered
        backdrop='static'
        fullscreen='sm-down'
        size='lg'
      >
        <Modal.Header centered closeButton>
          {/* <img style={{justifyItems: 'center'}} src={nbp_logo}/> */}
          <Modal.Title>New Account</Modal.Title>
        </Modal.Header>
        <ProgressBar className={`${css.progressBarRefactor}`} min={0} max={2} now={1} />
        <Modal.Body style={{minHeight: '65vh', overflowY: 'scroll'}}>
          <CreateContact></CreateContact>
        </Modal.Body>
      </Modal>
    </>
  )
}