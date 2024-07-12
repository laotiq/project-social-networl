import React from "react";
import s from "./Home.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Content from "./Content/Content";
import Follow from "./Follow/Follow";


const Home = (props) => {
    return (
        <div className={s.home}>
            <div className={s.homeSection}>
                <ProfileInfo/>
            </div>
            <div className={s.homeSection}>
                <Content/>
            </div>
            <div className={s.homeSection}>
                <Follow account={props.account}/>
            </div>
        </div>
    )
}

export default Home