import React, {useState} from "react";
import Icon from "../Icon";
import {headerLinks} from "../../constants/headerLinks";
import SocialMediaLinks from "../SocialMediaLinks";
import joinClassNames from "../../helpers/joinClassNames";

export default function Header ({
    isMobile
}) {
    const [isHeader, updateHeader] = useState(false);

    return (
        <section className="w-full flex-centered relative">
            <Icon
                className={joinClassNames(
                    "lg:m-0 top-[31px] lg:top-[53px] lg:flex-centered absolute w-full lg:w-fit pointer-events-none h-[156px]",
                    isMobile && 'left-[25px]'
                )}
                icon='logo'
            />
            <header className={joinClassNames(
                isMobile && isHeader ? 'popup-no-scroll block w-screen h-screen z-50 bg-black' : 'hidden',
                "lg:!flex justify-between items-center lg:h-[156px] lg:w-[63vw]"
            )}>
                <div className="h-full -mt-28 lg:mt-0 lg:h-12 flex-centered flex-col lg:flex-row text-white font-normal font-graphic gap-16 lg:gap-[41px]">
                    {headerLinks.map(({label, link, index}) => (
                        <a href={link} key={`${label}${index}`} className="leading-7 tracking-[0.2px] text-[15px]">
                            {label}
                        </a>
                    ))}
                </div>
                <SocialMediaLinks svgClassName='fill-white' className='-mt-16 lg:mt-0' />
            </header>
            <button
                className='lg:hidden absolute right-4 top-[44px] z-[51]'
                onClick={() => updateHeader(prevState => !prevState)}
            >
                <Icon icon='headerButton' />
            </button>
        </section>
    )
}