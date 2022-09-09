import React, { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import Btnslider from './Btnslider';

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

            setSlideAnim({ index: slideAnim.index + 1, inProgress: true })

            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index + 1, inProgress: false }) // il faut faire slideAnim.index + 1  car ce state a été instancié avant qu'il soit mis à jour

            }, 400);
        } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {

            setSlideAnim({ index: 1, inProgress: true })

            setTimeout(() => {
                setSlideAnim({ index: 1, inProgress: false })
            }, 400);

        }
    }

    const prevSlide = () => {
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {

            setSlideAnim({ index: slideAnim.index - 1, inProinProgress: true })

            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index - 1, inProgress: false }) // il faut faire slideAnim.index + 1  car ce state a été instancié avant qu'il soit mis à jour
            }, 400);

        } else if (slideAnim.index === 1 && !slideAnim.inProgress) {

            setSlideAnim({ index: dataSlider.length, inProgress: true })

            setTimeout(() => {
                setSlideAnim({ index: dataSlider.length, inProgress: false }) // il faut faire slideAnim.index + 1  car ce state a été instancié avant qu'il soit mis à jour
            }, 400);

        }
    }

    const moveDot = (index) => {
        setSlideAnim({index: index, inProgress: false})
    }

    return (
        <div>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={`/Imgs/img${index + 1}.jpg`} alt='' />
                        {/* <img src={process.ENV.PUBLIC_URL`/Imgs/img${index+1}.jpg`} alt='' /> for production */}
                    </div>
                )
            })}
            <Btnslider moveSlide={nextSlide} direction={'next'} />
            <Btnslider moveSlide={prevSlide} direction={'prev'} />
            <div className='container-dots'>
                {Array.from({length: 5}).map((item, index) => {
                    return <button 
                        className={slideAnim.index === index + 1 ? 'dot active' : 'dot'}
                        onClick={() => moveDot(index + 1) }
                        />
                })}
            </div>
        </div>
    )
}
