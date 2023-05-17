import React from "react";
import Icon from "../Icon";
import {headerLinks} from "../../constants/headerLinks";
import SocialMediaLinks from "../SocialMediaLinks";

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
                <SocialMediaLinks svgClassName='fill-white' />
            </header>
        </section>
    )
}