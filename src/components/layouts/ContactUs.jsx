import React from "react";
import ContactForm from "../ContactForm";
import Icon from "../Icon";
import SocialMediaLinks from "../SocialMediaLinks";

const title = 'Contact Us';
const subTitle = 'Most calendars are designed for teams. Slate is designed for freelancers';

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
            <div className='subtitle max-w-[532px] mt-[27px] text-center text-secondBlack'>
                {subTitle}
            </div>
            <div className='mt-[60px] flex gap-[60px]'>
                <ContactForm onSubmit={onFormSubmit} />
                <div className='flex flex-col gap-[70px] items-center'>
                    <div className='w-full flex items-center gap-[35px]'>
                        <div className='contact-map-info max-w-[293px]'>
                            <Icon icon='gps' className='fill-primary w-full flex justify-center' />
                            {address}
                        </div>
                        <div className='contact-map-info max-w-[137px]'>
                            <Icon icon='mobile' className='fill-primary w-full flex justify-center' />
                            {number}
                        </div>
                        <div className='contact-map-info max-w-[245px]'>
                            <Icon icon='mail' className='fill-primary w-full flex justify-center' />
                            {email}
                        </div>
                    </div>
                    <Icon icon='map' className='mx-[105px]'/>
                    <SocialMediaLinks svgClassName='fill-primary' className='w-full !justify-start' />
                </div>
            </div>
        </section>
    )
}