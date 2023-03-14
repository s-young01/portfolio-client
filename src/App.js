import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage';
import FindID from './pages/member/FindID';
import FindPW from './pages/member/FindPW';
import Join from './pages/member/Join';
import Login from './pages/member/Login';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import TodoListPage from './pages/TodoListPage';
import WritePage from './pages/WritePage';
import { TbSun, TbMoon } from "react-icons/tb";
import { MdKeyboardArrowUp } from "react-icons/md";
import ScrollTop from './components/ScrollTop';
import ProfilePage from './pages/ProfilePage';

function App() {
  // 경로가 posts, post, writepost일 때만 
  // 스크롤 버튼 보이게 만들기
  const [isButton, setIsButton] = useState(false)
   

  const isButtonTrue = () => {
    setIsButton(true);
  }

  // 버튼 클릭 시 스크롤 맨 위로 이동
  const onScroll_Up = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } 
  
  // 상태관리
  const [sitePath, setSitePath] = useState('');

  return (
    <BrowserRouter>
      <ScrollTop setSitePath={setSitePath}/>
      <div className="App">
        <button className={sitePath === '/writepost' ? 'btn_1' : 'mode_btn'}>
          <TbMoon className='mode_icon'/>
        </button>
        {isButton ?
          <button onClick={onScroll_Up} className={sitePath === '/writepost' ? 'btn_2' : 'up_btn'}>
              <MdKeyboardArrowUp className='up_icon'/>
          </button> : null}
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/find_id' element={<FindID/>}/>
          <Route path='/find_pw' element={<FindPW/>}/>
          <Route path='/posts' element={<PostsPage isButtonTrue={isButtonTrue}/>}/>
          <Route path='/post/:no' element={<PostPage isButtonTrue={isButtonTrue}/>}/>
          <Route path='/writepost' element={<WritePage isButtonTrue={isButtonTrue}/>}/>
          <Route path='/todolist' element={<TodoListPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
