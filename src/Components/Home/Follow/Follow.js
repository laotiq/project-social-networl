import React from "react";
import s from "./Follow.module.css"
import AccountsFollow from "./AccountsFollow/AccountsFollow";


const Follow = (props) => {
    return (
        <div className={s.follow}>
            <div className={s.follow}>
                <h3>Follow now</h3>
            </div>
            {/*<AccountsFollow name={props.account.name} />*/}
            <img
                src='https://cdn.vox-cdn.com/thumbor/UixJG8lZQVN9qI6pBcxprYOsWeA=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68876614/26355890.6.jpeg'/>
            <div className={s.followButton}>
                <button>Follow</button>
            </div>
        </div>
    )
}

export default Follow