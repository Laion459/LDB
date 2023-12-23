import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 20px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 10px 10px 5px #ccc;
    border-radius: 50px;
`;

const InputArea = styled.div`
    felx-derection: column;
    background-color: #f3f3f3;
    border-radius: 15px;

`;

const Input = styled.input`
    width: 160px;
    padding: 0 10px;
    border: 2px solid #bbb;
    border-radius: 15px;
    height: 40px;
`;

const Label = styled.label`padding: 10px;`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid gray;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;



const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
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
                <Label>Data nascimento</Label>
                <Input name="data_nascimento" type="date"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;