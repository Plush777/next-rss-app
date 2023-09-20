'use client';

import { useEffect, useState } from 'react';
import './articles.css';

export default function Articles() {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UC-i2ywiuvjvpTy2zW-tXfkw');
                const data = await res.json();
                const items = data.items;
                setItems(items);
                setIsLoading(false);
                console.log(items);
            } catch(error) {
                setError(true);
                setIsLoading(false);
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const apiDate = items.map((item) => (item.pubDate));

    const dateOnlyArray = apiDate.map(dateString => {
        const dateParts = dateString.split(" ");
        return dateParts[0]; // 날짜 부분만 추출
    });

    // console.log(dateOnlyArray);

    if (error) {
        return (
            <section>
                <div>
                    <h3>Feeds</h3>
                    <ul>
                        <p>Failed to fetch data, please try again later.</p>
                    </ul>
                </div>
            </section>
        );
    }

    return(
        <>
            <section>
                <div className='container'>
                    <h3 className='latest'>Feeds</h3>
                    {isLoading ?
                        <p>Loading...</p>
                        :
                        <ul className='apiList'>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} target={"_blank"}>
                                        <div className='thumbnailArea'>
                                            <img src={item.thumbnail} alt={item.title} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="row">
                                            <span className='author'>By {item.author}</span>
                                            <span className='date'>{dateOnlyArray[index]}</span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        </>
    )
}