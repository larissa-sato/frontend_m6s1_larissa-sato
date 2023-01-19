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

        if(inputs.amount >= 1000 && inputs.installments <= 12 && inputs.installments > 0 && inputs.mdr >0 ){
            try {
                await api.post("", inputs)
                .then((response) => {
                    setValues(response.data)
                })
            } catch (error) {
                console.error(error)
            }
        }
    }
   
    return(
        <CalculateContext.Provider value={{calculateData, values}}>
            {children}
        </CalculateContext.Provider>
    )
}

