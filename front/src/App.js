import GlobalStyle from "./style/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
    const [clientes, setClientes] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getClientes = async () => {
        try {
            const res = await axios.get("http://localhost:3333/clientes");
            console.log(res);
            setClientes(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    };
    useEffect(() => {
        getClientes();
    });
  return (
      <>
        <Container>
          <Title>CLIENTES</Title>
          <Form onEdit={onEdit} setOnEdit={setOnEdit} getClientes={getClientes} />
          <Grid clientes={clientes}/>
        </Container>
        <GlobalStyle />
      </>
  );
}

export default App;