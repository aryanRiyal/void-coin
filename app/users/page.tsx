"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type TUser = {
    id: number;
    name: string;
    email: string;
};

const UsersPage = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data: TUser[]) => setUsers(data))
            .catch((err) => console.error("Error: " + err));
        setCurrentTime(new Date().toLocaleTimeString());
    }, []);

    return (
        <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex justify-between text-3xl">
                <h1>Users Page</h1>
                <Link href="/" className="underline">
                    <button className="btn btn-link text-xl">Back</button>
                </Link>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <p className="text-2xl font-semibold">{`Page Loaded @${
                    currentTime || " ...Loading Current Time... "
                }`}</p>
                {users.length > 0 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    "Loading Users..."
                )}
            </div>
        </div>
    );
};

export default UsersPage;
