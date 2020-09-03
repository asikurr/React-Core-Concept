import React ,{useContext} from 'react'
import { constValue } from './StateIndex'

const StateHeader = () => {
     const [categories, setCategories]  = useContext(constValue);

    return (
        <div>
            <h1>State Header : {categories} </h1>
            <button onClick={()=>setCategories('laptop')}>Laptop</button>
            <button onClick={()=>setCategories('mobile')}>Mobile</button>
            <button onClick={()=>setCategories('camera')}>Camera</button>
        </div>
    )

}

export default StateHeader
