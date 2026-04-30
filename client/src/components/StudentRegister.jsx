import { registerStudent } from "../api/api";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";

export default function StudentRegister() {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      await registerStudent(form);

      alert("נרשמת בהצלחה");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("שגיאה בהרשמה");
    }
  };

  return (
    <UserForm
      initialValues={{
        id: "",
        firstName: "",
        lastName: "",
        class_id: "",
      }}
      onSubmit={handleSubmit}
      title="רישום תלמיד"
    />
  );
}