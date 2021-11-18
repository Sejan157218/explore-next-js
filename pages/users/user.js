import React from 'react';

const user = ({users}) => {
    return (
        <div>
            <h1>total user : {users.length} </h1>
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