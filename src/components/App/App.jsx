import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import axios from 'axios';
import './App.css';


function App () {

    //VARIABLES

    let [itemName, setItemName] = useState('');
    let [quantity, setQuantity] = useState('');
    let [unit, setUnit] = useState('');
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

    const addItem = () => {
        axios.post('/api/cart', {
            item: itemName,
            quantity: quantity,
            unit: unit
        }).then(() => {
            GrabItem();
        }).catch((error) =>{
            console.log('error in POST', error);
            alert('something wrong in POST');
        });
    }

    //PUT

    const purchasedItem = (id) => {
        console.log('The ID to purchase', id);
        axios.put(`/api/cart/${id}`).then(response => {
            console.log('Back from update');
            GrabItem();
        }).catch((error) =>{
            console.log('error in PUT', error);
            alert('something wrong in PUT');
        })
        
    }

    //DELETE

    const deleteItem = (id) => {
        console.log('DELETE!');
        axios.delete(`/api/cart/${id}`).then
        (response => {
            console.log('Back from deletion');
            GrabItem();
        }).catch(error => {
            console.log('error in D', error);
            alert('something wrong in DELETE');
        })
    }

    return (
        <section className="App">
            <Header />
    
            <h4>Add Item</h4>

                <form onSubmit={addItem}>
                    <label htmlFor="item-input">Item</label>
                    <input id="item-input" value={itemName} onChange={e => setItemName(e.target.value)} />
                    <label htmlFor="quantity-input">Quantity</label>
                    <input id="quantity-item" value={quantity} onChange={e => setQuantity(e.target.value)} />
                    <label htmlFor="unit-input">Unit</label>
                    <input id="item-unit" value={unit} onChange={e => setUnit(e.target.value)} />

                    <button type="submit">Submit</button>

                </form>
            
            <h4>Shopping List</h4>

        <ul>
        {
            itemArray.map((item) => (
                <li key={item.id}>
                    <p>Item: {item.item}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Unit: {item.unit}</p>
                    {
                        item.purchased === false ? (
                            <div>
                                <button onClick={() => purchasedItem(item.id)}>Purchase</button>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </div>
                        ) : (
                            <p>PURCHASED!</p>
                        )
                    }
                </li>
            ))
        }
        </ul>  
        </section>
    );
}

export default App;