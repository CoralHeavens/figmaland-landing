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
        <section className='w-screen pt-[213px] pb-[149px] lg:pb-[102px] flex flex-col items-center px-5'>
            <div className='title pb-4'>
                {title}
            </div>
            <div className='hidden lg:block subtitle max-w-[532px] mt-[13px] text-center text-secondBlack'>
                {subTitle}
            </div>
            <div className='lg:hidden max-w-[265px] subtitle mt-[27px] text-center text-secondBlack'>
                {mobileSubTitle}
            </div>
            <SocialMediaLinks svgClassName='fill-primary' className='lg:!hidden w-full !mr-0 mt-[70px]' />
            <div className='mt-24 w-full lg:mt-[60px] flex items-center flex-col-reverse lg:flex-row lg:justify-center px-5 gap-[60px]'>
                <ContactForm onSubmit={onFormSubmit} />
                <div className='w-full max-w-[725px] flex flex-col gap-[70px] items-center'>
                    <div className='w-full flex flex-col lg:flex-row items-center lg:gap-[30px] -mt-4'>
                        <div className='-ml-4 lg:ml-0 contact-map-info lg:flex-col lg:max-w-none lg:min-w-[293px] items-center lg:items-start w-full'>
                            <Icon icon='smallGps' className='fill-primary lg:w-full flex justify-center' />
                            <span className='text-center'>
                                {address}
                            </span>
                        </div>
                        <div className='-ml-4 lg:ml-0 contact-map-info mt-[30px] lg:mt-0 lg:flex-col lg:max-w-[137px] items-center lg:items-start w-full'>
                            <Icon icon='mobile' className='fill-primary lg:w-full flex justify-center' />
                            {number}
                        </div>
                        <div className='contact-map-info mt-[30px] lg:mt-0 lg:flex-col lg:max-w-[245px] items-center lg:items-start w-full break-all'>
                            <Icon icon='mail' className='fill-primary lg:w-full flex justify-center' />
                            {email}
                        </div>
                    </div>
                    <Icon icon='map' className='hidden lg:block'/>
                    <SocialMediaLinks svgClassName='fill-primary' className='!hidden lg:!flex w-full lg:!justify-start' />
                </div>
            </div>
        </section>
    )
}