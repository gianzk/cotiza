import { useState } from "react";

export const useForm = (initState) => {
  const [form, setForm] = useState(initState);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return {
    form,
    handleChangeForm,
  };
};
