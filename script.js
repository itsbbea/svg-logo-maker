class Shape {
    constructor(type, x, y, color) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

addShape(Shape); {
    this.shapes.push(Shape);
}

generateSVG(); {
    let svg = `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;

    for (const shape of this.shapes) {
        if (shape.type === "circle") {
            svg += `<circle cx="${shape.x}" cy="${shape.y}" r="50" fill="${shape.color}" />`;
        } else if (shape.type === "rectangle") {
            svg += `<rect x="${shape.x}" y="${shape.y}" width="100" height="50" fill="${shape.color}" />`;
        }
    }

    svg += `</svg>`;
    return svg;
}
