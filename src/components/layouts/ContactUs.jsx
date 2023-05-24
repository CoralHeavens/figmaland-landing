import React from "react";
import ContactForm from "../ContactForm";
import Icon from "../Icon";
import SocialMediaLinks from "../SocialMediaLinks";

const title = 'Contact Us';
const subTitle = 'Most calendars are designed for teams. Slate is designed for freelancers';
const mobileSubTitle = 'Most calendars are designed for teams.';

const address = '6386 Spring St undefined Anchorage, Georgia 12473 United States'
const number = '(843) 555-0130';
const email = 'willie.jennings@example.com';

export default function ContactUs() {
    function onFormSubmit ({name, email, message}) {
        window.open(`mailto:${email}`)
    }

    return (
        <section className='w-full pt-[213px] pb-[102px] flex flex-col items-center'>
            <div className='title'>
                {title}
            </div>
            <div className='hidden lg:block subtitle max-w-[532px] mt-[27px] text-center text-secondBlack'>
                {subTitle}
            </div>
            <div className='lg:hidden max-w-[265px] subtitle mt-[27px] text-center text-secondBlack'>
                {mobileSubTitle}
            </div>
            <SocialMediaLinks svgClassName='fill-primary' className='lg:!hidden w-full !mr-0 mt-[70px] lg:mt-[75px] lg:!justify-start' />
            <div className='mt-24 lg:mt-[60px] flex flex-col-reverse lg:flex-row gap-[60px]'>
                <ContactForm onSubmit={onFormSubmit} />
                <div className='flex flex-col gap-[70px] items-center'>
                    <div className='w-full flex flex-col lg:flex-row items-center lg:gap-[35px] px-9'>
                        <div className='contact-map-info lg:flex-col lg:max-w-[293px] items-center lg:items-start w-full lg:w-fit'>
                            <Icon icon='gps' className='fill-primary lg:w-full flex justify-center' />
                            <span className='text-left'>
                                {address}
                            </span>
                        </div>
                        <div className='contact-map-info mt-8 lg:mt-0 lg:flex-col lg:max-w-[137px] items-center lg:items-start w-full lg:w-fit'>
                            <Icon icon='mobile' className='fill-primary lg:w-full flex justify-center' />
                            {number}
                        </div>
                        <div className='contact-map-info mt-5 lg:mt-0 lg:flex-col lg:max-w-[245px] items-center lg:items-start w-full lg:w-fit'>
                            <Icon icon='mail' className='fill-primary lg:w-full flex justify-center' />
                            {email}
                        </div>
                    </div>
                    <Icon icon='map' className='hidden lg:block mx-[105px]'/>
                    <SocialMediaLinks svgClassName='fill-primary' className='!hidden lg:!flex w-full lg:!justify-start' />
                </div>
            </div>
        </section>
    )
}