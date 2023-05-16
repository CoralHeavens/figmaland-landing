import React from "react";
import Icon from "./Icon";
import joinClassNames from "../helpers/joinClassNames";

export default function SocialMediaLinks({
    className
}) {
    return (
        <div className={joinClassNames(
            "flex-centered gap-6 -mr-3",
            className
        )}>
            <a href="https://twitter.com/" className="cursor-pointer">
                <Icon icon='twitterLogo' />
            </a>
            <a href="https://facebook.com/" className="cursor-pointer">
                <Icon icon='facebookLogo' />
            </a>
            <a href="https://linkedin.com/" className="cursor-pointer">
                <Icon icon='linkedInLogo' />
            </a>
        </div>
    )
}