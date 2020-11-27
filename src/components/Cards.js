import React from 'react';
import aretes from '../media/aretes.jpg';
import pulsera from '../media/vino.jpg';
import diadema from '../media/plata.jpg';
import { Link } from 'react-router-dom';

export const Cards = () => {
  return (
    <div>
      <div className='container text-center mt-5 p-3 w100'>
        <h1> Accesorios </h1>
      </div>
      <div className='container-cards p-3'>
        <div className='cards p-3'>
          <div className="card-deck">
            <div className="card text-center" >
              <img src={ `.${aretes}` } className="card-img-top card-img " alt="..." />
              <div className="card-body">
                <h2 className="card-title">Aretes</h2>
                <Link to="/aretes" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>

            <div className="card text-center" >
              <img src={ `.${pulsera}` } className="card-img-top card-img " alt="..." />
              <div className="card-body">
                <h2 className="card-title">Pulseras</h2>
                <Link to="/pulseras" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>

            <div className="card text-center" >
              <img src={ `.${diadema}` } className="card-img-top card-img " alt="..." />
              <div className="card-body">
                <h2 className="card-title">Diademas</h2>
                <Link to="/diademas" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
