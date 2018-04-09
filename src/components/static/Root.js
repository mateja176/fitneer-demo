class Root {
  constructor ( {
    className = "",
    id = "root",
    tag = "div",
    innerHtml = "",
    margin = 0,
    padding = 0,
    background = "white",
    color = "black",
    width = "auto",
    height = "auto",
    display = "block",
    justifySelf = "auto",
    alignSelf = "auto",
    gridArea = "auto",
    textAlign = "center",
    childStyles = ""
  } = {} ) {
    this.className = className;
    this.id = id;
    this.tag = tag;
    this.innerHtml = innerHtml;
    this.margin = margin;
    this.padding = padding;
    this.background = background;
    this.color = color;
    this.width = width;
    this.height = height;
    this.display = display;
    this.justifySelf = justifySelf;
    this.alignSelf = alignSelf;
    this.gridArea = gridArea;
    this.textAlign = textAlign;
    this.childStyles = childStyles;

    this.html = `<${this.tag} class="${this.className}" id="${this.id}">${this.innerHtml}</${this.tag}>`;

    this.css = `<style>
    #${this.id} {
      margin: ${this.margin};
      padding: ${this.padding};
      background: ${this.background};
      color: ${this.color};
      width: ${this.width};
      height: ${this.height};
      display: ${this.display};
      justify-self: ${this.justifySelf};
      align-self: ${this.alignSelf};
      grid-area: ${this.gridArea};
      text-align: ${this.textAlign};
      ${this.childStyles}
    }
    </style>
    `;

    this.content = this.html + this.css;

  }

}

export default Root;
