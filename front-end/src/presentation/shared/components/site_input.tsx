import {twMerge} from "tailwind-merge";
import {ChangeEvent} from "react";

interface SiteInputProps {
  placeholder: string;
  type: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export const SiteInput = (props: SiteInputProps) => {
  return (
    <input
      className={
        twMerge("w-full h-11 px-2.5 py-4 rounded border border-line-color text-base font-light",
          props.className)}
      type={props.type}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}
