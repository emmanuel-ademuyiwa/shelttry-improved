import React from 'react'
import { BsTags } from 'react-icons/bs'

const Location = ({ title, img }) => {
  return (
        <div className="locationContainer">
          <div className="imgContainer">
            <img src={img} alt="" />
          </div>
          <div className="title">
            <div className="tag">
              <BsTags />
            </div>
            <div className="locationTitle">
              <h4>{title}</h4>
            </div>
          </div>
        </div>
  )
}

export default Location