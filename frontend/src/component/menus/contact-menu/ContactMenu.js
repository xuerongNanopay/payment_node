import { Button } from 'react-bootstrap';

import css from './ContactMenu.module.css'
import { AddContactModal } from 'component/modals/AddContactModal'

const ContactMenu = _ => {
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
          <Button>Add Contact</Button>
          <AddContactModal/>
        </div>
      </div>
    </>
  )
}

export default ContactMenu;