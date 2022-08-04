import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <section className='search'>
        <div className="containe">
            
        <div className="searchHeader">
                <div className="searchIcon">
                    <BsSearch />
                </div>
                <div className="searchTitle">
                    <h4>Search your home</h4>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="searchInput">

                <div className="">
                    <label htmlFor="location">Location</label>
                    <select name="location" id="location">
                        <option value="volvo">Ago</option>
                        <option value="mercedes">Ijebu Igbo</option>
                        <option value="saab">Oru</option>
                    </select>
                </div>

                <div className="">
                    <label htmlFor="type">Hall Type</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Flat</option>
                        <option value="saab">Self-contain</option>
                        <option value="mercedes">Single room</option>
                    </select>
                </div>

                <div className="">
                    <label htmlFor="min-price">Min Price</label>
                    <select name="min_price" id="min_price">
                        <option>10,000</option>
                        <option>20,000</option>
                        <option>30,000</option>
                        <option>40,000</option>
                        <option>50,000</option>
                        <option>60,000</option>
                        <option>70,000</option>
                        <option>80,000</option>
                    </select>
                </div>

                <div className="">
                    <label htmlFor="max-price">Max Price</label>
                    <select name="cars" id="cars">
                    <option>40,000</option>
                        <option>50,000</option>
                        <option>60,000</option>
                        <option>70,000</option>
                        <option>80,000</option>
                        <option>90,000</option>
                        <option>100,000</option>
                        <option>110,000</option>
                        <option>120,000</option>
                        <option>130,000</option>
                        <option>140,000</option>
                        <option>150,000</option>
                        <option>160,000</option>
                        <option>170,000</option>
                        <option>180,000</option>
                        <option>190,000</option>
                        <option>200,000</option>

                    </select>
                </div>
                <button className="searchBtn">Search</button>
            </div>

        </div>
    </section>
  )
}

export default Search