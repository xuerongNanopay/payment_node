import { Button } from 'react-bootstrap';

import css from './ContactMenu.module.css'
import useAddContactModal from 'components/modals/AddContactModal';

const ContactMenu = _ => {
  const [ handleShow, Modal ] = useAddContactModal();

  return (
    <>
      <div className={`${css.contactMenuContainer}`}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginTop: '1rem'
          }}
        >
          <h1>Contacts</h1>
          <div>
            <Button onClick={handleShow}>Add Contact</Button>
            {Modal}
          </div>
        </header>
      </div>
    </>
  )
}

export default ContactMenu;