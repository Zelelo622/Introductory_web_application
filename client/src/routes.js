import { Application } from "./pages/Application";
import { Archive } from "./pages/Archive";
import { Auth } from "./pages/Auth";
import { PersonalAccount } from "./pages/PersonalAccount";
import { Roles } from "./pages/Roles";
import { ADMIN_ROUTE, ARCHIVE_ROUTE, LOGIN_ROUTE, PATIENT_ROUTE, ROLES_ROUTE } from "./utils/consts";

export const routes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: PATIENT_ROUTE,
        Component: Application
    },

    {
        path: ADMIN_ROUTE,
        Component: PersonalAccount
    },

    {
        path: ROLES_ROUTE,
        Component: Roles
    },

    {
        path: ARCHIVE_ROUTE,
        Component: Archive
    }
]