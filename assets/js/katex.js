import katex from 'katex';

import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';

document.addEventListener('DOMContentLoaded', function() {
  renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true},
    ],
    throwOnError : false,
  });
});
