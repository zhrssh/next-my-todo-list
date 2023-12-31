"use client"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

/**
 * This is the component that displays the full todo item with
 * checkbox. The data it receives come from the database queried by
 * prisma. It has `<li>` tag as it is assumed as part of an unordered list.
 * @params { string, string, boolean, callback } 
 */
export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    return (
        <li className="flex gap-2 items-center text-xl">
            <input id={id} type="checkbox"
                className="cursor-pointer peer"
                defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)} />
            <label htmlFor={id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-700">{title}</label>
        </li>
    )
}