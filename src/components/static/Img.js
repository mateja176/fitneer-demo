class Img {
  constructor ( {
    src = "",
    className = "",
    id = "image",
    tag = "img",
    border = "none",
    borderRadius = "0",
    background = "white",
    width = "auto",
    height = "auto",
    display = "block",
    justifySelf = "auto",
    alignSelf = "auto",
    gridArea = "auto"
  } = {} ) {
    this.src = src;
    this.className = className;
    this.id = id;
    this.tag = tag;
    this.border = border;
    this.borderRadius = borderRadius;
    this.background = background;
    this.width = width;
    this.height = height;
    this.display = display;
    this.justifySelf = justifySelf;
    this.alignSelf = alignSelf;
    this.gridArea = gridArea;

    this.html = `<${this.tag} src="${this.src}" class="${this.className}" id="${this.id}">`;

    this.css = `<style>
    #${this.id} {
      border: ${this.border};
      border-radius: ${this.borderRadius};
      background: ${this.background};
      width: ${this.width};
      height: ${this.height};
      display: ${this.display};
      justify-self: ${this.justifySelf};
      align-self: ${this.alignSelf};
      grid-area: ${this.gridArea};
    }
    </style>
    `;

    this.content = this.html + this.css;
  }
}

export default Img;
