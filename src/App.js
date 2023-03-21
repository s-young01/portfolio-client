import { useEffect, useState } from 'react';
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
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setLogin } from './modules/LoginCheck';
import NewPW from './pages/member/NewPW';
import EditPostContainer from './container/EditPostContainer';

// 다크모드 만들기
const lightTheme = {
  background: '#fff',
  color: '#333',
  boxShadow: '3px 3px rgba($color: #333, $alpha: 1.0)',
  backgroundColor: 'rgba( 255, 255, 255, 0.95 )',
  hoverColor: '#333',
  first_button: 'inherit',
  buttons_hover: '#dbecff',
  buttons_click_color: '#2977ff',
  buttons_click_BG: '#f0f7ff',
  placeholder_color: 'gray',
  share_BG: '#eee',
  share_btn_BG: '#fff',
}
const darkTheme = {
  background: '#333',
  color: '#fff',
  boxShadow: '3px 3px rgba($color: #fff, $alpha: 1.0)',
  backgroundColor: 'rgba( 51, 51, 51, 0.95 )',
  hoverColor: '#fff',
  first_button: '#fff',
  buttons_hover: '#ccc',
  buttons_click_color: '#ccc',
  buttons_click_BG: '#ccc',
  placeholder_color: '#eee',
  share_BG: '#fff',
  share_btn_BG: '#eee',
}
// 전역 스타일 주기
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color};
  }
  .login .login_zone form .login_table {
    input {
      background-color: ${props => props.theme.background};
      caret-color: ${props => props.theme.color};
      color: ${props => props.theme.color};
    }
    input[type='password'] {
      color: ${props => props.theme.color};
    }
  }
  .join .join_zone .join_table {
    input {
      background-color: ${props => props.theme.background};
      caret-color: ${props => props.theme.color};
      color: ${props => props.theme.color};
    }
    input[type='password'] {
        color: ${props => props.theme.color};
      }
    select {
      color: ${props => props.theme.color};
      option {
        color: ${props => props.theme.background};
      }
    }
  }
  .find .find_box .find_table {
    input {
      background-color: ${props => props.theme.background};
      caret-color: ${props => props.theme.color};
      color: ${props => props.theme.color};
    }
    input[type='password'] {
      color: ${props => props.theme.color};
    }
  } 
  
  .header {
    background-color: ${props => props.theme.backgroundColor};
    .inner .search_zone .search_box {
      background-color: ${props => props.theme.color};
      input {
        background-color: ${props => props.theme.color};
        caret-color: ${props => props.theme.backgroundColor};
      }
    }
  }
  .write .write_zone{
    .title_input {
      background-color: ${props => props.theme.background};
      ::-webkit-input-placeholder {
        color: ${props => props.theme.placeholder_color};
      }
    }
    .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items {
      background: ${props => props.theme.background};
      .ck.ck-button .ck-button__label {
        color: ${props => props.theme.first_button};
      }
      .ck.ck-reset.ck-list {
        background: ${props => props.theme.background};
      }
      .ck.ck-icon.ck-icon_inherit-color {
        color: ${props => props.theme.color};
      }
      .ck.ck-button.ck-on:not(.ck-disabled):hover {
        background: ${props => props.theme.buttons_hover};
      }
      .ck.ck-button.ck-on {
        color: ${props => props.theme.buttons_click_color};
        background: ${props => props.theme.buttons_click_BG};
      }
    }
    .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button {
      .ck.ck-icon.ck-icon_inherit-color {
        color: ${props => props.theme.color};
      }
    }
    .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
      background: ${props => props.theme.background};
    }
    .ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
      background: ${props => props.theme.background};
    }
  }
  .share {
    background-color: ${props => props.theme.share_BG};
    .share_btn {
      background-color: ${props => props.theme.share_btn_BG};
    }
  }
  .mode_btn,.btn_1,.up_btn,.btn_2 {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    &:hover {
      background-color: ${props => props.theme.color};
      color: ${props => props.theme.background};
    }
  }
`;

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
  
  // pathname 상태관리 (pathname이 /writepost일때 버튼 스타일 변경)
  const [sitePath, setSitePath] = useState('');

  // 다크모드 토글버튼
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark();
    dispatch(setLogin());
  },[dispatch, setIsDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  }
  
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <ScrollTop setSitePath={setSitePath}/>
        <GlobalStyle/>
        <div className="App"> 
          <button onClick={toggleDarkMode} className={sitePath === '/writepost' ? 'btn_1' : 'mode_btn'}>
            {isDark ? <TbSun className='mode_icon'/> : <TbMoon className='mode_icon'/>}
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
            <Route path='/new_pw' element={<NewPW/>}/>
            <Route path='/posts/:userpath' element={<PostsPage isButtonTrue={isButtonTrue}/>}/>
            <Route path='/post/:no/:userpath' element={<PostPage isButtonTrue={isButtonTrue}/>}/>
            <Route path='/writepost' element={<WritePage isButtonTrue={isButtonTrue}/>}/>
            <Route path='/modifypost/:no' element={<EditPostContainer isButtonTrue={isButtonTrue}/>}/>
            <Route path='/todolist' element={<TodoListPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
