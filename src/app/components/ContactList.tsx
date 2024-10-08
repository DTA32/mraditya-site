import ContactCard from "./ContactCard";
import ContactsJSON from "../data/contacts.json";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default function ContactList() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <h1 className="text-4xl text-center">Contact</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-2">
                    {ContactsJSON.map((contact) => (
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
        </div>
    );
}
