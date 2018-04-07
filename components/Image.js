class Image {
  constructor({
    id = "image",
    tag = "img",
    src = "",
    background = "white",
    width = "auto",
    height = "auto",
    display = "block",
    borderRadius = "0%"
  } = {}) {
    this.id = id;
    this.tag = tag;
    this.src = src;
    this.background = background;
    this.width = width;
    this.height = height;
    this.display = display;
    this.borderRadius = borderRadius;

    this.html = `<${this.tag} src="${this.src}" id="${this.id}">`;

    this.css = `<style>
  #${this.id} {
    background: ${this.background};
    width: ${this.width};
    height: ${this.height};
    display: ${this.display};
    border-radius: ${this.borderRadius};
  }
</style>
    `;
    this.component = this.html + this.css;
  }

  updateSrc(src = "") {
    this.src = src;
    document.querySelector(`#${this.id}`).src = src;
  }
}

export default Image;
