class Layout {
  constructor({
    id = "layout",
    tag = "section",
    content = "",
    background = "white",
    width = "auto",
    height = "auto",
    display = "grid",
    justifyItems = "center",
    alignItems = "center",
    gridTemplateColumns = "none",
    gridTemplateRows = "none"
  } = {}) {
    this.id = id;
    this.tag = tag;
    this.content = content;
    this.background = background;
    this.width = width;
    this.height = height;
    this.display = display;
    this.justifyItems = justifyItems;
    this.alignItems = alignItems;
    this.gridTemplateColumns = gridTemplateColumns;
    this.gridTemplateRows = gridTemplateRows;

    this.html = `<${this.tag} id="${this.id}">${this.content}</${this.tag}>`;

    this.css = `<style>
  #${this.id} {
    background: ${this.background};
    width: ${this.width};
    height: ${this.height};
    display: ${this.display};
    justify-items: ${this.justifyItems};
    align-items: ${this.alignItems};
    grid-template-columns: ${this.gridTemplateColumns};
    grid-template-rows: ${this.gridTemplateRows};
  }
</style>
    `;
    this.component = this.html + this.css;
  }

  updateContent (content = "") {
    this.content = content;
    document.querySelector(`#${this.id}`).innerHTML = content;
  }

}

export default Layout;
