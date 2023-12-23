import React from 'react';
import GlobalStyle from './style/global.js';
import styled from 'styled-components';
import Grid from "./components/Grid"
import { useEffect, useState } from 'react';
import Form from './components/Form.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try{
      const res = await axios.get("http://localhost:5002/usuarios");
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
    }catch (error){
      toast.error(error+ "aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>USUARIOS</Title>
        <Form />
        <Grid users={users}/>
      </Container>
      
      <ToastContainer autoClose={3001} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
