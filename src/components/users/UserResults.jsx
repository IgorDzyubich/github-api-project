import React, { useContext } from 'react';
import GithubContext from "../../context/Github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
    const {loading, users} = useContext(GithubContext)

    if (!loading) {
        return (
            <div className={'grid grid-cols-1 gap-8'}>
                {
                    users.map(
                        (user, key) => (
                            <UserItem key={key} user={user}/>
                        )
                    )
                }
            </div>
        );
    } else {
        return (<Spinner/>)
    }
};

export default UserResults;