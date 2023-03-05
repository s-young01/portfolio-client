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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/find_id' element={<FindID/>}/>
          <Route path='/find_pw' element={<FindPW/>}/>
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/post' element={<PostPage/>}/>
          <Route path='/writepost' element={<WritePage/>}/>
          <Route path='/todolist' element={<TodoListPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
