import homeImage from '../assets/home-page-image.png'
import './home-page.scss'
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className='h-100 w-100 d-flex flex-row'>
            <div className='d-flex flex-column flex-grow-1 px-3'>
                <span className='home-page__logo'>AG</span>
                <div className='home-page__description-container'>
                    <h2 className='home-page__description-container header'>
                        Меня зовут Алмаз Гимадиев
                    </h2>
                    <span className='home-page__description-container description'>
                        рад приветствовать вас в своей группе! Занимаюсь профессиональной видеосъемкой уже 8 лет.
                        Принимаю заказы на съемку свадеб, Love Story, семейных видео, частных постановочных и репортажных видеосъемок.
                        В своем творчестве делаю акцент на неподдельных живых эмоциях, уникальности и неповторимости каждого события и
                        всех его участников. Сохраняю для вас неповторимое... Чтобы спустя годы вы, ваши дети, родственники и друзья с
                        улыбкой и умилением смотрели его снова и снова.
                    </span>
                </div>
                <div className='d-flex flex-row gap-2'>
                    <Link to='/portfolio'>
                        <button type="button" className="btn btn-dark">Портфолио</button>
                    </Link>
                    <Link to='/contacts'>
                        <button type="button" className="btn btn-outline-secondary">Контакты</button>
                    </Link>


                </div>
            </div>
            <div className='d-flex'>
                <img className='home-page__image' src={homeImage} alt="home-image"/>
            </div>
        </div>
    );
}

export default HomePage;