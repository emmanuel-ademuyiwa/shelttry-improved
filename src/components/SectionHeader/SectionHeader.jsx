import React from 'react'

const SectionHeader = ({ title, desc, className }) => {
  return (
    <div className={`sectionHeader ${className}`}>
        <h1>|</h1>
        <h4>{title}</h4>
        <h6>{desc}</h6>
    </div>
  )
}

export default SectionHeader