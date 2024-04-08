"use client";

export default function MessageForm() {
    return (
        <div className="flex flex-col gap-8 w-full px-4">
            <h1 className="text-2xl text-center">Leave a message</h1>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4 w-full">
                    <input type="text" placeholder="Name" className="bg-slate-800 text-white p-4 rounded-2xl w-full" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-slate-800 text-white p-4 rounded-2xl w-full"
                    />
                </div>
                <textarea
                    placeholder="Message"
                    className="bg-slate-800 text-white p-4 rounded-2xl w-full"
                    rows={6}
                    maxLength={240}
                />
                <button
                    onClick={() => {
                        alert("Coming soon");
                    }}
                    className="bg-slate-700 text-white p-4 rounded-2xl hover:bg-slate-600 w-1/2"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
