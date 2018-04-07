class Paragraph {
  constructor({
    id = "paragraph",
    tag = "p",
    content = "My Paragraph",
    background = "white",
    width = "auto",
    height = "auto",
    display = "block"
    } = {}) {
    this.id = id;
    this.tag = tag;
    this.content = content;
    this.background = background;
    this.width = width;
    this.height = height;
    this.display = display;

    this.html = `<${this.tag} id="${this.id}">${this.content}</${this.tag}>`;

    this.css = `<style>
  #${this.id} {
    background: ${this.background};
    width: ${this.width};
    height: ${this.height};
    display: ${this.display};
  }
</style>
    `;
    this.component = this.html + this.css;
  }

  updateContent(content = "") {
    this.content = content;
    document.querySelector(`#${this.id}`).innerHTML = content;
  }
}

export default Paragraph;
