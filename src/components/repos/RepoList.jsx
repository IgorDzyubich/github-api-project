import PropTypes from "prop-types";
import React from 'react';
import RepoItem from "./RepoItem";

const RepoList = ({repos}) => {

    return (
        <div className={'rounded-lg shadow-lg card bg-base-100'}>
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title text-primary">
                    Latest Repositories
                </h2>
                <div className="grid gap-4 grid-cols-1">
                    {repos.map((repo, key) => (
                        <RepoItem key={key} repo={repo}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList;