import React from "react";
import {NavLink} from "react-router-dom";



const AccountsFollow = (props) => {
    let path = "/Follow/" + props.id
    return (
        <div>
            <div>
                {props.name}
            </div>
        </div>
    )
}


export default AccountsFollow;