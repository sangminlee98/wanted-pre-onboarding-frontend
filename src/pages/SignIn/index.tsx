import useCheckInput from "@/hooks/useCheckInput";
import useInput from "@/hooks/useInput";
import { SignInAPI } from "@/services/user";
import { Form } from "@/types/form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();
  const [formDisabled, setFormDisabled] = useState(true);
  const [email, emailHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const emailErrorState = useCheckInput(email, /.*@.*/g);
  const passwordErrorState = useCheckInput(password, /^.{8,}$/g);
  const handleSubmit = async () => {
    const form: Form = {
      email,
      password,
    };
    const response = await SignInAPI(form);
    if (response) {
      navigate("/todo");
    }
  };

  useEffect(() => {
    if (!emailErrorState && !passwordErrorState) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [emailErrorState, passwordErrorState]);
  return (
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          data-testid="email-input"
          type="text"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={emailHandler}
        />
        <p>{emailErrorState && "@를 포함해야 합니다."}</p>
      </div>
      <div>
        <label htmlFor="password">패스워드</label>
        <input
          id="password"
          data-testid="password-input"
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={passwordHandler}
        />
        <p>{passwordErrorState && "8자 이상이어야 합니다."}</p>
      </div>
      <button
        type="button"
        data-testid="signin-button"
        onClick={handleSubmit}
        disabled={formDisabled}
      >
        로그인
      </button>
    </div>
  );
}
