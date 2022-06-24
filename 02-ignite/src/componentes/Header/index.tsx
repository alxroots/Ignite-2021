import logoImg from '../../assets/logo.svg'
import { Container, Content } from './Header.styles'

interface HeaderProps {
    handleModalOpen(): void;
}
export function Header({handleModalOpen}: HeaderProps) {
    return (
       <Container>
        <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleModalOpen}>
            Nova transação
        </button>
        </Content>
       </Container>
    )
}