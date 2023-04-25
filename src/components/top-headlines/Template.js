import React from 'react'
import './style.css'
function Template(props) {
  return (
      <>
  <img src={!props.imageUrl?"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg":props.imageUrl} className=" visuals card-img-top" alt="visuals" />
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.desc}...</p>
    <h5>{props.auth}</h5>
    <a href={props.lnk} className="btn btn-primary">Read More...</a>
</div>
</>
  )
}
export default Template
