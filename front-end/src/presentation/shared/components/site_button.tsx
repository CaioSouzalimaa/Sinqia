import {twMerge} from "tailwind-merge";

interface SiteButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

export const SiteButton = (props: SiteButtonProps) => {
  return (
    <button
      className={twMerge("text-white bg-dark-blue p-2 rounded hover:opacity-80", props.className)}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
