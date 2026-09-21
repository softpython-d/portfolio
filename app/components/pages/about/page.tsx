"use client";

import style from "./style.module.scss";
import Image from "next/image";
import avatar from "@/public/user/avatar.png";
import usercontext from "@/app/context/Data";
import TechStack from "@/app/components/techStack/page";
import Btn from "@/app/components/btn/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Page = () => {
    const { Ginfo } = usercontext();

    const aboutRef = useRef<HTMLDivElement>(null);

    

    return (
        <div
            ref={aboutRef}
            id="about"
            className={style.about}
        >
            <div className={style.generalinfo}>

                <div className={style.hero}>
                    <Image
                        unoptimized
                        src={avatar}
                        alt="hero"
                        width={100}
                        height={100}
                    />
                </div>

                <div className={style.intro}>

                    <div className={style.header}>
                        About me
                    </div>

                    <div className={style.name}>
                        {"Hi, I'm "}
                        <span>{Ginfo.name}</span>
                    </div>

                    <div className={style.desc}>
                        <p className={style.first}>
                            {Ginfo.para1}
                        </p>

                        <p className={style.second}>
                            {Ginfo.para2}
                        </p>
                    </div>

                    <Btn cname={style.btn} />

                </div>
            </div>

            <TechStack cname={style.abouttechstack} />
        </div>
    );
};

export default Page;