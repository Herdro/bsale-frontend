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
    let priceOrder = searchParams.get('priceOrder')
    let nameOrder = searchParams.get('nameOrder')
    let discount = searchParams.get('discount')
    return (
        <footer>
            <div className='footer-order'>
                {searchParams.get('priceOrder') == 'DESC' ?
                <a href={`?${searchParams.toString(searchParams.set('priceOrder', 'ASC'))}`}>price ↑</a>  :
                <a href={`?${searchParams.toString(searchParams.set('priceOrder', 'DESC'))}`}>price ↓</a>}
                {priceOrder == null ? searchParams.delete('priceOrder') : searchParams.set('priceOrder', priceOrder)}
                {searchParams.get('nameOrder') == 'DESC' ?
                <a href={`?${searchParams.toString(searchParams.set('nameOrder', 'ASC'))}`}>name ↑</a>  :
                <a href={`?${searchParams.toString(searchParams.set('nameOrder', 'DESC'))}`}>name ↓</a>}
                {nameOrder == null ? searchParams.delete('nameOrder') : searchParams.set('nameOrder', nameOrder)}
                {searchParams.get('discount') == 'DESC' ?
                <a href={`?${searchParams.toString(searchParams.set('discount', 'ASC'))}`}>discount ↑</a>  :
                <a href={`?${searchParams.toString(searchParams.set('discount', 'DESC'))}`}>discount ↓</a>}
                {discount == null ? searchParams.delete('discount') : searchParams.set('discount', discount)}
            </div>
            <div className="footer-nav">
            {page > 1 && <a href={`?${searchParams.toString(searchParams.set('page', Number(page) - 1))}`} >←</a>}
            <p>{page}</p>
            <a href={`?${searchParams.toString(searchParams.set('page', Number(page) + 1))}`} >→</a>
            </div>
        </footer>
    );
}

export default Footer;