import {useForm} from 'react-hook-form'

import {Form} from "./styles"
import { CalculateContext} from '../../context/calculateContext'
import { useContext } from 'react'


export interface ICalculate {
    amount: number
    installments: number
    mdr: number
    days?: string
}


export const FormCalculator = () => {
    const {calculateData} = useContext(CalculateContext)
    const {handleSubmit, register} = useForm<ICalculate>()

    return(
        <>
        <Form onChange={handleSubmit(calculateData)}>
            <h3>Simule sua Antecipação</h3>  
            <label>Informe o valor da venda*</label>
            <input type="text" id="amount" placeholder="Digite o valor da venda" {...register('amount')}/>

            <label>Em quantas parcelas*</label>
            <input type="text" id="installments" placeholder="Digite o número de parcelas (máx 12)" {...register('installments')}/>

            <label>Informe o percentual de MDR*</label>
            <input type="text" id="mdr" placeholder="Digite a taxa cobrada" {...register('mdr')}/>

            <div className="select-div">
              <select
                id="days"
                {...register("days")}
                className="select-text"
              >
                <option value="">Escolha um período de recebimento</option>
                <option value="1, 15, 30">1, 15, 30</option>
                <option value="15, 30, 45">15, 30, 45</option>
                <option value="1, 15, 30, 45">1, 15, 30, 45</option>
                <option value="15, 30, 60, 90">15, 30, 60, 90</option>
              </select>
            </div>
        </Form>
        </>
    )
}