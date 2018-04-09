import Root from "./Root.js";

class Layout extends Root {
  constructor({
    className = "",
    id = "layout",
    tag = "section",
    innerHtml = "",
    margin = "0",
    padding = "0",
    background = "white",
    color = "black",
    width = "auto",
    height = "auto",
    display = "grid",
    justifySelf = "auto",
    alignSelf = "auto",
    gridArea = "auto",
    textAlign = "center",
    overflow = "visible",
    border = "none",
    borderRadius = "0",
    justifyItems = "center",
    alignItems = "center",
    gridTemplateColumns = "none",
    gridTemplateRows = "none",
    gridTemplateAreas = "none",
    gridGap = "0"
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
      border: border,
      borderRadius: borderRadius,
      width: width,
      height: height,
      display: display,
      justifySelf: justifySelf,
      alignSelf: alignSelf,
      gridArea: gridArea,
      textAlign: textAlign,
      childStyles: `
        overflow: ${overflow};
        justify-items: ${justifyItems};
        align-items: ${alignItems};
        grid-template-columns: ${gridTemplateColumns};
        grid-template-rows: ${gridTemplateRows};
        grid-template-areas: ${gridTemplateAreas};
        grid-gap: ${gridGap};
    `
    } );
    this.justifyItems = justifyItems;
    this.alignItems = alignItems;
    this.gridTemplateColumns = gridTemplateColumns;
    this.gridTemplateRows = gridTemplateRows;
    this.gridTemplateAreas = gridTemplateAreas;
    this.gridGap = gridGap;
  }
}

export default Layout;
