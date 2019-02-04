import React from 'react';
import Swiper from 'react-id-swiper';
import Slide from './Slide'

export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }

    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    render() {

        const setting = {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',

            coverflowEffect: {
                rotate: 50,
                slideShadows: true,
                depth: 150,
                stretch: 30,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            renderPrevButton: () => <button className="swiper-button-prev"></button>,
            renderNextButton: () => <button className="swiper-button-next"></button>,
        };

        return (
            <div>
            <Swiper className="swiper-container" {...setting} >
                    <Slide />
                    <div className="swiper-slide" style={{backgroundImage:"url(https://via.placeholder.com/800x800.png?text=Film1)"}}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film2)" }}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film3)" }}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film4)" }}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film5)" }}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film6)" }}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film7)" }}></div>
                    <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film8)" }}></div>
                            
            </Swiper>
            </div>
        );
    }
}

