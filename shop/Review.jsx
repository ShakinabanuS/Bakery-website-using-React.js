import React, { useState } from 'react'
import Ratting from '../components/Ratting';
const reviewtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Grorge Oliver",
        date: "Posted on Sep 7, 2024 at 9:00 pm",
        desc: "Very good taste, Awesome taste.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Akira Mia",
        date: "Posted on Sep 1, 2024 at 7:30 pm",
        desc: "Delicious, Delivery package is super.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Louis Jack",
        date: "Posted on Aug 10, 2024 at 6:57 pm",
        desc: "My birthday came out very well because of this cake.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Lisa Gene",
        date: "Posted on Aug 4, 2024 at 11:46 am",
        desc: "The burger and samosa are so good at this place . Everyone please try this place.",
    },
    {
        imgUrl: "/src/assets/images/instructor/05.jpg",
        imgAlt: "Client thumb",
        name: "Isha Gupta",
        date: "Posted on Jul 24, 2024 at 12:00 am",
        desc: "Cupcakes are looks so cute and taste are so good.",
    },
    {
        imgUrl: "/src/assets/images/instructor/06.jpg",
        imgAlt: "Client thumb",
        name: "Kim Sarawat",
        date: "Posted on Jun 30, 2024 at 8:30 pm",
        desc: "I have tried brownies for the first time in this place only, the tastes are mouthwatering.",
    },
    {
        imgUrl: "/src/assets/images/instructor/07.jpg",
        imgAlt: "Client thumb",
        name: "Doo doo hee",
        date: "Posted on Jun 7, 2024 at 4:00 pm",
        desc: "Smoothies looks like smooth like butter.Amazing ambiance and the customer service is so good at this place.   ",
    },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 7</li>
            </ul>

            {/* desc and review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />

                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>

                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>

                                    </div>
                                </li>
                            ))
                        }

                    </ul>

                    {/* add review field */}
                    <div className='client-review'>
                        <div className='review-form'>
                            <div className='review-title'>
                                <h5>{reviewtitle}</h5>

                            </div>

                            <form action="action" className='row'>
                                <div className='col-md-4 col-12'>
                                    <input type="text" name='name' id='name' placeholder='Full Name *' />

                                </div>
                                <div className='col-md-4 col-12'>
                                    <input type="email" name='email' id='email' placeholder='Your Email *' />

                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='rating'>
                                        <span className='me-2'>Your Rating </span>
                                        <Ratting />

                                    </div>

                                </div>
                                <div className='col-md-12 col-12'>
                                    <textarea name="message" id="message" rows="8" placeholder='Type Here Message'>

                                    </textarea>

                                </div>

                                <div className='col-12'>
                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

                {/* description */}
                <div className='description'>
                    <p>The cake is a combination of chocolate buttercream and mock-devil’s food cake. You know the Devil’s Food chocolate cake you get at a restaurant or even from a box mix? This is that exact cake, only completely homemade. Notice the reddish tint? That’s where the name Devil’s Food comes from. The baking soda in this recipe reacts with the natural cocoa powder, which results in the reddish color. More on the science behind using dutch-process vs. natural cocoa powder here, if you’re interested.</p>

                    <div className='post-items'>
                        {/* <div className='post-thumb'>
                            <img src="/src/assets/images/shop/01.jpg" alt="" />

                        </div> */}
                        {/* <div className='post-content'>
                            <ul className='lab-ul'>
                                <li>Donec non est at libero vulputate rutrum.</li>
                                <li>Morbi ornare lectus quis justo gravida semper.</li>
                                <li>Pellentesque aliquet,sem eget laoreet ultrices.</li>
                                <li>Nulla tellus mi, vulputate adipiscing curcus eu, suscript id nulla.</li>
                                <li>Donec a neque libero.</li>
                                <li>Pellentesque alliquet, sem eget laoreet ultrices.</li>
                                <li>Morbi ornare lectus quis justo gravida semper.</li>
                               

                            </ul>

                        </div> */}

                    </div>

                    <p>This Chocolate Cake Is:
                        Extra moist,
                        2 layers, but can be made as 3 layers or as a sheet cake,
                        Soft with a velvety crumb,
                        Deeply flavorful,
                        Unapologetically rich, just like my flourless chocolate cake,
                        Covered with creamy chocolate buttercream.</p>

                </div>

            </div>

        </>
    )
}

export default Review