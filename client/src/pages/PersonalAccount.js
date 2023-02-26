import { onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { db } from '../utils/firebase';

export const PersonalAccount = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'Application/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newApplication = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      newApplication.sort((a, b) => new Date(...b.date.split('/')) - new Date(...a.date.split('/')));
      setApplications(newApplication);
    });
  }, []);

  const toggleStatus = async (application) => {
    await update(ref(db, 'Application/' + application.id), {
      status: !application.status
    });
  };

  return (
    <Container>
      <table className='table table-hover table-striped text-center'>
        <thead>
          <tr className="table-info">
            <th scope="col">Жалобы</th>
            <th scope="col">Тяжесть</th>
            <th scope="col">Дата посещения</th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Телефон</th>
            <th scope="col">Почта</th>
            <th scope="col">Статус</th>
          </tr>
        </thead>
        <tbody>
          {
            applications.map((item, id) => {
              return (
                <tr key={id}>
                  <th className='fw-normal' scope="row">{item.complaint}</th>
                  <th className='fw-normal'>{item.severitySymptoms}</th>
                  <th className='fw-normal'>{item.date}</th>
                  <th className='fw-normal'>{item.firstName}</th>
                  <th className='fw-normal'>{item.secondName}</th>
                  <th className='fw-normal'>{item.phone}</th>
                  <th className='fw-normal'>{item.email}</th>
                  <th className='fw-normal'><input onChange={() => toggleStatus(item)} type='checkbox' checked={item.status ? 'checked' : ''} /></th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Container>
  )
}
