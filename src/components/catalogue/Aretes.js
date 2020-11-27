import React from 'react';
import { array } from '../../helpers/dataAretes';

export const Aretes = () => {
  return (

    <div className='container-cards p-3'>
      <div className='cards p-3 text-center'>
        <h1 className= 'mb-5'> Aretes </h1>
        <div className="row row-cols-1 row-cols-md-4">

          { array.map( (aretes, key) => 
            <div className="col mb-4" key={ key }>
              <div className="card">
                <img src={ aretes.img } className="card-img-top" alt={ aretes.name } />
                <div className="card-body">
                  <h3 className="card-title"> { aretes.name } </h3>
                  <h4 className="card-text"> { `$ ${ aretes.price }` } </h4>
                </div>
              </div>
            </div>
            ) }

       </div>
      </div>
    </div>

  )
}
