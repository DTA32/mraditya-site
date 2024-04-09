"use client";

import { useState } from "react";

export default function MessageForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        alert("Coming soon");
    };
    return (
        <div className="flex flex-col gap-8 w-full px-4">
            <h1 className="text-2xl text-center">Leave a message</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                <div className="flex gap-4 w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-slate-800 text-white p-4 rounded-2xl w-full"
                        onChange={(e) => setName(e.target.value)}
                        required
                        {...(loading && { disabled: true })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-slate-800 text-white p-4 rounded-2xl w-full"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        {...(loading && { disabled: true })}
                    />
                </div>
                <textarea
                    placeholder="Message"
                    className="bg-slate-800 text-white p-4 rounded-2xl w-full"
                    rows={6}
                    maxLength={240}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    {...(loading && { disabled: true })}
                />
                <button
                    type="submit"
                    className={`text-white p-4 rounded-2xl w-1/2 ${
                        loading ? "bg-slate-950" : "bg-slate-700 hover:bg-slate-600"
                    }`}
                    {...(loading && { disabled: true })}
                >
                    Send
                </button>
            </form>
        </div>
    );
}
