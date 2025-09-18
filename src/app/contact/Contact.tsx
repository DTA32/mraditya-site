import ContactList from "./ContactList";
import MessageForm from "./MessageForm";

export default function Contact() {
    return (
        <section className="bg-slate-900 py-12 flex justify-center text-neutral-100 flex-1 items-center" id="contact">
            <div className="max-w-screen-xl flex flex-col gap-10 md:flex-row mx-8">
                <ContactList />
                <MessageForm />
            </div>
        </section>
    );
}
