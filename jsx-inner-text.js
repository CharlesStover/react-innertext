'use strict';

var innerText = function(jsx) {
  if (jsx === null) {
    return '';
  }
  if (typeof jsx === 'number') {
    return jsx.toString();
  }
  if (typeof jsx === 'string') {
    return jsx;
  }
  var text = '';
  if (
    jsx.props &&
    jsx.props.children
  ) {
    if (Array.isArray(jsx.props.children)) {
      var childrenLength = jsx.props.children.length;
      for (var x = 0; x < childrenLength; ++x) {
        text += innerText(jsx.props.children[x]);
      }
    }
    else {
      text += innerText(jsx.props.children);
    }
  }
  return text;
};

innerText.default = innerText;

module.exports = innerText;
