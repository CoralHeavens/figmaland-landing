import React from "react";
import joinClassNames from "../helpers/joinClassNames";

export default function Button({
    label,
    className
}) {
    return (
        <a 
            href={window.origin} 
            className={joinClassNames(
                'mt-22.5 text-white px-[62px] py-4 bg-primary font-normal text-xl leading-5 rounded-[35px]',
                className
            )}>
            {label}
        </a>
    )
}