import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


class LoginView extends Component {
  render() {
    return (
      <body className="text-center loginV">       
        <div className='loginDiv'>
            <h1 className="mb-3">AgileMovies</h1>
            <p className="mb-3 fw-light fs-3">Portal de películas</p>
        <input type="text" placeholder="Usuario" id="user" className="form-control mb-3"/>
        <input type="text" placeholder="Contraseña" id="password" className="form-control mb-3"/>
        <Link to="/main">
        <input className="btn btn-outline-warning" type="submit" value="Iniciar Sesión" />
        </Link>
        </div>
      </body>
    )

  }
}
export default LoginView;