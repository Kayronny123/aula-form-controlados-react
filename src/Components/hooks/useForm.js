import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { name, idade, email, profissao, value } = event.target;
    setForm({
      ...form,
      [name]: value,
      [idade]: value,
      [email]: value,
      [profissao]: value
    });
  };
  return [form, onChange];
};
export default useForm;
