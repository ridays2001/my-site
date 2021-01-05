import React, { Fragment, useEffect, useState } from 'react';
import reviewsData, { Review } from '../util/reviews';
import ReviewSection from '../assets/styles/reviewSection';
import { QuoEnd, QuoStart, Star, StarFill } from '../util/icons';

type Props = { dark: boolean; className: string };

const Testimonials = ({ className, dark }: Props) => {
	const [index, setIndex] = useState(0);
	const [reviews, setReviews] = useState<Array<Review>>([]);

	useEffect(() => {
		setReviews(reviewsData);
	}, []);

	useEffect(() => {
		const lastIndex = reviews.length - 1;
		if (index < 0) setIndex(lastIndex);
		if (index > lastIndex) setIndex(0);
	}, [reviews, index]);

	return (
		<ReviewSection className={className} dark={dark ? 1 : 0}>
			<h2>Testimonials:</h2>
			<div className='row row-cols-1 row-cols-md-2 row-cols-xxl-4 align-items-start justify-content-evenly'>
				{reviews.map(({ message, name, rating }) => (
					<div className='col' key={name}>
						<div className='card'>
							<div className='card-body'>
								<div className='card-title mb-3 text-center'>
									{new Array(5).fill('x').map((_, i) => {
										if (i < rating) return <StarFill dark={dark} key={i} />;
										return <Star dark={dark} key={i} />;
									})}
								</div>
								<div className='card-text text-center'>
									<QuoStart dark={dark} className='me-2' />
									{message}
									<QuoEnd dark={dark} className='ms-2' />
									<div className='text-end'> — By {name}</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<button className='btn btn-primary'>
				<strong>+</strong> Add Your Own
			</button>
		</ReviewSection>
	);
};

export default Testimonials;
