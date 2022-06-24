import { useEffect } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { api } from '../../services/api';
import { Container } from "./Summary.styles";

export function Summary(){
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    },[])
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$4.555,75</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong> - R$4.555,75</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$4.555,75</strong>
            </div>
        </Container>
        
    )
}