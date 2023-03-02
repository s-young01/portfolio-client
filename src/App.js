import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage';
import Join from './pages/member/Join';
import Login from './pages/member/Login';
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
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/writepost' element={<WritePage/>}/>
          <Route path='/todolist' element={<TodoListPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
