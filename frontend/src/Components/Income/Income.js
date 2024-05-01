import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import { useThemeContext } from '../../context/ThemeContext';

function Income() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, []);

    const {
        currentColor,
      } = useThemeContext();
    
    return (
            <div className='w-full'>

                <h2 style={{color:currentColor}} className="w-full rounded-3xl p-10 border-2 mb-10 shadow-sm font-bold text-xl lg:text-3xl">Нийт орлого: <span>₮{totalIncome()}</span></h2>
                <div className="flex justify-between flex-wrap gap-10">
                    <div className="flex-1">
                        <Form />
                    </div>
                    <div className="flex-1">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
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
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </div>
    )
}


export default Income