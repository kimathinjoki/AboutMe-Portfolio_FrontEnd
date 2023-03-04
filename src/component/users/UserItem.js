import React from "react";


function UserItem(avatar_url){
    return(
        <div>
            <img src={avatar_url} alt="Avatar" />

        </div>
    )
}

export default UserItem;