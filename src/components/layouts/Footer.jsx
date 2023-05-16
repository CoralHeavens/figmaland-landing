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
        <section className='w-screen flex justify-center bg-black pt-40 pb-[150px] gap-32'>
            {columns.map(({title, array}, index) => (
                <div key={`${title}${index}`} className='flex flex-col text-white'>
                    <div className='subtitle font-bold mb-[25px]'>
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
            <div className='flex flex-col text-white font-roboto text-[15px] tracking-[0.2px] gap-4 ml-12'>
                <div className='flex gap-4 items-center'>
                    <Icon className='' icon='gps' />
                    {address}
                </div>
                <div className='flex gap-4 items-center'>
                    <Icon className='' icon='mobile' />
                    {number}
                </div>
                <SocialMediaLinks className='!justify-start mt-5' />
            </div>
        </section>
    )
}