import React from 'react'
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, ARCHIVE_ROUTE, ROLES_ROUTE } from '../utils/consts';
import '../css/media.css'

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
            <Container className='header'>
                <span className='text-white'>Поликлиника</span>
                {
                    getLogin && getPassword ?
                        <div className="header-nav ms-auto" style={{ color: "white", alignItems: "center", display: "flex" }}>
                            <span className='text-white'>Администратор</span>
                            <div className='header-btns'>
                                <Button href={ADMIN_ROUTE} variant={"outline-light"} style={{ marginLeft: 20 }}>Заявки</Button>
                                <Button href={ARCHIVE_ROUTE} variant={"outline-light"} style={{ marginLeft: 20 }}>Архив</Button>
                                <Button variant={"outline-light"} onClick={() => logOut()} style={{ marginLeft: 20 }}>Выйти</Button>
                            </div>
                        </div>
                        :
                        <div className="header-nav ms-auto" style={{ color: "white", alignItems: "center", display: "flex" }}>
                            <span className='text-white'>Пациент</span>
                            <div className='header-btns'>
                                <Button variant={"outline-light"} onClick={() => navigate(ROLES_ROUTE)} style={{ marginLeft: 20 }}>Смена роли</Button>
                            </div>
                        </div>
                }
            </Container>
        </ Navbar >
    )
}