"use client";

import { useState } from "react";

export default function MessageForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState("");
    const [loading, setLoading] = useState(false);
    let hasSent = "";
    if (typeof window !== "undefined") {
        hasSent = localStorage.getItem("hasSent") || "";
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (hasSent === "true" || hasSent !== "") {
            setNotification("You have already sent a message.");
            setTimeout(() => {
                setNotification("");
            }, 5000);
            return;
        }
        setLoading(true);
        const result = await fetch("https://www.dta32.my.id/api/v2/message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, email: email, content: message }),
        }).then((res) => res.json());
        if (result.status === "success") {
            localStorage.setItem("hasSent", "true");
            setNotification("Message sent successfully.");
            setName("");
            setEmail("");
            setMessage("");
            setTimeout(() => {
                setNotification("");
            }, 5000);
        } else {
            console.error(result.message);
            setNotification("Failed to send message.");
            setTimeout(() => {
                setNotification("");
            }, 5000);
        }
        setLoading(false);
    }
    return (
        <div className="flex flex-col gap-8 w-full">
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
                        value={name}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-slate-800 text-white p-4 rounded-2xl w-full"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        {...(loading && { disabled: true })}
                        value={email}
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
                    value={message}
                />
                {notification && <p className="text-white">{notification}</p>}
                <button
                    type="submit"
                    className={`flex items-center justify-center text-white p-4 rounded-2xl w-1/2 ${
                        loading ? "bg-slate-950" : "bg-slate-700 hover:bg-slate-600"
                    }`}
                    {...(loading && { disabled: true })}
                >
                    {loading && (
                        // spinner from https://tailwindcss.com/docs/animation#spin
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    )}
                    Send
                </button>
            </form>
        </div>
    );
}
