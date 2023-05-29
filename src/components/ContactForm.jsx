import React, {useState} from "react";
import {validate} from "../helpers/validate";

const title = 'Contact Us';
const namePlaceholder = 'Your Name';
const nameLimit = 50;
const minName = 2;
const emailPlaceholder = 'Your Email';
const emailLimit = 50;
const messagePlaceholder = 'Your Message';
const messageLimit = 500;
const buttonLabel = 'Send';

export default function ContactForm({
    onSubmit
}) {
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [message, updateMessage] = useState('');

    const isValidForm = validate(email, 'email') && name.length > minName;

    const onLocalSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, email, message})
    }

    return (
        <form
            className='flex flex-col w-full max-w-[453px] px-[50px] py-[52px] border-formBorder border-[1px] rounded-[20px] shadow-form gap-[45px]'
            onSubmit={onLocalSubmit}
        >
            <div className='subtitle tracking-[0.1px] font-bold w-full text-center'>
                {title}
            </div>
            <input
                className=''
                maxLength={nameLimit}
                placeholder={namePlaceholder}
                onChange={({target}) => updateName(target.value)}
            />
            <input
                className=''
                maxLength={emailLimit}
                placeholder={emailPlaceholder}
                onChange={({target}) => updateEmail(target.value)}
            />
            <textarea
                className='resize-none placeholder-darkBlack px-5 bg-formBg border-[1px] border-lightGray py-[23px] h-[193px]'
                maxLength={messageLimit}
                placeholder={messagePlaceholder}
                onChange={({target}) => updateMessage(target.value)}
            />
            <button
                className='py-[19px] px-[38px] common-button flex justify-center items-center max-w-[145px]'
                type='submit'
                disabled={!isValidForm}
            >
                {buttonLabel}
            </button>
        </form>
    )
}