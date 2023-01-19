import {useForm} from 'react-hook-form'

import {Form} from "./styles"
import { CalculateContext} from '../../context/calculateContext'
import { useContext } from 'react'


export interface ICalculate {
    amount: number
    installments: number
    mdr: number
}


export const FormCalculator = () => {
    const {calculateData} = useContext(CalculateContext)
    const {handleSubmit, register} = useForm<ICalculate>()

    return(
        <>
        <Form onChange={handleSubmit(calculateData)}>
            <h3>Simule sua Antecipação</h3>  
            <span>Informe o valor da venda*</span>
            <input type="text" id="amount" placeholder="Digite o valor da venda" {...register('amount')}/>

            <span>Em quantas parcelas*</span>
            <input type="text" id="installments" placeholder="Digite o número de parcelas (máx 12)" {...register('installments')}/>

            <span>Informe o percentual de MDR*</span>
            <input type="text" id="mdr" placeholder="Digite a taxa cobrada" {...register('mdr')}/>
        </Form>
        </>
    )
}