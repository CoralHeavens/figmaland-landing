import React from "react";
import Icon from "../Icon";
import Button from "../Button";

const title = 'Testimonials';
const description = 'Most calendars are designed for teams. ' +
    'Slate is designed for freelancers who want a simple way to plan their schedule.';
const userInfo = 'Organize across';
const userRole = 'Ui designer';
const buttonLabel = 'More Testimonials';

export default function Testimonials() {
    return (
        <section className='pt-[111px] flex items-center flex-col'>
            <div className='title'>
                {title}
            </div>
            <Icon icon='ibm' className='mt-[90px]'/>
            <div className='text-secondBlack subtitle
                max-w-[967px] text-center mt-[60px]'
            >
                {description}
            </div>
            <div className='flex gap-[13px] mt-[62px]'>
                <Icon icon='avatar' className=''/>
                <div className='text-secondBlack leading-[23px] tracking-[0.1px]'>
                    {userInfo}<br/>
                    {userRole}
                </div>
            </div>
            <Button label={buttonLabel} className='max-w-none mb-[100px] mt-20 font-bold tracking-[0.1px] h-[60px] flex items-center' />
        </section>
    )
}