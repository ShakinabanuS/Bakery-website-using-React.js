import React, { useState } from 'react';
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Coffee',
        title: 'Cappuccino',
        author: 'assets/images/course/author/01.jpg',
        brand: '',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Cupcakes',
        title: 'Chocolate cupcake',
        author: 'assets/images/course/author/02.jpg',
        brand: '',
        price: '$120.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Cookies',
        title: 'Choco chips cookie',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: '',
        price: '$100.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Cupcakes',
        title: 'Caramel & chocolate cupcake',
        author: 'assets/images/course/author/04.jpg',
        brand: '',
        price: '$90.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Coffee',
        title: 'Latte',
        author: 'assets/images/course/author/05.jpg',
        brand: '',
        price: '$185.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Pastries',
        title: 'Wheat bread caramel',
        author: 'assets/images/course/author/06.jpg',
        brand: '',
        price: '$70.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Cupcakes',
        title: 'Strawberry cupcake ',
        author: 'assets/images/course/author/01.jpg',
        brand: '',
        price: '$80.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Coffee',
        title: 'Americano',
        author: 'assets/images/course/author/02.jpg',
        brand: '',
        price: '$150.00',
        id: 8,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/09.jpg',
        cate: 'Cookies',
        title: 'Jam cookies',
        author: 'assets/images/course/author/02.jpg',
        brand: '',
        price: '$110.00',
        id: 9,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/pastry1.jpg',
        cate: 'pastries',
        title: 'Chocolate stuffed bread',
        author: 'assets/images/course/author/02.jpg',
        brand: '',
        price: '$90.00',
        id: 10,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/cookie.jpg',
        cate: 'Cookies',
        title: 'Wheat & white chocolate cookie',
        author: 'assets/images/course/author/02.jpg',
        brand: '',
        price: '$85.00',
        id: 11,
    },

    {
        imgUrl: 'src/assets/images/categoryTab/pastry.jpg',
        cate: 'pastries',
        title: 'Egg soft bun',
        author: 'assets/images/course/author/02.jpg',
        brand: '',
        price: '$70.00',
        id: 12,
    },
];

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

    // category based filtering
    const filterItem = (categItem) => {
        const updateItem = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });

        setItems(updateItem)

    };
    return (
    <div className='course-section style-3 padding-tb'>
        {/* shapes */}
        <div className='course-shape one'>
            <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
        </div>
        <div className='course-shape two'>
            <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
        </div>

        {/* main section */}
        <div className='container'>
            {/* section header */}
            <div className='section-header'>
                <h2 className='title'>{title}</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={() => setItems(ProductData)}>All</li>
                        <li onClick={() => filterItem("Coffee")}>Coffees</li>
                        <li onClick={() => filterItem("Cupcakes")}>Cup cakes</li>
                        <li onClick={() => filterItem("Cookies")}>Cookies</li>
                        <li onClick={() => filterItem("Pastries")}>Pastries</li>

                    </ul>
                </div>

            </div>

            {/* section body */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                    {
                        items.map((product) => <div key={product.id} className='col'>
                            <div className='course-item style-4 '>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                        <img src={product.imgUrl} alt="" />
                                        <div className='course-category'>
                                            <div className='course-cate'>
                                                <a href="#">{product.cate}</a>

                                            </div>
                                            <div className='course-review'>
                                                <Ratting/>

                                            </div>

                                        </div>

                                    </div>

                                    {/* content */}
                                    <div className='course-content'>
                                        <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                        <div className='course-footer'>
                                            <div className='course-author'>
                                            <Link to="/" className='ca-name'>{product.brand}</Link>
                                            </div>
                                            <div className='course-price'>
                                                {product.price}

                                            </div>
                                            

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div> )
                    }

                </div>

            </div>

        </div>
    </div>
    );
};

export default CategoryShowCase