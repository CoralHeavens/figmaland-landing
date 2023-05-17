import React, {useState} from "react";
import Icon from "../Icon";
import {validate} from "../../helpers/validate";

const title = 'At your fingertips';
const content = 'Lightning fast prototyping';

const subscribeTitle = 'Subscribe to our Newsletter';
const subscribeContent = 'Available exclusively on Figmaland';

const emailPlaceholder = 'Your Email';
const emailButton = 'Subscribe';

export default function Subscribe() {
    const [email, updateEmail] = useState('');
    const [isValidEmail, updateIsValidEmail] = useState(false);

    const sendEmail = () => {
        window.open(`mailto:${email}`);
    }

    return (
        <section className='py-[52px] w-full flex justify-center items-center gap-[113px]'>
            <Icon icon='letter' />
            <div>
                <div className='text-xl font-bold'>
                    {title}
                </div>
                <div className='mt-[17px] max-w-[324px] title'>
                    {content}
                </div>
                <div className='mt-[35px] pl-2.5'>
                    <div className='text-xl font-bold'>
                        {subscribeTitle}
                    </div>
                    <div className='] text-secondBlack text-lg font-normal leading-[25px]'>
                        {subscribeContent}
                    </div>
                </div>
                <div className='mt-9 flex pl-2.5 gap-3'>
                    <input
                        className='h-[54px] rounded-[39px] px-[39px] py-[19px]
                            bg-lightGray text-sm leading-4 placeholder-darkBlack'
                        onChange={(e) => {
                            updateEmail(e.target.value);
                            updateIsValidEmail(validate(e.target.value, 'email'));
                        }}
                        value={email}
                        placeholder={emailPlaceholder}
                    />
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