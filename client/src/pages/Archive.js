import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { db } from '../utils/firebase';
import '../css/TableStyle.css'
import '../css/media.css';

export const Archive = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, 'Application/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newApplication = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            const applicationConfirmed = newApplication.filter(ele => ele.status !== false)
            applicationConfirmed.sort((a, b) => new Date(...b.date.split('/')) - new Date(...a.date.split('/')));
            setApplications(applicationConfirmed)
        });
    }, []);

    return (
        <Container>
            <table className='table'>
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
                                    <td data-label="Жалобы">{item.complaint}</td>
                                    <td data-label="Тяжесть">{item.severitySymptoms}</td>
                                    <td data-label="Дата посещения">{item.date}</td>
                                    <td data-label="Имя">{item.firstName}</td>
                                    <td data-label="Фамилия">{item.secondName}</td>
                                    <td data-label="Телефон">{item.phone}</td>
                                    <td data-label="Почта">{item.email}</td>
                                    <td className="table-success">Подвержден</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container >
    )
}
