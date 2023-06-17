"use client"

import Link from "next/link";

type ButtonProps = {
    path: string,
    label: string
}

/**
 * This is a `Link` component that allows navigation between pages.
 * In this function, reusing the button will keep the design consistent
 * throughout different pages, also, the params `path` and `label` were also
 * added to make it as modular as possible.
 * @params { path, label } 
 */
export function Button({ path, label }: ButtonProps) {
    return (
        <>
            <Link className="border border-slate-300 text-xl text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={path}>{label}</Link>
        </>
    )
}