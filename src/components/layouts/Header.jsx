import React from "react";
import Icon from "../Icon";

const headerLinks = [
    {
        label: 'Home',
        link: './home'
    },
    {
        label: 'Product',
        link: './product'
    },
    {
        label: 'Pricing',
        link: './pricing'
    },
    {
        label: 'About',
        link: './about'
    },
    {
        label: 'Contact',
        link: './contact'
    }
]

export default function Header ({
    logo
}) {
    return (
        <div className="w-full m-auto flex-centered">
            <div className="
                flex-centered absolute w-full pointer-events-none
                xl:h-[156px]]
            ">
                <Icon icon={logo}/>
            </div>
            <header className="
                flex justify-between items-center
                xl:h-[156px] 
            ">
                <div className="h-12 flex-centered text-white font-normal font-graphic text-[15px] gap-[21px]">
                    {headerLinks.map(({label, link, index}) => (
                        <a href={link} key={`${label}${index}`} className="m-2.5 leading-7 tracking-[0.2px]">
                            {label}
                        </a>
                    ))}
                </div>
                <div className="flex-centered gap-6">
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
        </div>
    )
}