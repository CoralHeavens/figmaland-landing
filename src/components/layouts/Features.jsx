import React from "react";
import Icon from "../Icon";
import {features} from "../../constants/features";

const title = 'Features';
const subTitle = {
    top: 'Most calendars are designed for teams.',
    bottom: 'Slate is designed for freelancers'
}

export default function Features() {
    return (
        <section className="w-full flex flex-col items-center">
            <div className="text-black text-5xl leading-[55px] mt-[11px] overflow-hidden">
                {title}
            </div>
            <div className="text-secondBlack text-center text-[28px] leading-10 mt-[27px]">
                {subTitle.top}<br/>{subTitle.bottom}
            </div>
            <div className="grid grid-cols-3 gap-[52px] mt-22.5">
                {features.map(({ icon, title, subTitle }) => (
                    <div key={icon} className="flex flex-col items-center">
                        <Icon icon={icon} className='mb-5'/>
                        {title.map((line) => (
                            <span key={`${line}`} className="text-black font-bold text-xl">
                                {line}
                            </span>
                        ))}
                        <div className="max-w-[231px] text-center mt-5 text-lg leading-[25px] tracking-[0.2px]">
                            {subTitle}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-33 relative flex flex-col items-center justify-center">
                <Icon icon='player'/>
                <a href="https://www.youtube.com/" className="absolute flex-centered rounded-full w-playButton h-playButton bg-primary">
                    <Icon icon='play'/>
                </a>
            </div>
        </section>
    )
}