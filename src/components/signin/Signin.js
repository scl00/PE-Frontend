import React from 'react';
import './style.css';

export const Signin = () => {
  return (
    <>
      <div className="container signin">
        <div className="title-signin">
          <h2>Registro</h2>
        </div>
        <form>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name="nombre"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name="ap_paterno" 
              placeholder="Apellido paterno" 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name="ap_materno" 
              placeholder="Apellido materno"
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              placeholder="Correo electrónico"/>
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              name="password1" 
              placeholder="Contraseña" 
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              name="password2" 
              placeholder="Repita la contraseña" 
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input 
              type="tel"
              className="form-control" 
              name="telefono" 
              placeholder="Número telefónico (opcional)"
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name="rfc" 
              placeholder="RFC (opcional)"

            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              name="comunidad_unam" 
              placeholder="Número de cuenta o trabajador (opcional comunidad UNAM)"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Registrar</button>
        </form>
      </div>
    </>
  )
}
