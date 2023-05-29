import React, {useState} from "react";
import Icon from "../Icon";
import {headerLinks} from "../../constants/headerLinks";
import SocialMediaLinks from "../SocialMediaLinks";
import joinClassNames from "../../helpers/joinClassNames";

export default function Header () {
    const [isHeader, updateHeader] = useState(false);

    return (
        <section className="w-full flex-centered relative z-50">
            <Icon
                className={joinClassNames(
                    "lg:m-0 top-[31px] lg:top-[53px] lg:flex-centered absolute pointer-events-none h-[156px] left-[25px] lg:left-[46%]"
                )}
                icon='logo'
            />
            <header className={joinClassNames(
                isHeader ? 'popup-no-scroll block w-screen h-screen bg-black' : 'hidden',
                "lg:!flex justify-between items-center lg:h-[156px] lg:w-full lg:px-5 xl:px-0 xl:w-[63vw]"
            )}>
                <div className="h-full -mt-28 lg:mt-0 lg:h-12 flex-centered lg:justify-between xl:justify-center flex-col lg:flex-row text-white font-normal font-graphic gap-16 lg:gap-[41px]">
                    {headerLinks.map(({label, link, index}) => (
                        <a href={link} key={`${label}${index}`} className="leading-7 tracking-[0.2px] text-[15px]">
                            {label}
                        </a>
                    ))}
                </div>
                <SocialMediaLinks svgClassName='fill-white' className='-mt-16 lg:mt-0' />
            </header>
            <button
                className='lg:hidden absolute right-4 top-[44px] z-[100]'
                onClick={() => updateHeader(prevState => !prevState)}
            >
                <Icon icon='headerButton' />
            </button>
        </section>
    )
}