import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { LOGIN_ROUTE, PATIENT_ROUTE } from '../utils/consts';

export const Roles = () => {
  return (
    <Container>
      <div style={{textAlign: "center"}}>
        <Button href={PATIENT_ROUTE}>Пациент</Button>
        <Button className='mx-3' href={LOGIN_ROUTE}>Администратор</Button>
      </div>
    </Container>
  )
}
