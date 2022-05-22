import React from 'react';
import people1 from '../images/reviewr/people1.png'
import people2 from '../images/reviewr/people2.png'
import people3 from '../images/reviewr/people3.png'
import CustomerReview from './CustomerReview';

const Review = () => {
    const reviews = [
        {
            _id:1,
            name: 'Wilson Json',
            ClientReview:'Best bike shop ever! Very helpful service. They staff remember my name despite just coming in a few times (Dave and Caleb). They understand that Im a student and are flexible to my schedule.',
            location: "London",
            img:people1
        },
        {
            _id:2,
            name: 'Kate Perry',
            ClientReview:'Great local bike shop. John and Dave know bikes! What you pay more for as opposed to the online "bargains" ends up being less when you add in service, convenience, and availability of quality parts.',
            location: "London",
            img:people2
        },
        {
            _id:3,
            name: 'Sharmin ',
            ClientReview:'Super fast and quality service. The staff is super friendly and helpful. My family loves this bike shop and will continue to keep coming back.',
            location: "China",
            img:people3
        },
    ]
    return (
        <section>
        <div>
            <div>
                <h4 className='text-xl text-primary text-center font-bold'>Our Client Review</h4>
                 </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-8'>
            {
                reviews.map(review => <CustomerReview
                key={review._id}
                review={review}
                ></CustomerReview>)
            }
        </div>
        </section>
    );
};

export default Review;