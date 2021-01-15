import React from 'react';
import './style.css';

export const Login = () => {
  return (
    <>
      <div className="container-login">
        <div className="title-login">
          <h2>Ingreso</h2>
        </div>
        <form>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              placeholder="Correo electrónico"
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Contraseña" 
              autoComplete="off" 
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
        </form>
      </div>
    </>
  )
}
