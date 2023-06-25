import { useState, useReducer } from 'react';
import nbp_logo from 'image/nbp-head-icon.svg'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import FormText from 'react-bootstrap/FormText'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

import css from './AddContactModal.module.css'

const CreateContact = () => {
  return (
    <>
      <h3
        style={{
          textAlign: 'center',
          marginBottom: '2rem'
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
      <h3
        style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}
      >Contact Bank Account in Pakistan</h3>
      <Form>
          <Form.Group as={Col} controlId="relationship">
            <Form.Label>Relationship to Contact</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option value="">Bank Name</option>
              <option value="father">Bank1</option>
              <option value="mother">Bank2</option>
            </Form.Select>
            <FormText muted>Required</FormText>
          </Form.Group>
          <Form.Group as={Col} controlId="phoneNumber">
            <Form.Label>Account Number or IBAN</Form.Label>
            <Form.Control type="text"/>
            <FormText muted>Required</FormText>
          </Form.Group>
      </Form>
    </>
  )
}

export const AddContactModal = () => {
  const [isFirst, setIsFirst] = useState(true);

  return (
    <>
      <Modal
        show={true}
        centered
        backdrop='static'
        fullscreen='sm-down'
        size='lg'
      >
        <div className={`${css.addContactModalContainer}`}>
          <Modal.Header centered closeButton>
            <img style={{justifyItems: 'center'}} src={nbp_logo}/>
            {/* <Modal.Title>New Account</Modal.Title> */}
          </Modal.Header>
          <ProgressBar className={`${css.progressBarRefactor}`} min={0} max={2} now={1} />
          <Modal.Body style={{height: '75vh', overflowY: 'scroll'}}>
            { isFirst ? <CreateContact/> : <AddPKBankAccount/>}
          </Modal.Body>
          <Modal.Footer>
            <div style={{width: '100%'}}><Button style={{width: '100%'}} onClick={_ => setIsFirst(false)}>Add Contact Bank Account</Button></div>
            { !isFirst && <Button style={{width: '100%'}} variant="outline-primary"  onClick={_ => setIsFirst(true)}>Back</Button>}
            { isFirst && <div style={{width: '100%'}}><Button style={{width: '100%'}} variant="outline-primary" type="button">Add Contact For Cash Pickup</Button></div> }
          </Modal.Footer>
        </div>
      </Modal>
    </>
  )
}