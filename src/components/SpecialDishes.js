import React from 'react'
import CardDish from './CardDish'
import { useContext,useState } from 'react'
import Popup from './Popup'
//step4 
import {AllMenuContext} from './AllMenuContext'

function SpecialDishes(props) {

    const allmenus = useContext(AllMenuContext) 

    const [showpopup, setshowpopup] = useState(false)

    const [currentDish, setcurrentDish] = useState('initialState')

//lets show the popup
    function showPopuphandler(dishName){
        setshowpopup(true)
        setcurrentDish(dishName)
    }

//lets close the popup
    function closepopupHandler(){
        setshowpopup(false)
    }    

    let maxSpecialDishes=8
    console.log('special menuss:', props.specialMenu)
    

    let specialmenus = allmenus.map((item,index) => {
        if (index < maxSpecialDishes) {
            return(
                <CardDish item={item}  showpopup={showPopuphandler} />
               
            )}
    })

    return (
        <section className='special-dishes'>
            {showpopup && <Popup 
            // fullmenu={props.specialMenu}//remove this one insted of this we using useContext
            currentDish={currentDish}
            closepopupHandler={closepopupHandler}/>}
            <div className='container'>
                <div className='special-dishes-content text-center'>
                    <h2>Our Special Dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore error suscipit sunt in, nobis ipsa amet neque.
                    </p>
                </div>
            
            <div className='special-dishes-list'>
                <ul className='flex flex-wrap gap30'>
                    {specialmenus}
                </ul>
            </div>
        </div>
        </section>
    )
}

export default SpecialDishes
