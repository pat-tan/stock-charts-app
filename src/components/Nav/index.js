import { Link } from 'react-router-dom';
// import './styles.css';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
 
const Nav = ({ handleChange }) => {
   const user = useContext(UserContext);  
    
   return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/">Stock Charts App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="facebook" > Facebook</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="apple" > Apple</Link>
                            </li>
                                                        
                            {/* <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link> 
                              </li>  
                             
                             {!user? null:
                            <li className="nav-item">
                                <Link className="nav-link" to="favorites"> Favorites </Link>
                            </li>  } */}
                        </ul>                        
                    </div>
                    
                    <div className='searchbar'>                        
                        <input className="form-control me-2" type="search" placeholder= "search..." onChange={handleChange}/>
                        {/* <button className="btn btn-outline-success" onClick={fetchStock}> Search </button> */}

                    </div>
                 
                </div>
            </nav>
    );
}

export default Nav;
