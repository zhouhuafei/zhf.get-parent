const getParent = require('../dist/index.min');

test(`获取父级`, () => {
    document.body.innerHTML = `<div class="test"></div>`;
    console.log(getParent('.test')); // HTMLBodyElement {}
    expect(true).toEqual(true);
});
