import Root from "./Root.js";

class Text extends Root {
  constructor({
    className = "",
    id = "text",
    tag = "p",
    innerHtml = "My Text",
    margin = "0",
    padding = "0",
    background = "transparent",
    fontSize = "100%",
    textDecoration = "none",
    color = "black",
    width = "auto",
    height = "auto",
    display = "block",
    justifySelf = "auto",
    alignSelf = "auto",
    gridArea = "auto"
  } = {}) {
    super({
      className: className,
      id: id,
      tag: tag,
      innerHtml: innerHtml,
      margin: margin,
      padding: padding,
      background: background,
      color: color,
      width: width,
      height: height,
      display: display,
      justifySelf: justifySelf,
      alignSelf: alignSelf,
      gridArea: gridArea,
      childStyles: `
        font-size: ${fontSize};
        text-decoration: ${textDecoration};
      `
    } );

    this.fontSize = fontSize;
    this.textDecoration = textDecoration;

  }

}

export default Text;
