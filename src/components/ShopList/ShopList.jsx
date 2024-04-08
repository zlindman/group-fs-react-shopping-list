import React, {useState, useEffect} from 'react';
//import axios from 'axios';

function ItemSection() {

    //varibles
    let [itemName, setName] = useState('');
    let [itemQuantity, setQuantity] = useState('');
    let [itemUnit, setUnit] = useState ('');
    let [itemArray, setItemArray] = useState([]);

    //useEffect
    // useEffect(() => {
    //     grabItems();
    // }, []);
    //axios get - grab list from database

    // const grabItems = () => {
    //     axios.get('/api/shop').then((response) =>{
    //         console.log('data respsonse'. response.data);
    //         setItemArray(response.data);
    //     }).catch((error) => {
    //         console.log('error in get', error);
    //         alert('something went wrong');
    //     });
    // }

    // return (

    //     <p>Items</p>
    //     {JSON.stringify(itemArray)}


    //     // {
    //     //     itemArray.map((item) => (
    //     //     <li key={item.id}>
    //     //     Name: {item.name},
    //     //     Quantity: {item.quantity},
    //     //     Unit: {item.quantity} </li>   
    //     // ))
    //     // }
        
    // );

}

export default ItemSection;