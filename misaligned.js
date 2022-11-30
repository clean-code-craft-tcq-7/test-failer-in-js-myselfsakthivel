const {expect} = require('chai')

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const finalMap = {};
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
            finalMap[i * 5 + j] = `${majorColors[i]} | ${minorColors[j]}`;
        }
    }
    return finalMap;
}

result = print_color_map();
console.log(result);
console.log('All is well (maybe!)');
