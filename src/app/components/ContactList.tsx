import ContactCard from "./ContactCard";
import ContactsJSON from "../data/contacts.json";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default function ContactList() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="text-center flex flex-col gap-4">
                <h3 className="text-4xl">Contact</h3>
                <div className="w-full flex justify-center">
                    <p className="max-w-sm">If you have any questions, or interested to collaborate with me, can reach me out via these</p>
                </div>
            </div>
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
