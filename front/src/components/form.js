import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({getClientes}) => {
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cliente = ref.current;

        if (
            !cliente.nome.value ||
            !cliente.email.value ||
            !cliente.telefone.value ||
            !cliente.coordenada.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        await axios
            .post("http://localhost:3333/clientes", {
                nome: cliente.nome.value,
                email: cliente.email.value,
                fone: cliente.telefone.value,
                coordenada: cliente.coordenada.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));

        cliente.nome.value = "";
        cliente.email.value = "";
        cliente.telefone.value = "";
        cliente.coordenada.value = "";

        getClientes();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="telefone"/>
            </InputArea>
            <InputArea>
                <Label>Coordenada</Label>
                <Input name="coordenada" type="text" />
            </InputArea>
        <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};


export default Form;