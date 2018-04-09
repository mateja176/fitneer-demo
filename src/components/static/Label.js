class Label {
  constructor({
    className = "",
    id = "anchor",
    tag = "label",
    element = "",
    innerHtml = "My Label",
    margin = "0",
    padding = "0",
    background = "transparent",
    fontSize = "100%",
    color = "black",
    width = "auto",
    height = "auto",
    display = "block",
    justifySelf = "auto",
    alignSelf = "auto",
    gridArea = "auto",
    textDecoration = "none"
  } = {}) {
    this.className = className;
    this.id = id;
    this.tag = tag;
    this.element = element;
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
    this.fontSize = fontSize;
    this.textDecoration = textDecoration;

    this.html = `<${this.tag} for="${ this.element }" class="${ this.className }" id="${ this.id }">${
        this.innerHtml
      }</${ this.tag }>`;

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
      font-size: ${this.fontSize};
      font-size: ${this.fontSize};
      text-decoration: ${this.textDecoration};
    }
    </style>
    `;

    this.content = this.html + this.css;

  }
}

export default Label;
