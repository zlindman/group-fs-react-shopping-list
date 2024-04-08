import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import axios from 'axios';
import './App.css';


function App () {

    //VARIBLES

    let [itemName, setItemName] = useState('');
    let [quantity, setQuantity] = useState('');
    let [itemArray, setItemArray] = useState([]);

    //GET

    const GrabItem = () => {
        axios.get('/api/cart').then (response => {
            console.log('data response', response.data);
            setItemArray(response.data);
        }).catch(error => {
            console.log('error in GET', error);
            alert('something went wrong in GET');
        });
    }

    //useEffect

    useEffect(() => {
        GrabItem();
    }, []);

    //POST

    const addItem = (evt) => {
        evt.preventDefault();
        console.log('testing');

        axios.post('/api/cart', {
            item: itemName,
            quantity: quantity
        }).then(() => {
            GrabItem();
        }).catch((error) =>{
            console.log('error in POST', error);
            alert('something wrong in POST');
        });
    }

    //PUT

    //DELETE

    return (
        <section className="App">
            <Header />
    
            <h4>Add Item</h4>

                <form onSubmit={addItem}>
                    <label htmlFor="item-input">Item</label>
                    <input id="item-input" value={itemName} onChange={e => setItemName(e.target.value)} />
                    <label htmlFor="quantity-input">Quantity</label>
                    <input id="quantity-item" value={quantity} onChange={e => setQuantity(e.target.value)} />

                    <button type="submit">Submit</button>

                </form>
            
            <h4>Shopping List</h4>
            <p>

          
            {
            setItemArray.map((item) => (
                <ul key={item.id}>
                  Item: {item.item}      
                </ul>
            ))
        }
          

            </p>
        </section>
    );
}

export default App;