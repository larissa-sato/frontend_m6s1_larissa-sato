import Form from "./styles"

const FormCalculator = () => {
    return(

        <Form>
            <h3>Simule sua Antecipação</h3>  
            <span>Informe o valor da venda*</span>
            <input type="text" id="amount" placeholder="Valor da venda" />

            <span>Em quantas parcelas*</span>
            <input type="text" id="installments" placeholder="Número de parcelas" />

            <span>Informe o percentual de MDR*</span>
            <input type="text" id="mdr"/>
        </Form>
    )
}

export default FormCalculator