import {twMerge} from "tailwind-merge";

interface SiteButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
}

export const SiteButton = (props: SiteButtonProps) => {
  return (
    <button
      className={twMerge("text-white bg-primary p-2 rounded disabled:opacity-50 hover:opacity-80", props.className)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}
