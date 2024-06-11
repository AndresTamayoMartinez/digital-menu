import imgLogo from '../img/logo.png';
import '../css/Header.css';

const Header = () => {
    return(
        <section className="header">
            <div className="header-content">
                <div className="info-header">
                    <p className="p1">Bienvenido a:</p>
                    <img src={imgLogo} alt=''></img>
                    <p className="p2">Alimenta tu día, una taza a la vez.</p>
                    <div className="social-header">
                        <p className="p3">Redes Sociales</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;