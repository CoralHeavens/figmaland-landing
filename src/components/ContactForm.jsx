import React, { useState } from "react";
import { validate } from "../helpers/validate";
import joinClassNames from "../helpers/joinClassNames";

const title = 'Contact Us';
const namePlaceholder = 'Your Name';
const nameLimit = 50;
const minName = 2;
const emailPlaceholder = 'Your Email';
const emailLimit = 50;
const messagePlaceholder = 'Your Message';
const messageLimit = 500;
const buttonLabel = 'Send';

const nameErrorMessage = `Minimal name length is ${minName} symbols`;
const notValidEmail = 'Email is not valid';

export default function ContactForm({
    onSubmit
}) {
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [message, updateMessage] = useState('');

    const isValidName = name.length > minName;
    const showNameError = name.length !== 0 && !isValidName;

    const isValidEmail = validate(email, 'email');
    const showEmailError = email.length !== 0 && !isValidEmail;

    const isValidForm = isValidEmail && isValidName;

    const onLocalSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, email, message})
    }

    return (
        <form
            className='flex flex-col w-full max-w-[453px] px-[50px] py-[52px] border-formBorder border-[1px] rounded-[20px] shadow-form gap-[45px]'
            onSubmit={onLocalSubmit}
        >
            <div className='subtitle tracking-[0.1px] font-bold !text-xl w-full text-center'>
                {title}
            </div>
            <label className='relative'>
                <input
                    className={joinClassNames(
                        showNameError ? 'border-[1px] border-red-500' : 'border-lightGray'
                    )}
                    maxLength={nameLimit}
                    placeholder={namePlaceholder}
                    onChange={({target}) => updateName(target.value)}
                />
                {showNameError && (
                    <div className='absolute -bottom-8 pl-4 text-[18px] text-red-500'>
                        {nameErrorMessage}
                    </div>
                )}
            </label>
           <label className='relative'>
               <input
                   className={joinClassNames(
                       showEmailError ? 'border-[1px] border-red-500' : 'border-lightGray'
                   )}
                   maxLength={emailLimit}
                   placeholder={emailPlaceholder}
                   onChange={({target}) => updateEmail(target.value)}
               />
               {showEmailError && (
                   <div className='absolute -bottom-8 pl-4 text-[18px] text-red-500'>
                       {notValidEmail}
                   </div>
               )}
           </label>
            <textarea
                className='resize-none px-5 bg-formBg border-[1px] border-lightGray py-[23px] h-[193px]'
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