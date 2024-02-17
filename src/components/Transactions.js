import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export default function Transactions({transactions}) {
    const { deleteTransactions } = useContext(GlobalContext)


    const sign = transactions.amount < 0 ? '-' : '+';
  return (
    <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
        {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
        <button onClick={() => {deleteTransactions(transactions.id)}} className="delete-btn">x</button>
    </li>
  )
}
