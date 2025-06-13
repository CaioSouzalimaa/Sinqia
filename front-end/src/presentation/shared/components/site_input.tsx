import {twMerge} from "tailwind-merge";
import {InputHTMLAttributes} from "react";

interface SiteInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export const SiteInput = (props: SiteInputProps) => {
  return (
    <div className={"w-full"}>
      {props.title && <p className="font-medium text-primary">{`${props.title} ${props.required ? '*' : ''}`}</p>}
      <input
        className={
          twMerge("w-full h-11 px-2.5 py-4 rounded border border-line-color text-base font-light",
            props.className)}
        type={props.type}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        maxLength={props.maxLength}
        disabled={props.disabled}
      />
    </div>
  )
}
