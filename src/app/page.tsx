import { prisma } from "@/db";
import { Button } from "./components/button.component";
import { TodoItem } from "./components/todo-item.component";

/**
 * This function updates the `TodoItem` in the prisma database.
 * It updates the `complete` to whatever boolean state it is given.
 * This is also used as a callback function to the `TodoItem` component.
 * @param id 
 * @param complete 
 */
async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}

/**
 * `Home()` is the first page that the users will see when accessing
 * the root of the webserver or the "/".
 * 
 * The `<header>` contains `My Todo List`, which is the title of this project
 * and the `New` button to create new todo items.
 * 
 * It is an asynchronous function as it fetches data from the database.
 */
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
