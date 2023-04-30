import React from "react";

const title = {
    top: 'The best products',
    bottom: 'start with Figma'
}
const subTitle = {
    top: 'Most calendars are designed for teams. Slate is designed',
    bottom: 'for freelancers'
}
const linkLabel = 'Try For Free'

export default function TopSection() {
    return (
        <section className="w-full flex flex-col items-center pt-[100px]">
            <div className="text-white text-[74px] leading-[84px] text-center font-bold tracking-[0.2px]">
                {title.top}<br/>{title.bottom}
            </div>
            <div className="mt-[27px] text-white text-[28px] leading-[40px] text-center font-normal tracking-[0.2px]">
                {subTitle.top}<br/>{subTitle.bottom}
            </div>
            <a href={window.origin} className="mt-22.5 text-white px-[62px] py-4 bg-primary font-normal text-xl leading-5 rounded-[35px]">
                {linkLabel}
            </a>
        </section>
    )
}