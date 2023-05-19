import React from "react";
import {clients} from "../../constants/clients";
import Icon from "../Icon";
import Button from "../Button";
import joinClassNames from "../../helpers/joinClassNames";

const title = 'Partners';
const description = 'Most calendars are designed for teams. Slate is designed for freelancers';
const mobileDescription = {
    top: 'Most calendars are designed for teams.',
    bottom: 'Slate is designed for freelancers',
}
const buttonLabel = 'Try it for free';

const MAX_MOBILE_PARTNERS = 3;

export default function Partners() {
    return (
        <section className='w-full py-20 flex items-center flex-col'>
            <div className='mt-[50px] flex flex-col items-center font-normal'>
                <div className='title'>
                    {title}
                </div>
                <div className='hidden lg:block subtitle text-center text-secondBlack
                    mt-[27px] max-w-[532px] max-h-none'
                >
                    {description}
                </div>
                <div className='lg:hidden subtitle text-center text-secondBlack
                    mt-[27px] max-w-[90vw] max-h-20 truncate'
                >
                    {mobileDescription.top}
                    <br/>
                    {mobileDescription.bottom}
                </div>
                <div className='mt-20 flex max-w-[1100px] flex-wrap justify-center gap-8 lg:gap-0'>
                    {clients.map(({ name, icon, link }, index) => (
                        <a
                            key={`${name}${index}`}
                            href={link}
                            className={joinClassNames(
                                'py-10 lg:p-10 border-border border-[0.5px] w-[65vw] lg:w-fit',
                                index >= MAX_MOBILE_PARTNERS && 'hidden lg:block'
                            )}
                        >
                            <div className='text-center text-secondBlack leading-[23px] tracking-[0.1px]'>
                                {!name ? 'Client name' : name}
                            </div>
                            <Icon icon={icon} className='mt-[15px] flex justify-center lg:block' />
                        </a>
                    ))}
                </div>
            </div>
            <Button label={buttonLabel} className='font-bold px-[58px] max-w-none min-h-[60px] flex items-center' />
        </section>
    )
}