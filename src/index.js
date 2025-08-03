import React from 'react';
import ReactDOM from 'react-dom/client';      // React DOM 렌더링
import './index.css';               // 글로벌 CSS 스타일
import App from './App';            // 메인 App 컴포넌트
import reportWebVitals from './reportWebVitals';      // 성능 측정 도구
import { BrowserRouter } from 'react-router-dom';     // 라우팅 기능
import { Provider } from 'react-redux';               // Redux 상태관리
import store from './store'                           // Redux 스토어

// === React 앱을 DOM에 렌더링 ===
const root = ReactDOM.createRoot(document.getElementById("root"));     //React 18의 새로운 렌더링 방식,  public/index.html의 <div id="root"></div>와 연결
root.render(
  // React.StrictMode는 개발 모드에서 잠재적 문제를 찾아주는 도구 (주석처리됨)
  // <React.StrictMode>

  // Provider: Redux 스토어를 모든 컴포넌트에서 사용할 수 있게 해줌
  <Provider store={store}>
    {/* BrowserRouter: URL 기반 라우팅을 가능하게 해줌,  URL 변경 시 페이지 새로고침 없이 컴포넌트 변경 */}
    <BrowserRouter>   
      <App />         {/* 메인 App 컴포넌트 렌더링 */}
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 성능 측정 (선택사항)
reportWebVitals();
