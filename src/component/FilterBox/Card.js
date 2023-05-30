import React,{useState,useEffect} from 'react'
import './card.css'
import Card2 from '../card22/card2'
import axios from 'axios'
 

function Card( props ) {
    // const[id,setId]=useState('')
    // const handleSingle=(id)=>{
    //     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
    //     .then(res=>{
    //         console.log(res.data)
    //         console.log(res.data.drinks[0].strGlass)
    //         // setId(res.data.drinks[0])
    //         props.getCardDetails(res.data.drinks[0])
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })

    // }

    return (
        <div>
            

            <h6>Showing {props.data.length} results</h6>
            
            <div className='bigb d-flex m-3'>
            {props.data.map(item => ( 
                <div className="card" key={item.id}>
                <img src={item.strDrinkThumb} className="cardimg" alt="..." />
                <h5 className="cardtitle">Drink:{item.strDrink}</h5>
            <button type="button" onClick={()=>props.getCardDetails(item.strDrink)} id="btn" className="btn btn-primary">Explore</button>
            </div>
            ))}
            </div>
            {/* <Card2  data={id}/> */}
            
        </div>
        
    )
}

export default Card