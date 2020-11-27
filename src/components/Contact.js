import React from 'react'

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

    <div className='container-cards p-3'>
      <div className='cards p-3 text-center cc'>
        <h1 className='mb-5'> Contactanos </h1>
        <div className='container-contact p-3'>
          <div className='container m-2 bg-pr contact '>
            <h1> Contactanos </h1>
            <div className='container col'>
            <p> <i className="fab fa-whatsapp icons">  317 419 1141 </i>  </p>
             <p><i className="fab fa-instagram icons"> @jn_artmiyuki </i></p>
            </div>
          </div>
          <div className='container m-2 '>
            <h1> Envianos tus dudas </h1>
            <form onSubmit={ handleSubmit }>
              <div className="form-group">
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder='Nombre' autoComplete="off" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control"  placeholder='Asunto' autoComplete="off" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Email' autoComplete="off" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder='Mensaje' autoComplete="off" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
