import React, {useState} from "react";
import Icon from "../Icon";
import {validate} from "../../helpers/validate";
import mobileLetter from '../../images/mobileLetter.png';
import joinClassNames from "../../helpers/joinClassNames";

const title = 'At your fingertips';
const content = 'Lightning fast prototyping';
const mobileContent = 'Newsletter';
const mobileSubContent = {
    top: 'Most calendars are designed for teams.',
    bottom: ' Slate is designed for freelancers',
};

const subscribeTitle = 'Subscribe to our Newsletter';
const subscribeContent = 'Available exclusively on Figmaland';

const emailPlaceholder = 'Your Email';
const emailButton = 'Subscribe';
const notValidEmail = 'Email is not valid';

export default function Subscribe() {
    const [email, updateEmail] = useState('');
    const [isValidEmail, updateIsValidEmail] = useState(false);

    const sendEmail = () => {
        window.open(`mailto:${email}`);
    }

    return (
        <section className='px-5 pl-16 w-full flex flex-col pt-[218px] lg:flex-row justify-center items-center gap-[113px] mb-16'>
            <Icon icon='letter' className='hidden lg:block min-w-[667px]' />
            <div className='flex flex-col items-center lg:block -mt-5'>
                <div className='text-xl font-bold text-center lg:text-left'>
                    {title}
                </div>
                <div className='mt-[17px] max-w-[324px] title text-left hidden lg:block'>
                    {content}
                </div>
                <div className='mt-[17px] title text-center lg:hidden'>
                    {mobileContent}
                </div>
                <div className='mt-[27px] text-secondBlack lg:hidden subtitle truncate text-center max-w-[90vw]'>
                    {mobileSubContent.top}
                    <br/>
                    {mobileSubContent.bottom}
                </div>
                <div className='w-full flex justify-center'>
                    <img className='lg:hidden mt-24 max-w-[95vw]' src={mobileLetter} alt='' />
                </div>
                <div className='mt-24 lg:mt-[35px] pl-2.5'>
                    <div className='text-xl font-bold'>
                        {subscribeTitle}
                    </div>
                    <div className='] text-secondBlack text-lg font-normal leading-[25px]'>
                        {subscribeContent}
                    </div>
                </div>
                <div className='relative w-full lg:w-fit mt-9 flex flex-col lg:flex-row px-8 lg:pl-2.5 lg:pr-0 gap-3 -mr-8'>
                    <input
                        className={joinClassNames(
                            'h-[54px] rounded-[39px] px-[39px] w-[273px] py-[19px] bg-lightGray text-sm leading-4',
                            !isValidEmail && email && 'border-red-500 border-[1px]'
                        )}
                        onChange={(e) => {
                            updateEmail(e.target.value);
                            updateIsValidEmail(validate(e.target.value, 'email'));
                        }}
                        value={email}
                        placeholder={emailPlaceholder}
                    />
                    {!isValidEmail && email && (
                        <div className='absolute -bottom-8 pl-4 text-[18px] text-red-500'>
                            {notValidEmail}
                        </div>
                    )}
                    <button
                        className='py-[19px] px-[38px] common-button flex justify-center items-center'
                        onClick={sendEmail}
                        disabled={!isValidEmail}
                    >
                        {emailButton}
                    </button>
                </div>
            </div>
        </section>
    )
}