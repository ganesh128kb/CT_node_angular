var parser = require('node-markdown');




var html2 = 'Using **markdown**';
html2 += ' focus on writing ';
html2 += ' *not* markup!';
html2 += '\n# Header 1 element';
html2 += '\n## Header 2 element';
html2 += '\nl. Chocolate';
html2 += '\n ';
html2 += '\n Some plain text which';
html2 += '\n should be in a ';
html2 += '\n paragraph in the list. ';
html2 += '\n ';
genHtml = parser.Markdown(html2);
console. log (genHtml);



//console.log(html);