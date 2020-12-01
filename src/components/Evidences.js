import React from 'react';
import { array } from '../helpers/dataEvisdences';

export const Evidences = () => {
  return (
    <>

      <div className='container text-center mt-5 p-3 w100'>
        <h1> Evidencias </h1>
      </div>
      <div className='container-cards p-3 text-center'>
        
        <table className="table table-striped w-25">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Evidencia</th>
            </tr>
          </thead>
          <tbody>
            {
              array.map( ({ data, name }, index) => 
                <tr key={ index }>
                  <th scope="row" >{ index+1 }</th>
                  <td><a className="badge badge-yuki" href={ data } download={ name } >{ name }</a></td>
                </tr>
              )
            }
          </tbody>
        </table>
        
      </div>
      <div className="container text-center">
        <h1>Storytelling</h1>
        <hr />
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/NBY1o7ydCk4" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          title='Storytelling'
          >
          
        </iframe>
        <hr />
      </div>
    </>
  )
}
