import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';
import { useThemeContext } from '../../context/ThemeContext';

function Expenses() {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, []);

    const {
        currentColor,
      } = useThemeContext();
    
    return (
            <div className='w-full'>
                <h2 style={{color:currentColor}} className="w-full rounded-3xl p-10 border-2 mb-10 shadow-sm font-bold text-xl lg:text-3xl">нийт зардал: <span>₮{totalExpenses()}</span></h2>
                <div className="flex justify-between flex-wrap gap-10">
                    <div className="flex-1">
                        <ExpenseForm />
                    </div>
                    <div className="flex-1">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Expenses