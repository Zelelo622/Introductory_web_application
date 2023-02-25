import '../css/Application.css';
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { db } from '../utils/firebase';

export const Application = () => {
  const [complaint, setComplaint] = useState("");
  const [severitySymptoms, setSeveritySymptoms] = useState(0);
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hover, setHover] = useState(0);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, '/Application/' + uuid), {
      complaint,
      severitySymptoms,
      date,
      firstName,
      secondName,
      phone,
      email,
    });
    setComplaint("");
    setSeveritySymptoms(0);
    setDate("");
    setFirstName("");
    setSecondName("");
    setPhone("");
    setEmail("");
    setHover(0);
    console.log(severitySymptoms);
  };

  return (
    <div className="App">
      <Container>
        <Form.Group className="mb-3">
          <Form.Label>Жалобы</Form.Label>
          <Form.Control type="text" placeholder="Жалобы" id='complaintbox' value={complaint} onChange={e => setComplaint(e.target.value)} />
        </Form.Group>
        <div className="star-rating mb-3">
          <Form.Label className='d-block'>Тяжесть симптомов</Form.Label>
          {[...Array(10)].map((num, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || severitySymptoms) ? "rating-btn on" : "rating-btn off"}
                onClick={() => setSeveritySymptoms(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(severitySymptoms)}
              >
                <span className="rating-num">{index}</span>
              </button>
            );
          })}
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Дата посещения</Form.Label>
          <Form.Control type="date" placeholder="Дата посещения" id='datebox' value={date} onChange={e => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Имя" id='firstNamebox' value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control type="text" placeholder="Фамилия" id='secondnamebox' value={secondName} onChange={e => setSecondName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="tel" placeholder="Телефон" id='phonebox' value={phone} onChange={e => setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Почта</Form.Label>
          <Form.Control type="email" placeholder="Почта" id='emailbox' value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={writeToDatabase}>
          Отправить
        </Button>
      </Container>
    </div>
  );
}
