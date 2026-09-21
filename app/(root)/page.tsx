"use client"
import Btn from "../components/btn/page";
import style from "./style.module.scss"
import Image from "next/image"
import Avatar from "@/public/user/avatar.png"
import Link from "next/link"
import userdata from "@/app/context/Data"
import About from "@/app/components/pages/about/page"
import ContactPage from "@/app/components/pages/contact/page"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ProjectPage from "@/app/components/pages/project/page"


const Home = () => {

    const { Ginfo, SocialLinks } = userdata()
    const name = Ginfo.name
    const desc = "I build interactive web experiences with thoughtful interfaces and powerful backend systems."
    const HomePageRef = useRef<HTMLDivElement>(null)
    const mynameRef = useRef<HTMLSpanElement>(null)

    useGSAP(() => {

        const tl = gsap.timeline()
        gsap.from(`.${style.avatar} img`, {
            x: "150%",
            duration: 0.8,
            ease: "expo.inOut"
        })

        tl.from(`.${style.welcome}`, {
            x: "-250%",
            duration: 0.8,
            ease: "expo.inOut"
        })
        tl.from(`.${style.role} h1`,{
            x: "-150%",
            duration: 0.8,
            ease: "expo.inOut"
        }, 0.2)
        tl.from(`.${style.desc}`,{
            x: "-150%",
            duration: 0.8,
            ease: "expo.inOut"
        }, 0.4)

        gsap.from(`.${style.talkbtn}`, {
            x: "-450%",
            opacity:0,
            duration: 0.6,
            ease: "expo.inOut"
        })

        gsap.from(`.${style.sociallinks} .${style.iconbox}`, {
            y: "200%",
            duration: 0.6,
            ease: "power1.inOut",
            stagger: 0.25

        })

    }, { scope: HomePageRef })



    return (
        <>
            <div ref={HomePageRef} className={style.home} id="home">
                <div className={style.avatar}>
                    <Image quality={100} unoptimized src={Avatar} alt="hero" width={100} height={100} />
                </div>
                <div className={style.welcomebox}>
                    <div className={style.welcome}>
                        {`Hi I'm`} <span ref={mynameRef} >{name}</span>
                    </div>
                    <div className={style.role}>
                        <h1 className="caveatBrush" >Full Stack <span className="poppins" >Web Developer</span></h1>
                    </div>
                    <p className={style.desc}>
                        {desc}
                    </p>
                    <Btn cname={`${style.talkbtn} btn`} />
                    <div className={style.sociallinks}>

                        {
                            Object.entries(SocialLinks).map((val, index) => {
                                const Icon = val[1].icon
                                return (
                                    <Link target="_blank" href={val[1].link} key={index} className={style.iconbox}>
                                        <Icon size={30} className={style.icon} />
                                    </Link>
                                )
                            })
                        }



                    </div>
                </div>
            </div>
        </>
    )

}


const Page = () => {
    return (
        <>
            <Home />
            <About />
            <ProjectPage/>
            <ContactPage />
        </>
    )

}

export default Page;