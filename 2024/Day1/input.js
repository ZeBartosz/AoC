const path = require('path');
const fs = require('fs');


const newImput = 'puzzle_part_1.txt';
// const newImput = 'example_part_1.txt';

const input = fs
	.readFileSync(path.join(__dirname, newImput), 'utf8')
	.toString()
	.trim()
	.split('\n')
    .map(line => line.replace(/\r/g, ''));

module.exports = {
	input,
};