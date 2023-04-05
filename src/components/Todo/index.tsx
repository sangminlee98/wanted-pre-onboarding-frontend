type TodoProps = {
  todo: string;
  isCompleted: boolean;
};

export default function Todo({ todo, isCompleted }: TodoProps) {
  return (
    <li>
      <input type="checkbox" checked={isCompleted} />
      <p>{todo}</p>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
}
