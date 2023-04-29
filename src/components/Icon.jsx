import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Background } from '../images/background.svg';
import { ReactComponent as TwitterLogo } from '../images/socialMedia/twitterLogo.svg';
import { ReactComponent as FacebookLogo } from '../images/socialMedia/facebookLogo.svg';
import { ReactComponent as LinkedInLogo } from '../images/socialMedia/linkedInLogo.svg';

export const globalIcons = {
    logo: <Logo />,
    twitterLogo: <TwitterLogo />,
    facebookLogo: <FacebookLogo />,
    linkedInLogo: <LinkedInLogo />,

    background: <Background className="w-screen h-full" />,
}

export default function Icon ({
    icon,
    className
}) {
    return (
        <div className={className}>
            {globalIcons[icon]}
        </div>
    )
}