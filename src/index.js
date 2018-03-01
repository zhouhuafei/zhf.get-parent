const getDomArray = require('zhf.get-dom-array');

function getParent(element, parentSelector) {
    element = getDomArray(element)[0];
    // 第一参数不符合规范
    if (!element) {
        console.log('第一个参数有误');
        return null;
    }
    // 没有第二参数默认选取直接父级
    if (!parentSelector) {
        return element.parentNode;
    }
    if (typeof parentSelector === 'string') {
        element = element.parentNode;
        switch (parentSelector.charAt(0)) {
            case '.':// 通过class获取父级
                while (element) {
                    if (!element.classList) { // element === document
                        console.log('no find class');
                        return null;
                    }
                    if (element.classList.contains(parentSelector.substring(1))) {
                        return element;
                    }
                    element = element.parentNode;
                }
                break;
            case '#':// 通过id获取父级
                while (element) {
                    if (element === document) {
                        console.log('no find id');
                        return null;
                    }
                    if (element.id === parentSelector.substring(1)) {
                        return element;
                    }
                    element = element.parentNode;
                }
                break;
            default:// 通过标签名获取父级
                while (element) {
                    if (element === document) {
                        console.log('no find tagName');
                        return null;
                    }
                    if (element.tagName.toLowerCase() === parentSelector) {
                        return element;
                    }
                    element = element.parentNode;
                }
                break;
        }
    }
    return null;
}

module.exports = getParent;
