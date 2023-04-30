import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Background } from '../images/background.svg';

import { ReactComponent as TwitterLogo } from '../images/socialMedia/twitterLogo.svg';
import { ReactComponent as FacebookLogo } from '../images/socialMedia/facebookLogo.svg';
import { ReactComponent as LinkedInLogo } from '../images/socialMedia/linkedInLogo.svg';

import { ReactComponent as FeatureOpen } from '../images/features/openType.svg';
import { ReactComponent as FeatureData } from '../images/features/realData.svg';
import { ReactComponent as FeatureFast } from '../images/features/fastWay.svg';

import { ReactComponent as Player } from '../images/player.svg';
import { ReactComponent as Play } from '../images/play.svg';

export const globalIcons = {
    logo: <Logo />,
    twitterLogo: <TwitterLogo />,
    facebookLogo: <FacebookLogo />,
    linkedInLogo: <LinkedInLogo />,

    openFeature: <FeatureOpen />,
    dataFeature: <FeatureData />,
    fastFeature: <FeatureFast />,

    background: <Background className="w-screen h-full" />,

    player: <Player />,
    play: <Play />,
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