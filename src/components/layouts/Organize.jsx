import React from "react";
import Icon from "../Icon";
import Button from "../Button";

const title = 'Fastest way to organize';
const subTitle = 'Most calendars are designed for teams. Slate is designed for freelancers';
const linkLabel = 'Try For Free';

export default function Organize() {
    return (
        <section className="w-full my-[226px] flex-centered">
            <div>
                <div className="text-black max-w-[335px] text-5xl leading-[55px] tracking-[0.2px]">
                    {title}
                </div>
                <div className="text-secondBlack text-[28px] leading-10 max-w-[532px] mt-[27px] mb-[86px]">
                    {subTitle}
                </div>
                <Button label={linkLabel} className='!font-bold' />
            </div>
            <Icon icon='laptop' />
        </section>
    )
}