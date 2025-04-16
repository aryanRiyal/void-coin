import Link from "next/link";

export default function Home() {
    return (
        <main className="h-full w-full flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl">Hello World!</h1>
            <Link href="/blockchain" className="">
                <button className="btn btn-link text-xl"> Blockchain </button>
            </Link>
        </main>
    );
}
