import React from "react";

type UpdatingInputProps = {
  updateInput: string;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTodoInputUpdate: () => void;
};

export function UpdatingInput({
  updateInput,
  setIsUpdating,
  handleUpdateInput,
  handleTodoInputUpdate,
}: UpdatingInputProps) {
  return (
    <>
      <input
        data-testid="modify-input"
        value={updateInput}
        onChange={handleUpdateInput}
      />
      <button data-testid="submit-button" onClick={handleTodoInputUpdate}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={() => setIsUpdating(false)}>
        취소
      </button>
    </>
  );
}

export default React.memo(UpdatingInput);
