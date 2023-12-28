import './App.css';
import Post from "./components/Post"
import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from "./components/Pages/IndexPage"
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';

function App() {
  return (
	<Routes>
		<Route path='/' element = {<Layout />}>
			<Route index element={<IndexPage/>} />
			<Route path='/login' element = {<LoginPage/>}/>
			<Route path='/register' element = {<RegisterPage/>}/>
		</Route>
	</Routes>
  );
}

export default App;