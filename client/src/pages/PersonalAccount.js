import { onValue, query, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { collection, onSnapshot, QuerySnapshot } from 'firebase/firestore'
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
      setApplications(newPosts);
    });
  }, []);

  console.log(applications)

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
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      {/* <Table striped bordered hover>
        <table>
          <thead>
            <tr>
              <th>Жалобы</th>
              <th>Тяжесть</th>
              <th>Дата посещения</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Телефон</th>
              <th>Почта</th>
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
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Table> */}
    </Container>
  )
}
