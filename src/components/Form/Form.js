import React from 'react'

const Form = () => {
  return (
    <>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="giph" className="sr-only">Password</label>
          <input 
            type="text" 
            name="giph"
            id="giph"
            className="form-control" />
        </div>
          <button type="submit" className="btn btn-primary mb-2">Ducky Search</button> 
      </form>
    </>
  )
}

export default Form