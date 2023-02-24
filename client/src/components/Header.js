import React from 'react'
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import { Auth } from '../pages/Auth';
import { Application } from '../pages/Application';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, PATIENT_ROUTE, ROLES_ROUTE } from '../utils/consts';

export const Header = () => {
    const getLogin = localStorage.getItem("login");
    const getPassword = localStorage.getItem("password");
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("password");
        navigate(ROLES_ROUTE, { replace: true });
    }

    return (
        <Navbar className='mb-5' bg="dark" variant="dark">
            <Container>
                <span className='text-white'>Поликлиника</span>
                {
                    getLogin && getPassword ?
                        <div className="ms-auto" style={{ color: "white", alignItems: "center" }}>
                            <span className='text-white'>Администратор</span>
                            <Button variant={"outline-light"} onClick={() => logOut()} style={{ marginLeft: 20 }}>Выйти</Button>
                        </div>
                        :
                        <div className="ms-auto" style={{ color: "white", alignItems: "center" }}>
                            <span className='text-white'>Пациент</span>
                            <Button variant={"outline-light"} onClick={() => navigate(ROLES_ROUTE)} style={{ marginLeft: 20 }}>Смена роли</Button>
                        </div>
                }
            </Container>
        </ Navbar >
    )
}