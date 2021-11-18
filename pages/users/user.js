import React from 'react';
import Link from 'next/link'

const user = ({users}) => {
    return (
        <div>
            <h1>total user : {users.length} </h1>
            {
              users.map(user=>
                
                <p key={user.id}>{user.name} <br />
                 <Link href={`/users/${user.id}`}>
          <a>Details</a>
        </Link>
                </p>
                ) 
            }
        </div>
    );
};

export default user;

export async function getStaticProps(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return{
        props : {users}
    }
}