import React from 'react';
import { array } from '../../helpers/dataDiademas';

export const Diademas = () => {
  return (
    
    <div className='container-cards p-3'>
      <div className='cards p-3 text-center'>
        <h1 className='mb-5'> Diademas </h1>
        <div className="row row-cols-1 row-cols-md-4">

          { array.map((diademas, key) =>
            <div className="col mb-4" key={ key }>
              <div className="card">
                <img src={ diademas.img } className="card-img-top" alt={ diademas.name } />
                <div className="card-body">
                  <h3 className="card-title"> { diademas.name } </h3>
                  <h4 className="card-text"> {`$ ${diademas.price}`} </h4>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  
  )
}
