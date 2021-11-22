const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.style.backgroundColor = "rgb(255,0,0)";
div2.style.backgroundColor = "#00ff00";

class ColorClass {
  constructor(r, g, b, name) {
    (this.r = r), (this.g = g), (this.b = b), (this.name = name);
  }
  print() {
    console.log(`rgb(${this.r},${this.g},${this.b})`);
  }
  rgb() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
  hex() {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
      16
    )}`;
  }
}

const color1 = new ColorClass(160, 24, 25, "redly");
console.log(color1);
div1.style.backgroundColor = color1.hex();
