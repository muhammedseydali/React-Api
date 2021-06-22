import React,{useEffect} from 'react'


function CardDish(props) {

    
    return (
            <li>
                {/* <a href='javascript:;' onClick={props.showpopup}> */}
                <a href='javascript:;' onClick={()=> props.showpopup(props.item.strMeal)}>
                <img src={props.item.strMealThumb} alt='imgsrc' className='br-10'/>
                <h2>{props.item.strMeal}</h2>
                </a>
            </li>
    )
}

export default CardDish
