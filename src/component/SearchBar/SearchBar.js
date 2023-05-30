import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import axios from 'axios'
import Card from '../FilterBox/Card'
import Card2 from '../card22/card2'

function SearchBar() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [error,setError]=useState('')
  const [id,setId]=useState('')
  

  const handleClick = () => {
    


    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
      .then(res => {
        
          console.log(res.data)
          console.log(res.data.drinks)
          setData(res.data.drinks)
          setId('')
        
      })
      .catch(err => {
        console.log(err)
      })

  }
  const handleCardDetails =(id)=>{
  setId(id)
  }
  
  
  return (
    <div>
      <nav className='nav-bar'>
        <h1 className='t1'>99eye</h1>
        <input className='searchbox' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Search by ingredient' />
        <button type="button" onClick={handleClick} className='sbtn'>Search</button>
        <div className="dropdown">
          <button  class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </button>
          <div className='row d-flex'>
          <div className="col1">
          <ul className="dropdown-menu">
            <li>Filter by category</li>
            <li><a className="dropdown-item" href="/">Ordinary Drink</a></li>
            <li><a className="dropdown-item" href="/">Cocktail</a></li>
            <li><a className="dropdown-item" href="/">Milk/Float/Shake</a></li>
            <li><a className="dropdown-item" href="/">Cocoa</a></li>
            <li><a className="dropdown-item" href="/">Shot</a></li>
            <li><a className="dropdown-item" href="/">Coffee/Tea</a></li>
            <li><a className="dropdown-item" href="/">Homemade Liqueur</a></li>
            <li><a className="dropdown-item" href="/">Punch/Party Drink</a></li>
            <li><a className="dropdown-item" href="/">Beer</a></li>
            <li><a className="dropdown-item" href="/">Soft Drink/Soda</a></li>
          </ul>
          </div>
          {/* <div className="col2">
          <ul className="dropdown-menu">
            <li>Filter by category</li>
            <li><a className="dropdown-item" href="/">Ordinary Drink</a></li>
            <li><a className="dropdown-item" href="/">Cocktail</a></li>
            <li><a className="dropdown-item" href="/">Milk/Float/Shake</a></li>
            <li><a className="dropdown-item" href="/">Cocoa</a></li>
            <li><a className="dropdown-item" href="/">Shot</a></li>
            </ul>
          </div> */}
          </div>
          
          
            
              {/* {Array.isArray(data) && data.map(item => (
                <div className="card" key={item.id}>
                  <h2>{item.strDrink}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
          
           */}
          
        </div>
      </nav>
      
    {/* <Card  data={data} getCardDetails={handleCardDetails} />
    <Card2  data={id}/> */}

    {/* {data.length > 0 ? (
        <Card data={data} getCardDetails={handleCardDetails} />
      ) : (
        <Card2 data={id} />
      )} */}

     {data.length > 0 && !id && (
        <Card data={data} getCardDetails={handleCardDetails} />
      )}

      {id && (
        <>
          <hr></hr>
          <Card2 data={id} />
        </>
      )}

      <div>
      </div>
    </div>
  )
}

export default SearchBar