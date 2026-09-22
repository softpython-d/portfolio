"use client"
import style from "./style.module.scss"
import { IoPaperPlane } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import usercontext from "@/app/context/Data"
import Link from "next/link"
import { AiFillMessage } from "react-icons/ai";
import ContactFormP from "@/app/components/contactform/page"
import { FaWhatsapp } from "react-icons/fa";


const Detail = () => {
    const { SocialLinks, Ginfo } = usercontext()
    
    const infodata = [
        { icon: MdEmail, text: Ginfo.email, title: "Email" },
        { icon: FaClock, text: "Freelance / Full Week", title: "Availability" },
        { icon: FaWhatsapp, text: Ginfo.contact, title: "Reach me" },
    ]
    return (
        <>
            <div className={`${style.details} glass`}>
                <div className={style.head}>
                    <div className={style.icon}>
                        <IoPaperPlane />
                    </div>
                    <h2>
                        Contact Information
                    </h2>
                </div>
                <div className={style.infocontainer}>
                    {
                        infodata.map((val, index) => {
                            const Icon = val.icon
                            return (
                                <div key={index} className={style.infobox}>
                                    <div className={style.icon}>
                                        <Icon />
                                    </div>
                                    <div className={style.info}>
                                        <div className={style.title}>
                                            {val.title}
                                        </div>
                                        <div className={style.desc}>
                                            {val.text}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
                <div className={style.connectbox}>
                    <div className={style.icon}>
                        <FaLink />
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>Connect With Me</div>
                        <div className={style.desc}>
                            Let’s stay in touch on social media
                        </div>
                    </div>
                </div>
                <div className={style.links}>
                    {
                        Object.entries(SocialLinks).map(([key, value], index) => {
                            const Icon = value.icon
                            return (
                                <Link target="_blank" key={`${key}-${index}`} href={value.link} className={style.socialicon}>
                                    <div className={style.tooltip}>
                                        {key}
                                    </div>
                                    < Icon style={{ color: value.color }} />
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}


const ContactForm = () => {

    


    return (
        <>
            <div className={`${style.contactform} glass`}>
                <div className={style.header}>
                    <div className={style.icon}>
                        <AiFillMessage />
                    </div>
                    <div className={style.title}>
                        <h2>Send a message</h2>
                        <p>Have a question or want to collaborate? Fill out the form below and I’ll get back to you as soon as possible</p>
                    </div>
                </div>
               
                <ContactFormP/>
            </div>
        </>
    )
}


const ContactPage = () => {







    return (
        <>
            <div className={style.contact} id="contact">
                <div className={style.header}>
                    <h1>
                        Let’s Build Something <span>Great Together</span>
                    </h1>
                </div>
                <div className={style.detailandform}>
                    <Detail />
                    <ContactForm />

                </div>

            </div>
        </>
    )
}



export default ContactPage;