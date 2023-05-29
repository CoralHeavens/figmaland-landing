import React from "react";
import Icon from "../Icon";
import Button from "../Button";
import mobileLaptop from '../../images/mobileLaptop.png';

const title = 'Fastest way to organize';
const subTitle = 'Most calendars are designed for teams. Slate is designed for freelancers';
const mobileSubTitle = 'Most calendars are designed for teams.';
const linkLabel = 'Try For Free';

export default function Organize() {
    return (
        <section className="w-full mt-48 px-5 lg:my-[226px] flex-centered flex-col lg:flex-row px-5">
            <div className='mx-5 lg:mx-0 flex lg:block flex-col items-center'>
                <div className="text-black max-w-[335px] title text-center lg:text-left">
                    {title}
                </div>
                <div className="max-w-[532px] mt-[27px] mb-16 lg:mb-[86px] text-center lg:text-left">
                    <span className='hidden lg:inline text-secondBlack text-[28px] leading-10'>
                        {subTitle}
                    </span>
                    <span className='lg:hidden text-secondBlack text-[28px] leading-10'>
                        {mobileSubTitle}
                    </span>
                </div>
                <Button label={linkLabel} className='!font-bold mt-0 block' />
            </div>
            <img className='w-[95vw] mt-16 lg:hidden' src={mobileLaptop} alt='' />
            <Icon className='hidden lg:block' icon='laptop' />
        </section>
    )
}