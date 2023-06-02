import React from "react";
import {JANE_BLACK, PAGES, TOMOTHY} from "../../constants/footer";
import Icon from "../Icon";
import SocialMediaLinks from "../SocialMediaLinks";

const columns = [
    {
        title: 'Pages',
        array: PAGES
    },
    {
        title: 'Tomothy',
        array: TOMOTHY
    },
    {
        title: 'Jane Black',
        array: JANE_BLACK
    }
]

const address = '7480 Mockingbird Hill undefined ';
const number = '(239) 555-0108';

export default function Footer() {
    return (
        <section className='w-screen px-5 flex flex-col items-center lg:items-start lg:flex-row justify-center bg-black py-32 lg:pt-40 lg:pl-14 lg:pb-[150px] gap-20 lg:gap-[112px]'>
            {columns.map(({title, array}, index) => (
                <div key={`${title}${index}`} className='flex flex-col items-center lg:items-start text-white'>
                    <div className='subtitle !text-xl font-bold mb-[25px]'>
                        {title}
                    </div>
                    {array.map(({ link, title }, index) => (
                        <a
                            className='mb-4 text-[15px] leading-7 tracking-[0.2px]'
                            key={`${title}${index}`}
                            href={`${link}?position:${title}`}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            ))}
            <div className='flex flex-col items-center lg:items-start text-white font-roboto text-[15px] tracking-[0.2px] gap-4 -mt-4 lg:pl-16'>
                <div className='flex gap-4 items-center'>
                    <Icon className='fill-white' icon='gps' />
                    {address}
                </div>
                <div className='flex gap-4 items-center -ml-32 lg:ml-0'>
                    <Icon className='fill-white' icon='mobile' />
                    {number}
                </div>
                <SocialMediaLinks className='!justify-start mt-5' svgClassName='fill-white' />
            </div>
        </section>
    )
}