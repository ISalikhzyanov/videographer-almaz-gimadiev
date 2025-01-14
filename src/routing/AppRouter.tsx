import {Link, Route, Routes, useLocation} from "react-router-dom";
import {routeConfig} from "./routeConfig.ts";
import './desktop-styles.scss'

function AppRouter() {
    const router = useLocation()
    console.log(router)
    return (
        <>
            {router.pathname !== '/' && <div className="container">
                <div className='desktop'>
                    <span>AG</span>
                    <div className='desktop__links'>
                        <Link className={router.pathname === '/' ? 'desktop__active' : 'desktop__link'}
                              to="/" defaultValue="/">Главная</Link>
                        <Link
                            className={router.pathname.includes('/portfolio') ? 'desktop__active' : 'desktop__link'}
                            to="/portfolio">Портфолио</Link>
                        <Link
                            className={router.pathname === '/contacts' ? 'desktop__active' : 'desktop__link'}
                            to="/contacts">Контакты</Link>
                    </div>
                </div>
            </div>}
            <Routes>
                {routeConfig.map((route) =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
            </Routes>
        </>
    );
}

export default AppRouter;