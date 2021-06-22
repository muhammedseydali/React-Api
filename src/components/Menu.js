
import React, {useState,useEffect}from 'react'
import FilterdDishes from './FilterdDishes';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import {AllMenus} from './AllMenuContext';

//step 1
//step3 => export the AllMenuContext
//step4 onSpecialdishes.js
//create a global context
// export const AllMenuContext = React.createContext()


function Menu() {

    const [categories, setCategories] = useState([])
    
    const [singleDish, setsingleDish] = useState([])

    async function getAllTheCategories(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch (API_URL)    
        let categorydata = await response.json()
        setCategories(categorydata.categories)
    }


    async function getOnlyOneDish(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch (API_URL) 
        let data = await response.json()
        setsingleDish(data.meals)
    }

    
    useEffect(()=>{
       
       getAllTheCategories()
       getOnlyOneDish()
    }, []);


    return (
        <div>
            <AllMenus>
            <Hero/>
            {/* //step2 context */}
            {/* <AllMenuContext.Provider value={menu}> */}
                <SpecialDishes/>
                    <FilterdDishes   datas={categories}  singleDish={singleDish} setsingleDish={setsingleDish}/>

            </AllMenus>
            {/* </AllMenuContext.Provider> */}
        </div>
    )
}

export default Menu
