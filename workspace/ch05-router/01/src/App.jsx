import { useEffect, useState } from 'react';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

//현재 페이지가 뭔지

function App() {
  const [path, setPath] = useState(window.location.pathname);
  console.log('현재페이지', path);
  useEffect(() => {
    const handleNavigate = (e) => {
      setPath(e.destination.url.split(location.host).pop());
    };
    window.navigation.addEventListener('navigate', handleNavigate); //navigate 이벤트는 브라우저의 히스토리 변경(예: 주소창의 URL 변경)될 때 감지
    return () => {
      window.navigation.removeEventListener('navigate', handleNavigate);
    };
  }, []); //최소 한번만 호출
  return (
    <>
      {(path === '/' || path === '/home.html') && <Home />}
      {path === '/page1.html' && <Page1 />}
      {path === '/page2.html' && <Page2 />}
    </>
  );
}

export default App;
