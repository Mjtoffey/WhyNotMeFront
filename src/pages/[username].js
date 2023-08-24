import React from 'react';
import { useRouter } from 'next/router';

const UserProfilePage = () => {
    const router = useRouter();
    const { username } = router.query;

    const userPosts = [
    ];

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>

            <button onClick={() => alert('Create Post')}>Create Post</button>

            <h2>Posts</h2>
            <ul>
                {userPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfilePage;