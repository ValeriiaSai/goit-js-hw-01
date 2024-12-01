// function getElementWidth(content, padding, border) {
//content = Number.parseFloat(content);
//padding = Number.parseFloat(padding);
//border = Number.parseFloat(padding);
//const
//console.log(content + 2 * padding + 2 * border);
//}

function getElementWidth(content, padding, border) {
  console.log(
    Number.parseFloat(content) +
      Number.parseFloat(padding) * 2 +
      Number.parseFloat(border) * 2
  );

  //const contentWidth = parseFloat(content);
  //const paddingValue = parseFloat(padding);
  //const borderValue = parseFloat(border);

  //console.log(contentWidth + 2 * paddingValue + 2 * borderValue);
}
getElementWidth('50px', '8px', '4px');
getElementWidth('60px', '12px', '8.5px');
getElementWidth('200px', '0px', '0px');
