import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
    return (
        <main className="h-full w-full flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl">Hello World!</h1>
            <Link href="/users" className="">
                <button className="btn btn-link text-xl"> Users </button>
            </Link>
            <ProductCard />
        </main>
    );
}
