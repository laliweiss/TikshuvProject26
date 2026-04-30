import { useState } from "react";

export default function UserForm({ initialValues, onSubmit, title, children }) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>

      <input name="id" placeholder="תז" value={form.id} onChange={handleChange} />
      <input name="firstName" placeholder="שם" value={form.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="משפחה" value={form.lastName} onChange={handleChange} />
      <input name="class_id" placeholder="כיתה" value={form.class_id} onChange={handleChange} />

      {children}

      <button type="submit">הרשמה</button>
    </form>
  );
}