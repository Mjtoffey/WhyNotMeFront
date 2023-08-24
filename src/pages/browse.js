import Head from 'next/head';
import Link from "next/link";
import styles from "src/styles/welcome.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const users = [
];

export default function Home() {
    return (
        <div>
            <Head>
                <title>User Browse Page</title>
            </Head>
            <header style={{ backgroundColor: '#35424a', color: 'white', padding: '10px', textAlign: 'center' }}>
                <h1>User Browse Page</h1>
            </header>
            <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
                {users.map((user) => (
                    <div key={user.id} style={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', display: 'inline-block', width: 'calc(33.33% - 20px)', boxSizing: 'border-box', verticalAlign: 'top' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 10px' }}>
                            <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{user.name}</div>
                        <div style={{ color: '#666' }}>{user.profession}</div>
                        <a href={user.profileLink} style={{ display: 'block', textAlign: 'center', marginTop: '10px', textDecoration: 'none', color: '#35424a', fontWeight: 'bold' }}>View Profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
}