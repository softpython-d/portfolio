"use client"
import { IoIosArrowForward } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import usercontext from "@/app/context/Data"
const Btn = ({ cname = "", text = "Let's Talk", msgsent = "no", sending = false }: { cname?: string, text?: string, msgsent?: string, sending?: boolean }) => {

    const redirectTo = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    const {Ginfo} = usercontext()


    const Link = `https://mail.google.com/mail/u/0/?fs=1&to=${Ginfo.email}&tf=cm`

    return (
        <>
            <button onClick={() =>{redirectTo(Link)}} className={`btn ${cname}`}>
                {
                    sending ?
                        <p>sending...</p> :
                        <>
                            <p>{text}</p>
                            <IoIosArrowForward className="icon" size={18} />
                        </>
                }
                <div className={`msgsentopt ${msgsent === "yes" ? "active" : msgsent === "failed" ? "failed" : ""}`}>
                    {
                        msgsent === "failed" ?
                            <FaXmark />
                            :
                            <MdDone />
                    }
                </div>
            </button>
        </>
    )
}

export default Btn;