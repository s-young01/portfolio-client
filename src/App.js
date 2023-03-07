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
  return (
    <BrowserRouter>
      <ScrollTop/>
      <div className="App">
        <div className='mode_btn'>
          <button>
            <TbMoon className='mode_icon'/>
          </button>
        </div>
        {isButton ? <div className='up_btn'>
          <button onClick={onScroll_Up}>
              <MdKeyboardArrowUp className='up_icon'/>
          </button>
        </div> : null}
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/find_id' element={<FindID/>}/>
          <Route path='/find_pw' element={<FindPW/>}/>
          <Route path='/posts' element={<PostsPage isButtonTrue={isButtonTrue}/>}/>
          <Route path='/post' element={<PostPage isButtonTrue={isButtonTrue}/>}/>
          <Route path='/writepost' element={<WritePage isButtonTrue={isButtonTrue}/>}/>
          <Route path='/todolist' element={<TodoListPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
