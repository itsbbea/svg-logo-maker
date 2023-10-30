const SVGLogo = require('./shapes')

describe('SVGLogo', () => {
    test('should generate SVG markup correctly', () => {
        const logo = new SVGLogo(200, 200);
        // Add shapes to the logo
        // ...
        const svgMarkup = logo.generateSVG();
        expect(svgMarkup).toMatchSnapshot(); 
    });
});

// Shape.test.js
const Shape = require('./shapes');

describe('Shape', () => {
    test('should create a shape correctly', () => {
        const shape = new Shape('circle', 100, 100, 'blue');
        expect(shape).toMatchObject({
            type: 'circle',
            x: 100,
            y: 100,
            color: 'blue',
        });
    });
});

  // Export the classes
  module.exports = { SVGLogo, Shape };
  