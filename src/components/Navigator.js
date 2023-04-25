import React from 'react'
import '../stylesheets/nav.css'
import {
  Link
} from "react-router-dom";
function Navigator() {
  return (
    <div>
      <nav style={{    backgroundColor: 'burlywood'}} className=" navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <b className="navbar-brand">TAAZA KHABAR</b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link " aria-current="page" to='/'>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/business' >Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/entertainment'>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link " to='/general'>General</Link></li>
        <li className="nav-item"><Link className="nav-link " to='/science' >Science</Link></li>
        <li className="nav-item"><Link className="nav-link " to='/sports'>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link " to='/technology'>Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigator
