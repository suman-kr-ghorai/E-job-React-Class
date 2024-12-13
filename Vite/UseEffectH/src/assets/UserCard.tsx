import React from 'react';

interface UserCardProps {
    data: {
        id: number;
        title: string;
        body: string;
    } | null;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
    if (!data) return null; 

    return (
        <div className="card ">
            <div className="card-header">
                <h4>Details of User</h4>
            </div>
            <div className="card-body">
                <p><strong>Id:</strong> {data.id}</p>
                <p><strong>Title:</strong> {data.title}</p>
                <p><strong>Body:</strong> {data.body}</p>
            </div>
        </div>
    );
};

export default UserCard;
