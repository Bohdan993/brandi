
import {
	// initAccordeon,
	// initModals
	initGrid,
	animateDigits
} from '../model/index.js';



import {
	// $accordeons,
	// $fields
	$grid,
	$btns,
	$digits,
	$section
} from '../view/index.js';


const app = {
	init() {
		this.ig();
		this.ad();
	},

	ig() {
		initGrid($grid, $btns);
	},
	ad(){
		animateDigits($digits, $section);
	}
}


export {
	app
}