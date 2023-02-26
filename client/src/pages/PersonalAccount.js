import { onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { db } from '../utils/firebase';

export const PersonalAccount = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'Application/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      newPosts.sort((a, b) => new Date(...b.date.split('/')) - new Date(...a.date.split('/')));
      setApplications(newPosts);
    });
  }, []);

  const toggleStatus = async (application) => {
    await update(ref(db, 'Application/' + application.id), {
      status: !application.status
    });
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr className="table-info">
            <th>Жалобы</th>
            <th>Тяжесть</th>
            <th>Дата посещения</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>Почта</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {
            applications.map((item, id) => {
              return (
                <tr key={id}>
                  <th>{item.complaint}</th>
                  <th>{item.severitySymptoms}</th>
                  <th>{item.date}</th>
                  <th>{item.firstName}</th>
                  <th>{item.secondName}</th>
                  <th>{item.phone}</th>
                  <th>{item.email}</th>
                  <th><input onChange={() => toggleStatus(item)} type='checkbox' checked={item.status ? 'checked' : ''} /></th>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}
