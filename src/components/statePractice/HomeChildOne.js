import React , {useContext, useState}from 'react';
import HomeChildTwo from './HomeChildTwo';
import { constValue } from './StateIndex';
import { useEffect } from 'react';

const allProducts = [
    {'name': 'Lenovo', 'category':'laptop'},{'name': 'Asus', 'category':'laptop'},{'name': 'Apple', 'category':'laptop'},
    {'name': 'Samsung', 'category':'Mobile'},{'name': 'Huawei', 'category':'Mobile'},{'name': 'Oppo Reno', 'category':'Mobile'},
    {'name': 'Sony', 'category':'Camera'},{'name': 'Canon', 'category':'Camera'},{'name': 'Nikkon', 'category':'Camera'},
]

const HomeChildOne = () => {
    const [value] = useContext(constValue);
    const [products, setProducts] = useState([]);
    useEffect(() => {
         console.log({value})
        const sameCat = allProducts.filter(cat => cat.category.toLowerCase() === value.toLowerCase())
        setProducts(sameCat);
    }, [value])
    return (
        <div>
            <h1>Categoty Selected : {value}</h1>
            <h4>Product details</h4>
            {
                products.map(pd => <HomeChildTwo pd={pd} />)
            }
            
        </div>
    );
};

export default HomeChildOne;