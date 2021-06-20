import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer Logo" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/59853942?v=4"
            alt="Abner Willys"
          />

          <div>
            <strong>abner-starkasty/Foodfy</strong>
            <p>A company of culinary recipes!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
