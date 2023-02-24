import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

export const AppRoutes = () => {
    return (
        <Routes>

            {
                routes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )
            };

        </Routes>
    )
}
