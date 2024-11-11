

const yong = (() => {
    let _root;
    let _stateValue; //외부에서 접근 못하도록 하기 위해 
    //보통 변수명 앞에 _를 붙이면 private하게 사용하는 함수이다, 누가 외부에서 접근하지 말라는 뜻 

    //지정한 속성과 자식 요소를 가지는 요소 노드를 생성해서 반환
    //<button type="button" onclick="handleUp()">+</button>
    //createElement('button',{type: 'button', onclick:'handleUp()'},'+')
    const createElement = (tag, props, ...children) => {
        const elem = document.createElement(tag)
        if (props) {
            for (const attrName in props) {
                const value = props[attrName]
                if (attrName.startsWith('on')) {
                    elem.addEventListener(attrName.toLowerCase().substring(2), value)
                } else {
                    elem.setAttribute(attrName, value)
                }
            }
        }

        // 자식 노드 추가 
        for (let child of children) {
            if (typeof child === 'string' || typeof child === 'number') {
                child = document.createTextNode(child)
            } else if (typeof child === 'function') {
                child = child()
            }
            elem.appendChild(child)
        }
        return elem
    };
    //루트노드를 관리하는 객체를 생성해서 반환\
    //createRoot(document.getElementById('root')).render(App)
    const createRoot = (rootNode) => { //호출하면 객체 리턴 
        let _appComponent;
        return _root = {
            //루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
            render(appFn) {
                _appComponent = _appComponent || appFn //true인 값 반환 
                if (rootNode.firstChild) {
                    rootNode.firstChild.remove()
                }
                rootNode.appendChild(_appComponent())
            }
        }
    };
    //상태값 관리
    //let p[count,setCount] = Yong.useState(10);
    const useState = (initValue) => {
        //최초에 한번만 initState 값으로 저장하고 useState가 다시 호출되면 initValue는 무시하고 저장된 값을 사용한다
        if (_stateValue === undefined) {
            //최초 useState가 호출될 때 한번만 실행
            _stateValue = initValue;
        }
        function setValue(newValue) {
            const oldValue = _stateValue // 10
            _stateValue = newValue // 11
            //두 값이 같은지 비교해서 같이 않을 경우에 (상태가 변경된 경우) 리렌더링한다
            if (!Object.is(oldValue, newValue)) { //Object.is()는 매개변수 두 값을 비교하는 것임 
                _root.render()
            }
        }
        return [_stateValue, setValue]
    };
    return { createElement, createRoot, useState };
})(); //즉시 실행 함수 형태로 ..



export default yong

