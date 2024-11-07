const yong = {
    createElement: (tag, props, ...children) => {
        //<button type="button" onclick="handleUp()">+</button>
        //createElement('button',{type: 'button', onclick:'handleUp()'},'+')
        const elem = document.createElement(tag)
        if (props) { //객체
            for (const attrName in props) {
                elem.setAttribute(attrName, props[attrName])
            }
        }
        for (let child of children) {
            if (typeof child === 'string' || typeof child === 'number') {
                child = document.createTextNode(child)
            }
            elem.appendChild(child)
        }
        return elem
    }
};
export default yong