 class options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
 
    
  }

  newDiv(text) {
    let div = document.createElement('div');

    div.style.height = this.height + 'px';
    div.style.width = this.width + 'px';
    div.style.background = this.bg;
    div.style.fontSize = this.fontSize + 'px';
    div.style.textAlign = this.textAlign;
    div.textContent = text;
    document.body.appendChild(div);


 }

}

 let divOne = new options(100,300,'red',15,'left');
     divOne.divNew('Here we are, dont turn away now!');


