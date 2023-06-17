import { prisma } from "@/db";
import { Button } from "./components/button.component";
import { TodoItem } from "./components/todo-item.component";

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">My Todo List</h1>
        <Button path="/new" label="New" />
      </header>
      <div className="my-4 px-8 py-4">
        <ul className="pl-4">
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>

    </>
  );
}
