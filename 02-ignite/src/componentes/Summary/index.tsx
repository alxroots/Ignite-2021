import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactionContext } from '../../context/TransactionsContext';
import { Container } from "./Summary.styles";

export function Summary(){
    const { transactions } = useTransactionContext();

    const summaryResults = transactions.reduce((acc, transaction) => {
            if(transaction.type === "deposit") {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount
            }
            return acc
    }, { deposits: 0, withdraws: 0, total: 0})

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summaryResults.deposits)
                }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>
                - {
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summaryResults.withdraws)
                }
                </strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>
                {
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summaryResults.total)
                }
                </strong>
            </div>
        </Container>
        
    )
}