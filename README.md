# typeform-embed-feedback

Adding CSS in JS example (Avoid css file delivery overhead):

```
var css = `body {
    color: red;
    font-size: 30px;
  }`;

var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
```
