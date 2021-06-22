import React from 'react'
import { useState,useContext } from 'react'
import Pagination from './Pagination'
import CardDish from './CardDish'
import {AllMenuContext} from './AllMenuContext'

function FilterdDishes(props) {
    console.log('props data',props.datas)
    console.log('menus',props.allmenu)
    console.log('single dishes is',props.singleDish)

    let allmenus = useContext(AllMenuContext)


    let [filterdDishes,setfilterdDishes] = useState([])

    let [activeDishes,setactiveDishes] = useState("Beef")

    //let's show only single dishes
    let maxitem=4
    let singleDishItems= props.singleDish.map((item,index)=>{
        if (index < maxitem){
            return(
                <CardDish item={item}/>
             )
        }   
    })


    function showfilterdDisheshandler(categories){
        console.log('hii you clicked'+categories)
        props.setsingleDish([])
        setactiveDishes(categories)

        let filterdDishesare = allmenus.filter((item)=>{

            return item.strCategory === categories
        }).map((item)=> {
            return(
                <CardDish item={item}/>
            )
        })

        setfilterdDishes(filterdDishesare)
    }
//lets show all categories
    let allcategory = props.datas.map((item)=>{
        return( 
            <li className={item.strCategory === activeDishes ? "active ": ""} onClick={()=>{showfilterdDisheshandler(item.strCategory)}}>{item.strCategory}</li>
        )
    })
    
    return (
        <div className='filtred-dishes'>
            <div className='conatiner'>
                <div className="text-center">
                <h2>Choose Your Favourite</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum cum deserunt reiciendis harum dolorem atque iste eius exercitationem dignissimos.</p>
                </div>

                <div className='filterd-dishes'>
                    <ul>
                        {allcategory}
                    </ul>
                </div>

                <div className='filtered-dishes-results'>
                    <ul className='flex flex-wrap gap-30'>
                        {singleDishItems}
                        {/* condition render */}
                        {singleDishItems !==0 || filterdDishes.length !==0 ? filterdDishes : 
                        <div className='alert'>
                            <h3>sorry try another dishes</h3>
                            <h4>No Item's Found Please Choose Another Item</h4>
                        </div>
                        }
                        
                      
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default FilterdDishes
