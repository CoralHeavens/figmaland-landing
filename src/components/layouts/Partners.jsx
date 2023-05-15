import React from "react";
import {clients} from "../../constants/clients";
import Icon from "../Icon";
import Button from "../Button";

const title = 'Partners';
const description = 'Most calendars are designed for teams. Slate is designed for freelancers';
const buttonLabel = 'Try it for free';

export default function Partners() {
    return (
        <section className='w-full py-20 flex items-center flex-col'>
            <div className='mt-[50px] flex flex-col items-center font-normal'>
                <div className='text-[48px] leading-[55px]'>
                    {title}
                </div>
                <div className='text-[28px] leading-10 tracking-[0.2px] text-center text-secondBlack
                    mt-[27px] max-w-[532px]'
                >
                    {description}
                </div>
                <div className='mt-20 flex max-w-[1100px] flex-wrap justify-center'>
                    {clients.map(({ name, icon, link }, index) => (
                        <a
                            key={`${name}${index}`}
                            href={link}
                            className='p-10 border-border border-[0.5px]'
                        >
                            <div className='text-center text-secondBlack leading-[23px] tracking-[0.1px]'>
                                {!name ? 'Client name' : name}
                            </div>
                            <Icon icon={icon} className='mt-[15px]' />
                        </a>
                    ))}
                </div>
            </div>
            <Button label={buttonLabel} className='font-bold px-[58px] min-h-[60px] flex items-center' />
        </section>
    )
}