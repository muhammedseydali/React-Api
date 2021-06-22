import React,{useState,useEffect} from "react"
import Loader from './Loader.js'


export const AllMenuContext = React.createContext()
export const AllMenus =(props)=>{
    const [menu, setmenu] = useState([])
    const [loading, setloading ]= useState(true)

    async function getAllTheMenus(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch (API_URL)    
        let data = await response.json()
        setmenu(data.meals)
        setloading(false)
    }
    useEffect(() => {
        getAllTheMenus()
    }, [])
    getAllTheMenus() 

    return(
        <AllMenuContext.Provider value={menu}>
            {!loading ? props.children : <div className='loader'>loading</div>}
        </AllMenuContext.Provider>
    )
}
