import { createContext, ReactNode, useState } from "react";
import { ICalculate } from "../components/Form";
import api from "../services";


interface ICalculateProviderProps{
    children: ReactNode
}

interface ICalculateContext {
    calculateData(inputs: ICalculate): void
    values: any
}


export const CalculateContext = createContext<ICalculateContext>({} as ICalculateContext)

export const CalculateProvider = ({children}: ICalculateProviderProps)=> {
    const [values, setValues] = useState([])
   
    async function calculateData(inputs: ICalculate){
        const {amount, installments, mdr, days} = inputs
        let newArr = days!.split(', ')

        const newInput = {amount, installments, mdr, days: newArr}
        const newInput2 = {amount, installments, mdr}

        if(newArr.length > 0){
            if(inputs.amount >= 1000 && inputs.installments <= 12 && inputs.installments > 0 && inputs.mdr >0 && newArr.length > 0){
                try {
                    await api.post("", newInput)
                    .then((response) => {
                        setValues(response.data)
                    })
                } catch (error) {
                    console.error(error)
                }
            }
        } else {
            if(inputs.amount >= 1000 && inputs.installments <= 12 && inputs.installments > 0 && inputs.mdr >0 && newArr.length > 0){
                try {
                    await api.post("", newInput2)
                    .then((response) => {
                        setValues(response.data)
                    })
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
   
    return(
        <CalculateContext.Provider value={{calculateData, values}}>
            {children}
        </CalculateContext.Provider>
    )
}

