import React from 'react'
import { useState} from 'react'
function Counter() {
    const [count,setCount]=useState(0);
  return (
    <div>
        <nav className='navbar bg-dark navbar-dark'>
          <div className="container">
          <a href="#" className='navbar-brand'>Frontend bootcamp</a>

            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav-menu'>
             <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id="nav-menu">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
          </div>

          </div>
        </nav>

        <div className="section bg-dark text-light p-5 text-center">
          <div className="container">
            <div className="d-sm-flex m-5">

              <div>
              <h1>Become a <span className='text-warning'> Web Developer</span></h1>
              </div>
              <img className="img-fluid w-50"src="https://cdnp3.stackassets.com/fa6fd1e226152eba86fa65cef159cde3d5a40517/store/fd9cf709c1417e2cabff70f3d3d2b3be06d0becd1df0cccfc661d327a3a7/sale_229497_primary_image.jpg" alt=""></img>
            </div>
          </div>  

        </div>
    </div>
  )
}

export default Counter