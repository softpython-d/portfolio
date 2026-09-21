
"use client"
import style from "./style.module.scss"
import { FaLayerGroup } from "react-icons/fa";
import usecontext from "@/app/context/Data"
import { FaCode } from "react-icons/fa6";

const TechStack = ({cname}:{cname:string}) => {
    const { techStack } = usecontext()
    const TechIconSize = 30
    const TechTitleIconSize = 24

    return (
        <>
            <div className={`${style.techstack} ${cname}`}>
                <div className={style.header}>
                    <div className={style.head}>
                        <div className={style.icon}>
                            <FaLayerGroup size={24} />
                        </div>
                        <p>
                            Tech Stack
                        </p>
                    </div>
                    <div className={style.desc}>
                        Technologies with I work
                    </div>
                </div>
                <div className={`${style.frontend} ${style.box}`}>
                    <div className={style.title}>
                        <div className={style.icon}>
                            <FaCode size={TechTitleIconSize} />
                        </div>
                        <p>Frontend</p>
                    </div>
                    <div className={style.stack}>
                        {
                            techStack['frontend'].map((val, index) => {
                                const Icon = val.icon
                                return (
                                    <div key={index} className={style.icon}>
                                        <Icon size={TechIconSize} style={{ color: `${val.color}` }} />
                                        <div className={style.tooltip}>
                                            {val.name}
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
                <div className={`${style.backend} ${style.box}`}>
                    <div className={style.title}>
                        <div className={style.icon}>
                            <FaCode size={TechTitleIconSize} />
                        </div>
                        <p>Backend</p>
                    </div>
                    <div className={style.stack}>
                        {
                            techStack['backend'].map((val, index) => {
                                const Icon = val.icon
                                return (
                                    <div key={index} className={style.icon}>
                                        <Icon size={TechIconSize} style={{ color: `${val.color}` }} />
                                        <div className={style.tooltip}>
                                            {val.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className={`${style.tools} ${style.box}`}>
                    <div className={style.title}>
                        <div className={style.icon}>
                            <FaCode size={TechTitleIconSize} />
                        </div>
                        <p>Tools</p>
                    </div>
                    <div className={style.stack}>
                        {
                            techStack['tools'].map((val, index) => {
                                const Icon = val.icon
                                return (
                                    <div key={index} className={style.icon}>
                                        <Icon size={TechIconSize} style={{ color: `${val.color}` }} />
                                        <div className={style.tooltip}>
                                            {val.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default TechStack;