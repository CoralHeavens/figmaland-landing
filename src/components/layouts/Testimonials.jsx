import React from "react";
import Icon from "../Icon";
import Button from "../Button";
import joinClassNames from "../../helpers/joinClassNames";

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
            <div className='text-secondBlack text-sm lg:text-[28px] lg:leading-10 lg:tracking-[0.2px]
                max-w-[65vw] lg:max-w-[967px] text-center mt-[60px]'
            >
                {description}
            </div>
            <div className='flex gap-[13px] mt-[62px]'>
                <Icon icon='avatar' className=''/>
                <div>
                    <span className={joinClassNames(
                        'leading-[15px] font-bold tracking-[0.08px] text-[10px]',
                        'text-secondBlack lg:text-base lg:leading-[23px] lg:tracking-[0.1px]',
                    )}>
                        {userInfo}
                    </span>
                    <br/>
                    <a className={joinClassNames(
                        'leading-[22px] text-[12px] tracking-[0.17px]',
                        'text-darkBlack lg:leading-[28px] lg:text-[15px] lg:tracking-[0.2px]',
                    )} href={window.origin}>
                        {userRole}
                    </a>
                </div>
            </div>
            <Button label={buttonLabel} className='max-w-none mb-[100px] mt-20 font-bold tracking-[0.1px] h-[60px] flex items-center' />
        </section>
    )
}