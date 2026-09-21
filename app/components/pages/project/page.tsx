"use client";

import style from "./style.module.scss";


import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
// import { IoLayers } from "react-icons/io5";
import { FaCaretUp } from "react-icons/fa6";

import usercontext from "@/app/context/Data"
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);


// --------------------------------------------------
// LIVE PREVIEW BUTTON
// --------------------------------------------------

const Btn = ({link}:{link:string}) => {
    return (
        <Link target="_blank" href={`${link}`} className={style.previewsitebtn}>
            <div className={style.icon}>
                <FaCaretUp />
            </div>

            <p>Live Preview</p>
        </Link>
    );
};



const ProjectPreview = ({img, title, type, github, web}:{img:number, title:string, type: string, github: string, web: string}) => {

    return (
        <div
            className={style.ProjectBox}
        >

            {/* HEADER */}

            <div className={style.header}>

                <div className={style.about}>
                    <p>{type}</p>
                    <h4>{title}</h4>
                </div>


                <div className={style.opt}>

                    <Link target="_blank" href={`${github}`}>
                        <FaGithub />
                    </Link>

                    {/* <Link href="#">
                        <IoLayers />
                    </Link> */}

                    <Btn link={`${web}`} />

                </div>

            </div>


            {/* PROJECT PREVIEWS */}

            <div className={style.previews}>

                <div className={style.mainpreview}>
                    <Image
                        src={`/projects/${img}/img1.png`}
                        width={100}
                        height={100}
                        alt="Tech Flow main preview"
                        unoptimized
                    />
                </div>


                <div className={style.optpreview}>

                    <div className={style.prev1}>
                        <Image
                            src={`/projects/${img}/img2.png`}
                            width={100}
                            height={100}
                            alt="Tech Flow preview"
                            unoptimized
                        />
                    </div>


                    <div className={style.prev2}>
                        <Image
                            src={`/projects/${img}/img3.png`}
                            width={100}
                            height={100}
                            alt="Tech Flow preview"
                            unoptimized
                        />
                    </div>

                </div>

            </div>

        </div>
    );
};


// --------------------------------------------------
// PROJECT PAGE
// --------------------------------------------------

const ProjectPage = () => {

    const {Projects} = usercontext()
    const projects = Projects.Project

    return (

        <div
            className={style.ProjectPage}
            id="projects"
        >

            {/* -------------------------------------- */}
            {/* HEADING */}
            {/* -------------------------------------- */}

            <div className={style.heading}>

                <h1>
                    Things <p>{"I've Built"}</p>
                </h1>

            </div>


            {/* -------------------------------------- */}
            {/* PROJECTS */}
            {/* -------------------------------------- */}

            <div className={style.ProjectsSection}>
                {
                    projects.map((val, index) => {
                        return (
                            <ProjectPreview key={index} img={val.img} title={val.title} type={val.type} web={val.web} github={val.GitHub} />
                            
                        )
                    })
                }


            </div>

        </div>

    );
};


export default ProjectPage;