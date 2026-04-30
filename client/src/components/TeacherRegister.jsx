import { useState } from "react";
import { registerTeacher } from "../api/api";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";

const TEACHER_CODE = "1234";

export default function TeacherRegister() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  const handleSubmit = async (form) => {
    try {
      await registerTeacher(form);
      alert("נרשמת בהצלחה");
      navigate("/login");
    } catch (err) {
      alert("שגיאה בהרשמה");
    }
  };

  return (
    <>
      {step === 1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (code === TEACHER_CODE) setStep(2);
            else alert("קוד שגוי");
          }}
        >
          <h2>כניסת מורים</h2>

          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button>כניסה</button>
        </form>
      )}

      {step === 2 && (
        <UserForm
          initialValues={{
            id: "",
            firstName: "",
            lastName: "",
            class_id: "",
          }}
          onSubmit={handleSubmit}
          title="רישום מורה"
        />
      )}
    </>
  );
}