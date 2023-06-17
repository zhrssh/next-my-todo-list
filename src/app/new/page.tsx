import { prisma } from "@/db";
import { Button } from "../components/button.component";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string") {
        throw new Error("Invalid title");
    }

    await prisma.todo.create({ data: { title, complete: false } });
    redirect("/")
}

export default function Page() {
    return (
        <>
            <header className="flex justify-between items-center px-4 py-4">
                <h1 className="text-2xl font-bold">New</h1>
            </header>
            <form className="flex gap-2 flex-col" action={createTodo}>
                <input type="text"
                    name="title"
                    className="border border-slate-500 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-400" />
                <div className="flex gap-1 justify-end my-2">
                    <Button path="/" label="Cancel" />
                    <button type="submit" className="border border-slate-300 text-xl text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
                </div>
            </form>
        </>
    );
}
