import ContactCard from "./ContactCard";
import ContactsJSON from "../data/contacts.json";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default function Contact() {
  return (
    <section
      className="bg-slate-900 py-12 flex flex-col gap-8 text-white"
      id="contact"
    >
      <h1 className="text-4xl text-center">Contact</h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center px-12 gap-x-16 gap-y-2">
          {ContactsJSON.top.map((contact) => (
            <ContactCard
              key={contact.platform}
              icon={contact.icon as IconName}
              platform={contact.platform}
              username={contact.username}
              link={contact.link}
              type={0}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center px-12 gap-x-16 gap-y-2">
          {ContactsJSON.bottom.map((contact) => (
            <ContactCard
              key={contact.platform}
              icon={contact.icon as IconName}
              platform={contact.platform}
              username={contact.username}
              link={contact.link}
              type={1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
