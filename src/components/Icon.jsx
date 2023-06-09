import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';

import { ReactComponent as TwitterLogo } from '../images/socialMedia/twitterLogo.svg';
import { ReactComponent as FacebookLogo } from '../images/socialMedia/facebookLogo.svg';
import { ReactComponent as LinkedInLogo } from '../images/socialMedia/linkedInLogo.svg';

import { ReactComponent as FeatureOpen } from '../images/features/openType.svg';
import { ReactComponent as FeatureData } from '../images/features/realData.svg';
import { ReactComponent as FeatureFast } from '../images/features/fastWay.svg';

import { ReactComponent as Play } from '../images/play.svg';

import { ReactComponent as Laptop } from '../images/laptop.svg';

import { ReactComponent as Letter } from "../images/newLetter.svg";

import { ReactComponent as Google } from '../images/logos/google.svg';
import { ReactComponent as Amazon } from '../images/logos/amazon.svg';
import { ReactComponent as Microsoft } from '../images/logos/microsoft.svg';
import { ReactComponent as Uber } from '../images/logos/uber.svg';
import { ReactComponent as Dropbox } from '../images/logos/dropbox.svg';

import { ReactComponent as Ibm } from '../images/logos/ibm.svg';
import { ReactComponent as Avatar } from '../images/avatar.svg';

import { ReactComponent as GPS } from '../images/gps.svg';
import { ReactComponent as SmallGPS } from "../images/smallGPS.svg";
import { ReactComponent as Mobile } from '../images/mobile.svg';
import { ReactComponent as Mail } from "../images/mail.svg";

import { ReactComponent as Map } from "../images/map.svg";

import { ReactComponent as HeaderButton } from "../images/headerButton.svg";
import { ReactComponent as MobilePlay } from "../images/mobilePlay.svg";

export const globalIcons = {
    logo: <Logo />,
    twitterLogo: <TwitterLogo />,
    facebookLogo: <FacebookLogo />,
    linkedInLogo: <LinkedInLogo />,

    openFeature: <FeatureOpen />,
    dataFeature: <FeatureData />,
    fastFeature: <FeatureFast />,

    play: <Play />,

    laptop: <Laptop />,

    letter: <Letter />,

    google: <Google />,
    amazon: <Amazon />,
    microsoft: <Microsoft />,
    uber: <Uber />,
    dropbox: <Dropbox />,

    ibm: <Ibm />,
    avatar: <Avatar />,

    gps: <GPS />,
    smallGps: <SmallGPS />,
    mobile: <Mobile />,
    mail: <Mail />,

    map: <Map />,

    headerButton: <HeaderButton />,
    mobilePlay: <MobilePlay />,
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