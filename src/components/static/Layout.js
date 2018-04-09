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
    borderRadius = "0",
    justifyItems = "center",
    alignItems = "center",
    gridTemplateColumns = "none",
    gridTemplateRows = "none",
    gridTemplateAreas = "none"
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
      textAlign: textAlign,
      childStyles: `
        overflow: ${overflow};
        border-radius: ${borderRadius};
        justify-items: ${justifyItems};
        align-items: ${alignItems};
        grid-template-columns: ${gridTemplateColumns};
        grid-template-rows: ${gridTemplateRows};
        grid-template-areas: ${gridTemplateAreas}
    `
    } );
    this.borderRadius = borderRadius;
    this.justifyItems = justifyItems;
    this.alignItems = alignItems;
    this.gridTemplateColumns = gridTemplateColumns;
    this.gridTemplateRows = gridTemplateRows;
    this.gridTemplateAreas = gridTemplateAreas;
  }
}

export default Layout;
