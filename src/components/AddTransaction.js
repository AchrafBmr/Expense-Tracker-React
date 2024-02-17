import React, { useState , useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
  const { addTransactions } = useContext(GlobalContext)


    const [text , setText] = useState('')
    const [amount , setAmount] = useState('')

    const onSubmit = e => {
      e.preventDefault();

      const newTransactions = {
        id : Math.floor(Math.random() * 100000000),
        text,
        amount : +amount
      }

      addTransactions(newTransactions);
    }


  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} placeholder="Enter text..." onChange={e=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br/>
            (negative - expense, positive - income)</label>
            <input type="number" value={amount} placeholder="Enter amount..." onChange={e=>setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
