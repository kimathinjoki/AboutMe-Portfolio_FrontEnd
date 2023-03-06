import React from "react";


function UserItem(avatar_url, name, email, id){
    return(
        <div>
            
            <div key={id} className="projects-card">
                <div className="img">
					<img src={avatar_url} alt="avatar" title='user-avatar' />
				</div>
                <p className="project-title">{name}</p>
                <p>{email}</p>
                <button>VIEW</button>
             
            </div> 

        </div>
    )
}

export default UserItem;