import React from 'react';
import { array } from '../../helpers/dataPulseras';

export const Pulseras = () => {
  return (
    
      <div className='container-cards p-3'>
        <div className='cards p-3 text-center'>
          <h1 className='mb-5'> Pulseras </h1>
          <div className="row row-cols-1 row-cols-md-4">

            { array.map((pulseras, key) =>
              <div className="col mb-4" key={key}>
                <div className="card">
                  <img src={ `.${pulseras.img}` } className="card-img-top" alt={pulseras.name} />
                  <div className="card-body">
                    <h3 className="card-title"> {pulseras.name} </h3>
                    <h4 className="card-text"> {`$ ${pulseras.price}`} </h4>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    
  )
}
