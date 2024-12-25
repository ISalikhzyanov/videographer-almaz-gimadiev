import './contacts.scss'
import contactsImage from '../assets/contacts-page-image.png'

function Contacts() {
    return (
        <div className='container d-flex flex-column align-items-center'>
            <h2 className="text-center">Контакты</h2>
            <div className='d-flex flex-column align-items-center'>
                <img className='contacts__image' src={contactsImage} alt=""/>
                <a className='contacts__link' href=''>89991553223</a>
            </div>
            <div className='contacts__links'>
                <a className='contacts__link' href='https://t.me/almazvideo' target='_blank'>Telegram</a>
                <a className='contacts__link' href='https://wa.me/79377778796' target='_blank'>WhatsApp</a>
                <a className='contacts__link' href='https://vk.com/almazgim' target='_blank'>VK</a>
                <a className='contacts__link' href='https://www.instagram.com/almazgimadiev?igsh=MXdjNTc0ejVyb252eA==' target='_blank'>Instagram</a>
            </div>
        </div>
    );
}

export default Contacts;