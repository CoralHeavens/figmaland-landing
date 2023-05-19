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
                'common-button max-w-[240px] mt-24 lg:mt-22.5 px-[62px] py-4',
                className
            )}>
            {label}
        </a>
    )
}