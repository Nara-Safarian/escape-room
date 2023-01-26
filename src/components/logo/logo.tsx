import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="back-to__main" to='/'>
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
