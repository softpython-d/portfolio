"use client"
import style from "./style.module.scss"
import { IoIosArrowForward } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { useState } from "react";
import sendEmail from "@/app/functions/sendemail"




const ContactForm = () => {

    const [Status, setStatus] = useState<"sending" | "normal" | "wrong" | "sended">("normal")


    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;


        if (!form.checkValidity()) {
            setStatus("wrong")
            setTimeout(() => {
                setStatus("normal")
            }, 2000)
            return
        }
        setStatus("sending")

        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
        const subject = (form.elements.namedItem("subject") as HTMLTextAreaElement).value;

        // code for sending email
        const result = await sendEmail({ name, email, subject, message })
        if (result ===1 ){

            setStatus("sended")
        }else{
            setStatus("wrong")
            alert("Something went wrong while sending the message")
        }


        setTimeout(() => {
            setStatus("normal")
        }, 2000)

    }

    return (
        <>
            <form onSubmit={HandleSubmit} className={`${style.contactformpage}`} action="#" method="post">
                <div className={style.namebox}>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input placeholder="your name" required type="text" name="name" id="name" spellCheck={false} />
                </div>
                <div className={style.emailbox}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input placeholder="your@email.com" required type="email" name="email" id="email" spellCheck={false} />

                </div>
                <div className={style.subject}>
                    <label htmlFor="subject">
                        Subject
                    </label>
                    <input placeholder="Enter a subject" required type="subject" name="subject" id="subject" spellCheck={false} />
                </div>
                <div className={style.message}>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea defaultValue={"Tell me about your project, idea or just say hello."} required name="message" id="message" spellCheck={false} >

                    </textarea>

                </div>
                <button className={Status === "sended"? style.sended: (Status === "wrong"? style.wrong : "")} type="submit">
                    {
                        Status === 'normal' ?

                            <>
                                <p>
                                    Send Message
                                </p>
                                <IoIosArrowForward />
                            </>
                            : (
                                Status === 'wrong' ?
                                    <>
                                        <p></p>
                                        <FaXmark />
                                    </>

                                    : (
                                        Status === 'sended' ?
                                            <>
                                                <p>Message Sent</p>
                                                <MdDone />
                                            </>
                                            : (
                                                Status === 'sending' ?
                                                    <p>sending...</p>
                                                    : ""
                                            )
                                    )
                            )
                    }



                </button>

            </form>
        </>
    )
}

export default ContactForm;