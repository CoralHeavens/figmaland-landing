import React from "react";
import Icon from "../Icon";
import {headerLinks} from "../../constants/headerLinks";

export default function Header () {
    return (
        <section className="w-full flex-centered">
            <Icon
                className="
                flex-centered absolute w-full pointer-events-none
                xl:h-[156px]]"
                icon='logo'
            />
            <header className="
                flex justify-between items-center
                xl:h-[156px] xl:w-[63vw]
            ">
                <div className="h-12 flex-centered text-white font-normal font-graphic gap-[41px]">
                    {headerLinks.map(({label, link, index}) => (
                        <a href={link} key={`${label}${index}`} className="leading-7 tracking-[0.2px] text-[15px]">
                            {label}
                        </a>
                    ))}
                </div>
                <div className="flex-centered gap-6 -mr-3">
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
            </header>
        </section>
    )
}