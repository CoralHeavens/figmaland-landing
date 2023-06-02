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
        <section className="w-full pt-[98px] px-5 flex-centered flex-col lg:flex-row gap-16 mb-56">
            <div className='mx-5 pt-4 lg:mx-0 flex lg:block flex-col items-center'>
                <div className="text-black max-w-[335px] title text-center lg:text-left">
                    {title}
                </div>
                <div className="max-w-[532px] mt-[27px] pb-4 text-center lg:text-left">
                    <span className='hidden lg:inline text-secondBlack text-[28px] leading-10'>
                        {subTitle}
                    </span>
                    <span className='lg:hidden text-secondBlack text-[28px] leading-10'>
                        {mobileSubTitle}
                    </span>
                </div>
                <Button label={linkLabel} className='!font-bold !mt-[52px] h-[60px] flex justify-center items-center lg:!p-0 max-w-[236px]' />
            </div>
            <img className='w-[95vw] mt-16 lg:hidden' src={mobileLaptop} alt='' />
            <Icon className='hidden lg:block' icon='laptop' />
        </section>
    )
}