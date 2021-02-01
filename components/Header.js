import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <nav className={window.innerWidth<=768?"burger":""}>
                <span className="burger__button" onClick={
                        ({target}) => {
                            if(target.classList.contains('animation-burger__button')) {
                                target.classList.remove('animation-burger__button');
                                target.classList.add('animation-initial-burger__button');
                            } else {
                                target.classList.remove('animation-initial-burger__button');
                                target.classList.add('animation-burger__button');
                            }
                            
                            const bias = target.nextSibling.style.right.split('p')[0];
                            target.nextSibling.style.right = bias < 0 ? '0px' : '-420px'
                        }
                    }></span>
                <ul style={{right: "-420px"}} className="nav">
                    <li><NavLink className="nav__elem" exact to="/">Home</NavLink></li>
                    <li><NavLink className="nav__elem" to="/about">About</NavLink></li>
                    <li><NavLink className="nav__elem" to="/create">Create</NavLink></li>
                    <li><NavLink className="nav__elem" to="/note">Check</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;