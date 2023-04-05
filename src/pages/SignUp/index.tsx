import useCheckInput from "@/hooks/useCheckInput";
import useInput from "@/hooks/useInput";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [formDisabled, setFormDisabled] = useState(true);
  const [id, idHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const idErrorState = useCheckInput(id, /.*@.*/g);
  const passwordErrorState = useCheckInput(password, /^.{8,}$/g);
  useEffect(() => {
    if (!idErrorState && !passwordErrorState) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [idErrorState, passwordErrorState]);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            data-testid="email-input"
            type="text"
            placeholder="이메일을 입력하세요."
            value={id}
            onChange={idHandler}
          />
          <p>{idErrorState && "@를 포함해야 합니다."}</p>
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
        <button data-testid="signup-button" disabled={formDisabled}>
          회원가입
        </button>
      </form>
    </div>
  );
}
