const yong = {
    //지정한 속성과 자식 요소를 가지는 요소 노드를 생성해서 반환
    //<button type="button" onclick="handleUp()">+</button>
    //createElement('button',{type: 'button', onclick:'handleUp()'},'+')
    createElement: (tag, props, ...children) => {
        const elem = document.createElement(tag)
        if (props) {
            for (const attrName in props) {
                elem.setAttribute(attrName, props[attrName])
            }
        }
        // 자식 노드 추가 
        for (let child of children) {
            if (typeof child === 'string' || typeof child === 'number') {
                child = document.createTextNode(child)
            }
            elem.appendChild(child)
        }
        return elem
    },

    //루트노드를 관리하는 객체를 생성해서 반환\
    //createRoot(document.getElementById('root')).render(App)
    createRoot: (rootNode) => { //호출하면 객체 리턴 
        return {
            //루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
            render(appFn) { //appFn함수가 App으로 전달됨
                rootNode.appendChild(appFn()) //App반환요소를 appendChild
            }
        }
    }
};
export default yong