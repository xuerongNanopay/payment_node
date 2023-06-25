import { Button } from 'react-bootstrap';

import css from './ContactMenu.module.css'
import useAddContactModal from 'component/modals/AddContactModal';

const ContactMenu = _ => {
  const [ handleShow, Modal ] = useAddContactModal();

  return (
    <>
      <div className={`${css.contactMenuContainer}`}>
        <h2>Contacts</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Button onClick={handleShow}>Add Contact</Button>
          {Modal}
        </div>
      </div>
    </>
  )
}

export default ContactMenu;