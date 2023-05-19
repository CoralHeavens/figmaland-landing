import React from "react";
import Icon from "../Icon";
import {features} from "../../constants/features";
import player from '../../images/player.png';
import mobilePlayer from '../../images/mobilePlayer.png';
import joinClassNames from "../../helpers/joinClassNames";

const title = 'Features';
const subTitle = {
    top: 'Most calendars are designed for teams.',
    bottom: 'Slate is designed for freelancers'
}

const Player = ({
    className
}) => (
    <div className={joinClassNames(
        "mt-16 lg:mt-33 relative flex flex-col items-center justify-center",
        className,
    )}>
        <img className='hidden lg:block' src={player} alt='' />
        <img className='lg:hidden' src={mobilePlayer} alt='' />
        <a href="https://www.youtube.com/" className="absolute flex-centered rounded-full w-16 lg:w-playButton h-16 lg:h-playButton bg-primary">
            <Icon className='hidden lg:block' icon='play'/>
            <Icon className='lg:hidden' icon='mobilePlay'/>
        </a>
    </div>
)

export default function Features() {
    return (
        <section className="w-full flex flex-col items-center mt-[95vw] lg:my-0">
            <div className="title mt-[11px] overflow-hidden">
                {title}
            </div>
            <div className="text-center max-w-[265px] lg:max-w-none mt-[27px]">
                <span className='text-secondBlack text-[28px] leading-10'>
                    {subTitle.top}
                </span>
                <br/>
                <span className='hidden lg:inline text-secondBlack text-[28px] leading-10'>
                    {subTitle.bottom}
                </span>
            </div>
            <Player className='lg:hidden' />
            <div className="flex flex-col lg:grid grid-cols-3 gap-20 lg:gap-[52px] py-[18px] px-3 lg:p-0 mt-14 lg:mt-22.5">
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
            <Player className='hidden lg:flex' />
        </section>
    )
}