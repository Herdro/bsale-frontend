import React from 'react'
import "@styles/Footer.scss";
import { useSearchParams } from 'react-router-dom';

const Footer = () => {
    let [searchParams] = useSearchParams();
    let page
    if (!searchParams.has('page')) {
        page = 1;
    } else {
        page = searchParams.get('page')
    }
    return (
        <footer>
            <div className="footer-nav">
            {page > 1 && <a href={`?${searchParams.toString(searchParams.set('page', Number(page) - 1))}`} >←</a>}
            <p>{page}</p>
            <a href={`?${searchParams.toString(searchParams.set('page', Number(page) + 1))}`} >→</a>
            </div>
        </footer>
    );
}

export default Footer;