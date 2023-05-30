import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './card2.css'


function Card2({ data }) {
  const [cardDetail, setCardDetail] = useState(null)


  useEffect(() => {
    // handleSingle(data);
    if (data) {
      handleSingle(data);
    }
  }, [data])

  const handleSingle = (id) => {

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
      .then(res => {
        console.log(res.data.drinks[0])
        console.log(res.data.drinks[0].strGlass)
        console.log(res.data.drinks[0].strIngredient1)
        console.log(res.data.drinks[0].strIngredient2)
        console.log(res.data.drinks[0].strIngredient3)
        // console.log(res.data.drinks[0].strGlass)
        setCardDetail(res.data.drinks[0])
        // setCardDetail(res.data.drinks[0].strIngredient1);
        // setCardDetail(res.data.drinks[0].strIngredient2);
        // setCardDetail(res.data.drinks[0].strIngredient3);
        // setId(res.data.drinks[0])
        // props.getCardDetails(res.data.drinks[0])
      })

      .catch(err => {
        console.log(err)
      })

  }
  //  console.log(data);


  return (
    //     <div>



    //             <div className='singleCard'>
    //             {Object.values(data).map(item => ( 
    //                 <div className="card" key={item.id}>
    //                 <img src={item.strDrinkThumb} className="cardimg" alt="..." />
    //                 <h5 className="cardtitle">Drink:{item.strDrink}</h5>
    //             </div>
    //             ))}
    //             </div>

    //         </div>

    //     )
    // }
    <div>
      {cardDetail && (
        <div className="singleCard">
          <div className="card" key={cardDetail.id}>
            <img src={cardDetail.strDrinkThumb} className="cardimg" alt="..." />
            <h5 className="cardtitle">Drink: {cardDetail.strDrink}</h5>
            {/* h3 */}
            <p>
              <a id="show" className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Details
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="cardd">
                    <h3 className='glass'>Glass: {cardDetail.strGlass}</h3>
                <ul className='list'>
                    <li>{cardDetail.strIngredient1}</li>
                    <li>{cardDetail.strIngredient2}</li>
                    <li>{cardDetail.strIngredient3}</li>
                  
                </ul>
              </div>
            </div>
            {/* h3 */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card2