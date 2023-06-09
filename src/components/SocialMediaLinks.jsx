import React from "react";
import Icon from "./Icon";
import joinClassNames from "../helpers/joinClassNames";

export default function SocialMediaLinks({
    className,
    svgClassName,
    alignText = false,
}) {
    return (
        <div className={joinClassNames(
            "flex-centered gap-6 -mr-3",
            className
        )}>
            <a href="https://twitter.com/" className={joinClassNames(
                "cursor-pointer",
                alignText && '-ml-2'
            )}>
                <Icon icon='twitterLogo' className={svgClassName} />
            </a>
            <a href="https://facebook.com/" className="cursor-pointer">
                <Icon icon='facebookLogo' className={svgClassName} />
            </a>
            <a href="https://linkedin.com/" className="cursor-pointer">
                <Icon icon='linkedInLogo' className={svgClassName} />
            </a>
        </div>
    )
}