import React from 'react'

type Props = {}

function FormInfo({}: Props) {
  return (
    <div className='container '>
      <form action="">
        <div className="col-6">
          <div className='row text-center'>
            <div className="col-6">
              <label htmlFor="">Email</label><br />
              <input type="text" />
            </div>
            <div className="col-6">
              <label htmlFor="">Password</label><br />
              <input type="text" />
            </div>
          </div>
          <div className="text-center">
            <label htmlFor="">Adress</label><br />
            <input type="text" style={{width: "80%"}}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormInfo