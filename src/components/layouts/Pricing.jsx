import React, {useState} from "react";
import {prices} from "../../constants/prices";
import joinClassNames from "../../helpers/joinClassNames";

const title = 'Pricing';
const subTitle = 'Most calendars are designed for teams. ' +
    'Slate is designed for freelancers';

export default function Pricing() {
    const [activeTab, updateActiveTab] = useState(1);

    return (
        <section className='w-screen flex flex-col items-center bg-black pt-[110px]'>
            <div className='text-white title'>
                {title}
            </div>
            <div className='text-white subtitle max-w-[532px] mt-[27px] text-center'>
                {subTitle}
            </div>
            <div className='mt-[90px] flex gap-[50px]'>
                {prices.map(({name, price}, index) => (
                    <div className={joinClassNames(
                        'p-10 w-[335px] flex flex-col items-center',
                        activeTab === index ? 'bg-primary text-white py-20' : 'bg-white text-black mt-10'
                    )}>
                        <div className=''>
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}