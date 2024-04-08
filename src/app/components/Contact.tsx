import ContactList from "./ContactList";
import MessageForm from "./MessageForm";

export default function Contact() {
    return (
        <section className="bg-slate-900 py-12 flex flex-col gap-8 md:flex-row text-neutral-100" id="contact">
            <ContactList />
            <MessageForm />
        </section>
    );
}
