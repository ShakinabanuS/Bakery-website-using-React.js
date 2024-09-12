import React from 'react';

const title = " Most Popular Tags"

const tagsList = [
    { link: "#", text: "Coffee Bites", }, 
    { link: "#", text: "Cakes world", }, 
    { link: "#", text: "Birthday brownies", }, 
    { link: "#", text: "Party with pastry", }, 
    { link: "#", text: "Cupcakes with claps", }, 
    { link: "#", text: "Mocktail mood", }, 
    { link: "#", text: "Smooth like smoothies", }, 
    { link: "#", text: "Have more pies", }, 
    { link: "#", text: "Enjoy Eating", },
];

const Tags = () => {
    return (
        <div className='widget widget-tags'>
            <div className='widget-header'>
                <h5 className='title'>{title}</h5>

            </div>
            <ul className='widget-wrapper'>
                {
                    tagsList.map((val, i) => (
                        <li key={i}><a href={val.link}>{val.text}</a></li>
                    ))
                }

            </ul>

        </div>
    )
}

export default Tags