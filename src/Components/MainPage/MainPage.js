import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";
import useForm from "../hooks/useForm";

function MainPage() {
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

  // exercicios 1
  // const [formulario,setFormulario] = useState({nome:"", idade:"", email:""})
  // exercicios2
  // const onChangeInputs = (event)=>{
  //   const {name, idade,email, value} = event.target;
  //   setFormulario({...formulario, [name]: value, [idade]: value, [email]:value})
  // }
  // exercicios 3
  const [form, onChange] = useForm({
    nome: "",
    idade: "",
    email: "",
    profissao: ""
  });

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault();

    // console.log(`nome: ${nome}, idade: ${idade}, e-mail: ${email} `)
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {/* exercicio 1 e 3 */}
      <Form onSubmit={handleClick} required>
        <label htmlFor="nome">Nome:</label>
        <Input id="nome" type="text" value={form.name} onChange={onChange} />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          type="number"
          value={form.idade}
          onChange={onChange}
        />

        <label htmlFor="email">E-mail:</label>
        <Input id="email" type="email" value={form.email} onChange={onChange} />
        <label htmlFor="profissao">Profissão:</label>
        <Input
          id="profissao"
          required
          value={form.profissao}
          onChange={onChange}
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
