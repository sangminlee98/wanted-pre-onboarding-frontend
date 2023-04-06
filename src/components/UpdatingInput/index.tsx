import React, { useEffect, useRef } from "react";
import onKeydown from "@/utils/onKeydown";
import styles from "./styles.module.scss";

type UpdatingInputProps = {
  updateInput: string;
  handleUpdateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTodoInputUpdate: () => void;
  handleCancle: () => void;
};

export function UpdatingInput({
  updateInput,
  handleUpdateInput,
  handleTodoInputUpdate,
  handleCancle,
}: UpdatingInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // keydown 이벤트가 일어날 때 실행할 핸들러
  const keydownHandler = () => {
    handleTodoInputUpdate();
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        className={styles.updateInput}
        data-testid="modify-input"
        value={updateInput}
        onChange={handleUpdateInput}
        onKeyDown={(e) => onKeydown(e, keydownHandler)}
      />
      <div className={styles.buttonWrapper}>
        <button data-testid="submit-button" onClick={handleTodoInputUpdate}>
          제출
        </button>
        <button data-testid="cancel-button" onClick={handleCancle}>
          취소
        </button>
      </div>
    </div>
  );
}

export default React.memo(UpdatingInput);
