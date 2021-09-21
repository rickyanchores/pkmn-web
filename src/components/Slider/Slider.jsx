import React from 'react'

const Slider = () => {

    const sliderImage = [
        {
            name: "slide1",
            img: "/Users/rickyanchores/Desktop/DevRicky/Projects 2021/pkmn-web/src/assets/Slide 1 Content.png"        }
    ]

    return (
        <div className="Slider">
            <h3>This is the Slider</h3>
            <img src={sliderImage.img} alt="slider1" />
        </div>
    )
}

export default Slider;
