import React, {useState} from "react";
import Icon from "../Icon";
import {headerLinks} from "../../constants/headerLinks";
import SocialMediaLinks from "../SocialMediaLinks";
import joinClassNames from "../../helpers/joinClassNames";

export default function Header () {
    const [isHeader, updateHeader] = useState(false);

    return (
        <section className="w-full relative z-50 flex justify-between lg:justify-center items-center pt-[21px] lg:pt-0 pl-8 pr-6">
            <header className={joinClassNames(
                isHeader ? 'popup-no-scroll block w-screen h-screen bg-black' : 'hidden',
                "lg:!flex justify-between items-center lg:h-[156px] lg:px-5 xl:px-0 lg:w-[63vw]"
            )}>
                <div className="h-full -mt-28 lg:mt-0 lg:h-12 flex-centered lg:justify-between xl:justify-center flex-col lg:flex-row text-white font-normal font-graphic gap-16 lg:gap-[41px]">
                    {headerLinks.map(({label, link, index}) => (
                        <a href={link} key={`${label}${index}`} className="leading-7 tracking-[0.2px] text-[15px]">
                            {label}
                        </a>
                    ))}
                </div>
                <SocialMediaLinks svgClassName='fill-white' className='-mt-16 lg:mt-0 lg:mr-0' />
            </header>
            <Icon
                className={joinClassNames(
                    "lg:absolute top-20 largeHeader:top-12"
                )}
                icon='logo'
            />
            <button
                className='lg:hidden right-4 top-[52px] z-[100]'
                onClick={() => updateHeader(prevState => !prevState)}
            >
                <Icon icon='headerButton' />
            </button>
        </section>
    )
}