import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId}=useParams();
    const[friend,setFriend]=useState({});
    useEffect(()=>{
       
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h3>This is friend details:{friendId}</h3>
            <h3>Name{friend.name}</h3>
            <h2>Email{friend.email}</h2>
        </div>
    );
};

export default FriendDetail;