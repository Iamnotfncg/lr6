// Header.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { SignInContext } from '../context/SignInContext';
import { Link } from 'react-router-dom';

function Header() {
    const { isLogged, setIsLogged } = useContext(SignInContext);

    const handleLoginLogout = () => {
        setIsLogged(prev => !prev);
    };

    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-6 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2 text-secondary">Lab work five</Link></li>
                        </ul>

                        <div className="text-end">
                          <Link to={!isLogged ? "/login" : "/"} className="btn btn-outline-light me-2">
                            <button onClick={handleLoginLogout}>{!isLogged ? "Login" : "Logout"}</button>
                          </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
