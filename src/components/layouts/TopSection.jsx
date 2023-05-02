import React from "react";
import Button from "../Button";

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
            <Button label={linkLabel} />
        </section>
    )
}