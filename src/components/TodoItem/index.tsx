type TodoItemProps = {
  todo: string;
  isCompleted: boolean;
};

export default function TodoItem({ todo, isCompleted }: TodoItemProps) {
  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={() => {}} />
      <p>{todo}</p>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
}
