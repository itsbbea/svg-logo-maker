// Import the classes you want to test
const { SVGLogo, Shape } = require('./shapes.test'); 

class Shape {
    constructor() {
      this.shape = "";
    }
    setColor(colorString) {
    this.color =colorString;
    }
  }

  class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};

module.exports = {Circle, Square, Triangle}