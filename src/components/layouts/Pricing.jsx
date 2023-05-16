import React, {useState} from "react";
import {prices} from "../../constants/prices";
import joinClassNames from "../../helpers/joinClassNames";
import Button from "../Button";

const title = 'Pricing';
const subTitle = 'Most calendars are designed for teams. ' +
    'Slate is designed for freelancers';
const pricePlan = 'Per Month';
const priceFeature = 'Pricing Feature';
const buttonLabel = 'Order Now';

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
            <div className='mt-[90px] mb-[100px] flex gap-[50px]'>
                {prices.map(({name, description, price, currency}, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                            key={`${name}${index}`}
                            onClick={() => {
                                updateActiveTab(index)
                            }}
                            className={joinClassNames(
                                'p-10 w-[335px] flex flex-col items-center rounded-[10px]',
                                isActive ? 'bg-primary text-white py-20' : 'bg-white text-black my-10'
                            )}
                        >
                            <div className='subtitle font-bold'>
                                {name}
                            </div>
                            <div className={joinClassNames(
                                'leading-[23px] max-w-[148px] mt-[3px]',
                                isActive ? 'text-white' : 'text-secondBlack',
                            )}>
                                {description}
                            </div>
                            <div className='flex mt-[18px] gap-2.5'>
                                <div className='text-[74px] font-bold leading-[84px]'>
                                    {price}
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <div className='subtitle font-bold text-left'>{currency}</div>
                                    <div>{pricePlan}</div>
                                </div>
                            </div>
                            <div className='mt-[18px]'>
                                {Array.from({length: 5}).map((_, index) => (
                                    <div
                                        className='mt-5 text-[15px] leading-7 tracking-[0.2px]'
                                        key={`price_feature${index}`}
                                    >
                                        {priceFeature}
                                    </div>
                                ))}
                            </div>
                            <Button className={joinClassNames(
                                'w-full h-14',
                                isActive && '!bg-white !text-primary'
                            )} label={buttonLabel} />
                        </button>
                    )
                })}
            </div>
        </section>
    )
}