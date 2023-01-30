import { Link } from 'react-router-dom';
import { ActiveHeaderElement } from '../../constants';
import Logo from '../logo/logo';

type HeaderProps = {
  activeElement: ActiveHeaderElement;
  isNotDisabled?: boolean;
}

function Header ({activeElement, isNotDisabled}: HeaderProps): JSX.Element {
  const isAuthorized = true;

  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <Logo />
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={`link ${activeElement === ActiveHeaderElement.Quests ? 'active' : ''} ${isNotDisabled ? 'not-disabled' : ''}`} to="/">Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${activeElement === ActiveHeaderElement.Contacts ? 'active' : ''} ${isNotDisabled ? 'not-disabled' : ''}`} to="/contacts">Контакты</Link>
            </li>
            {
              isAuthorized && (
                <li className="main-nav__item">
                  <Link className={`link ${activeElement === ActiveHeaderElement.MyRseservations ? 'active' : ''} ${isNotDisabled ? 'not-disabled' : ''}`} to="/my-quests">Мои бронирования</Link>
                </li>
              )
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            isAuthorized
              ? <a className="btn btn--accent header__side-item" href="#">Выйти</a>
              : <a className="btn header__side-item header__login-btn" href="login.html">Вход</a>
          }
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
