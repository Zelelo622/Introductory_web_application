import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { PersonalAccount } from './PersonalAccount';

export const Auth = () => {
    const login = useRef();
    const password = useRef();
    const getLogin = localStorage.getItem("login");
    const getPassword = localStorage.getItem("password");
    const handleSubmit = () => {
        if (login.current.value === "admin" && password.current.value === "1234") {
            localStorage.setItem("login", "admin");
            localStorage.setItem("password", "1234");
        }
    }

    return (
        <Container>
            <div>
                {
                    getLogin && getPassword ? <PersonalAccount />
                        :
                        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control type="text" placeholder="Введите логин" ref={login} />
                                </Form.Group>

                                <Form.Group className="mb-3" co>
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Пароль" ref={password} />
                                </Form.Group>
                                <Button type="submit">
                                    Войти
                                </Button>
                            </Form>
                        </div>
                }
            </div>
        </Container>
    )
}
