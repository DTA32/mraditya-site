import { TechStack } from "../types/TechStack";
import Image from "next/image";

const sizeMapping = {
  xs: {
    icon: 12,
    internalIcon: 16,
  },
  sm: {
    icon: 18,
    internalIcon: 24,
  },
  md: {
    icon: 24,
    internalIcon: 32,
  },
};

export default function TechStackPill(props: {
  data: TechStack;
  type: 1 | 2;
  size?: "xs" | "sm" | "md";
}) {
  const size = props.size ? props.size : "md";
  const classType =
    props.type === 1
      ? "border rounded-full text-white"
      : "bg-slate-300 text-slate-950 rounded-lg";
  const icon: JSX.Element =
    props.data.iconVar === "internal" ? (
      <Image
        src={`/icon/${props.data.icon.toLowerCase()}.svg`}
        alt="icon"
        width={sizeMapping[size].internalIcon}
        height={sizeMapping[size].internalIcon}
        className={`mx-auto min-w-[${sizeMapping[size].internalIcon}px] h-full ${props.type === 2 ? "brightness-0" : ""}`}
      />
    ) : (
      <Image
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.data.icon}/${props.data.icon}-${props.data.iconVar}.svg`}
        alt={`${props.data.name} icon`}
        width={sizeMapping[size].icon}
        height={sizeMapping[size].icon}
        unoptimized={true}
        className={`${
          props.type === 1 ? "brightness-0 invert" : "brightness-0"
        }`}
      />
    );
  return (
    <div
      key={props.data.icon}
      className={`flex flex-row gap-2 items-center min-w-[64px] max-h-[24px] sm:min-w-[90px] w-max sm:max-h-[28px] select-none px-3 py-1 ${classType}`}
    >
      {icon}
      <span className={`text-${size}`}>{props.data.name}</span>
    </div>
  );
}
