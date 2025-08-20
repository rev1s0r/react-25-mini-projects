import React, { useEffect, useState } from 'react';
import './styles.css';

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products) {
                setData(data.products);
                setLoading(false);
            }

        } catch (error) {
            setError('Failed to fetch data: ' + error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    function handleScrollPercentage() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        console.log(howMuchScrolled, height);

        setScrollPercentage(((howMuchScrolled / height) * 100));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        }
    }, [])

    if(error) {
        return <div>Error: {error}</div>
    }

    if(loading) {
        return <div>Loading...</div>
    }
    return <div>
        custom scroll 
        <div className="top-container">
            <h1>current scroll indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
        </div>
        <div className="data-container" style={{ textAlign: 'center' }}>
            {
                data && data.length > 0 ?
                    data.map(item => <p key={item.id}>{item.title}</p>)
                    : null
            }
        </div>
    </div>
}