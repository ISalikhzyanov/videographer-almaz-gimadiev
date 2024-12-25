import HomePage from "../home/HomePage.tsx";
import {JSX} from "react";
import Portfolio from "../portfolio/Portfolio.tsx";
import Contacts from "../contacts/Contacts.tsx";
export interface IRoute {
    path: string;
    element: () => JSX.Element;
    displayName: string;
}

const homeRoute: IRoute = { path: '/', element: HomePage, displayName: 'Главная страница' };
const portfolioRoute: IRoute = { path: '/portfolio', element: Portfolio, displayName: 'Портфолио' }
const contactsRoute: IRoute = { path: '/contacts', element: Contacts, displayName: 'Контакты' }

export const routeConfig = [
    homeRoute,
    portfolioRoute,
    contactsRoute
]