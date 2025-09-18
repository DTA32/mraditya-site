import { IconName, IconProp, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab);
import { ContactCardProps } from "../types/ContactCard";

export default function ContactCard(props: ContactCardProps) {
    let icon: JSX.Element;
    if (props.platform === "Email") {
        icon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
    } else {
        icon = <FontAwesomeIcon icon={["fab", props.icon]} size="2x" />;
    }
    const body: JSX.Element = (
        <div className="flex flex-row gap-4 items-center hover:bg-slate-700/50 p-4 rounded-2xl">
            <div>{icon}</div>
            {props.type == 1 && (
                <div>
                    {/* <p className="text-gray-300">{props.platform}</p> */}
                    <p className="text-ellipsis overflow-hidden">{props.username}</p>
                </div>
            )}
        </div>
    );

    if (props.link.length > 0) {
        return (
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="group">
                {body}
            </a>
        );
    }
    return body;
}
