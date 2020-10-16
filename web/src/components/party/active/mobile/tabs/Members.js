import React from 'react';

const hostTag = <strong style={{color: "#1DB954"}}>HOST</strong>

const Members = ({ members, host }) => (
    <div style={{paddingLeft: '3$'}}>
        <h2 className='title has-text-light'>Members</h2>

        <ul>
            {members.map(member => {
                const isHost = member.id === host.id;

                return <li key={member.id}><h4>{member.name} {isHost && hostTag}</h4></li>
            })}
        </ul>
    </div>   
)
 
export default Members;