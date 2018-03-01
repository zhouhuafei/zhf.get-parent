# 获取父级
```
const getParent = require('zhf.get-parent');

document.body.innerHTML = `<div class="test"></div>`;
console.log(getParent('.test')); // HTMLBodyElement {}
```
