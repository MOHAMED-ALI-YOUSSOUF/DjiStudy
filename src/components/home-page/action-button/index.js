import React from 'react'
import { Image } from 'react-bootstrap'

const ActionButton = () => {
  return (
    <div className='action-button bg-secondary p-4 d-flex justify-content-center align-items-center '>
        <div className='d-flex flex-column gap-4'>
       {/* <button className='btn btn-warning'>s'inscrire gratuitement</button> */}
       {/* <button className='btn btn-outline-light'>Decouvrire les examens</button> */}
       <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={150}
              className="mb-3 "
            />
        </div>

      
    </div>
  )
}

export default ActionButton
