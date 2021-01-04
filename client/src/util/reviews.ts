export type Review = {
	name: string;
	message: string;
	rating: number;
};

// cSpell: disable
const reviews: Array<Review> = [
	{
		name: 'Test 1',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' Phasellus cursus ipsum ut dolor commodo, a lacinia felis fringilla.' +
			' Vestibulum pharetra enim vitae euismod volutpat. Nullam non fermentum justo.' +
			' Pellentesque vulputate tortor eget diam ornare, at condimentum mi luctus.' +
			' Nulla facilisi. Fusce lectus ligula, consequat nec sapien sed, fermentum ornare orci.' +
			' Quisque est metus, tincidunt vitae tempor eget, accumsan faucibus sapien. ',
		rating: 4
	},
	{
		name: 'Test 2',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' Phasellus cursus ipsum ut dolor commodo, a lacinia felis fringilla.' +
			' Vestibulum pharetra enim vitae euismod volutpat. Nullam non fermentum justo.' +
			' Pellentesque vulputate tortor eget diam ornare, at condimentum mi luctus.' +
			' Nulla facilisi. Fusce lectus ligula, consequat nec sapien sed, fermentum ornare orci.' +
			' Quisque est metus, tincidunt vitae tempor eget, accumsan faucibus sapien. ',
		rating: 3
	},
	{
		name: 'Test 3',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' Phasellus cursus ipsum ut dolor commodo, a lacinia felis fringilla.' +
			' Vestibulum pharetra enim vitae euismod volutpat. Nullam non fermentum justo.' +
			' Pellentesque vulputate tortor eget diam ornare, at condimentum mi luctus.' +
			' Nulla facilisi. Fusce lectus ligula, consequat nec sapien sed, fermentum ornare orci.' +
			' Quisque est metus, tincidunt vitae tempor eget, accumsan faucibus sapien. ',
		rating: 5
	}
];

export default reviews;
