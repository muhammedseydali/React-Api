import React,{useContext} from 'react'
import {AllMenuContext} from './AllMenuContext'

function Popup({closepopupHandler,currentDish, fullmenu}) {

    const allmenus = useContext(AllMenuContext)


    let dishDetails = allmenus.filter((item)=>{
        return item.strMeal === currentDish
    }).map((item)=>{
        return(
            <div className='popup-content-data'>
                <div className='popup-header'>
                <img src={item.strMealThumb} alt='img'/>
                <h5 className='popup-header-category'>{item.strCategory}</h5>
                </div>
                <h2>{item.strMeal}</h2>
                <p>{item.strInstructions}</p>

                <ul className='dish-ingredients flex'>
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                </ul>
            </div>
        )
    })
    return (
        <div className='popup'>
            <div className="popup-content">
                <h2>{dishDetails}</h2>
                <button>Order Now</button>
                <h5 className='popup-close' onClick={closepopupHandler}>Close</h5>
            </div>
        </div>
    )
}

export default Popup
