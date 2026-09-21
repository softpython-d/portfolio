'use client'
import style from "./style.module.scss"
import Btn from "@/app/components/btn/page"
import usercontext from "@/app/context/Data"
import Link from "next/link"
import Image from "next/image"
import footer from "@/public/footer/branding.jpg"


const Footer = () => {
    const { SocialLinks } = usercontext()
    return (
        <>
            <div className={style.footer}>
                <Image src={footer} unoptimized alt="footer" width={100} height={100}/>
                <div className={style.info}>
                    <div className={style.tagline}>{"Let's Connect"}</div>
                    <div className={style.heading}>
                        I’m always open to new opportunities and exciting projects
                    </div>
                    <Btn cname="btn" />
                </div>
                <div className={style.linkbox}>
                    <div className={style.links}>
                        {
                            Object.entries(SocialLinks).map(([key, val], index) => {
                                const Icon = val.icon
                                return (
                                    <Link key={`${key}-${index}`} href={`${val.link}`}>
                                        <Icon className={style.socialicon} size={36} style={{color: val.color}}  />
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={`${style.tagline} islandMoments`}>
                        {"let’s build something great together"}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;