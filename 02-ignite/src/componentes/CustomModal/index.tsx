import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './CustomModal.styles';

interface CustomModalProps {
    isOpen: boolean;
    handleModalClose(): void;
}

Modal.setAppElement('#root')

export function CustomModal({isOpen, handleModalClose}: CustomModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit')
    function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault()
      const payload = {
        title,
        value,
        category,
        type
      }
      api.post('/transactions', payload)
    }
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
       >
        <button type="button" onClick={handleModalClose}>
            <img src={closeImg} alt="Fechar modal" className="react-modal-close"/>
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input 
            placeholder='Titulo'
            value={title} 
            onChange={event => setTitle(event.target.value)}
        />
        <input 
            placeholder='Valor' 
            type='number'
            value={value}
            onChange={event => setValue(Number(event.target.value))}

        />
        <TransactionTypeContainer>
            <RadioBox 
                type="button" 
                onClick={() => setType('deposit')} 
                isActive={type === 'deposit'} 
                activeColor="green"
            >
                <img src={incomeImg} alt='Entrada' />
                <span>Entrada</span>
            </RadioBox>
            <RadioBox 
                type="button" 
                onClick={() => setType('withdraw')} 
                isActive={type === 'withdraw'} 
                activeColor="red"
            >
                <img src={outcomeImg} alt='Saída' />
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>
        <input 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
        </Container>
       </Modal>
    )
}