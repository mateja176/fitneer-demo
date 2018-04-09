import Text from './Text.js';

class Anchor extends Text {
  constructor({
    className = "",
    id = "anchor",
    tag = "a",
    innerHtml = "My Link",
    background = "transparent",
    color = "black",
    width = "auto",
    height = "auto",
    display = "block",
    justifySelf = "auto",
    alignSelf = "auto",
    gridArea = "auto",
    textDecoration = "none"
  } = {}) {
    super({
      className: className,
      id: id,
      tag: tag,
      innerHtml: innerHtml,
      background: background,
      color: color,
      width: width,
      height: height,
      display: display,
      justifySelf: justifySelf,
      alignSelf: alignSelf,
      gridArea: gridArea,
      childStyles: `
        text-decoration: ${textDecoration}
      `
    } );
    this.textDecoration = textDecoration;
  }
}

export default Anchor;
