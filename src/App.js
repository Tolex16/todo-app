import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Error from './Pages/Error';
import Content from './Pages/Content';
import About from './Pages/About';
import { useState } from 'react';
import ProtectedRoute from './Pages/ProtectedRoute';
import todoimg from './img/todo img.jpg'


function App() {
  const [ todos, setTodos] = useState([])
  return (
    <>
    <h1 style={{textAlign: "center"}}> Todo App <img src={todoimg} alt="checkcard" /></h1>
    <div>
  
        
        <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>  } /> 
                <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute> } /> 
                <Route path="/content" element={ <ProtectedRoute><Content createTodo={setTodos} todos={todos}  key={todos.id} /></ProtectedRoute> } /> 
                <Route path="/create" element={<ProtectedRoute><Create createTodo={setTodos} todos={todos} /></ProtectedRoute>  } />
                <Route path="*" element={<Error />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
