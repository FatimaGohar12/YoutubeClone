import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css'
import Home from './cmp/Home';
import Notfound from './cmp/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Explanation:
// - In the latest version of React Router, the `<Router>` component has been replaced with the `<Route>` component.
// - The correct import statement for `<BrowserRouter>` and `<Route>` is `import { BrowserRouter, Route, Routes } from 'react-router-dom';`.
// - In the `<Route>` components, you should use the `element` prop instead of `component` to specify the component to render.
// - Make sure to use self-closing tags for the `<Route>` components (`<Route path="/" element={<Home />} />` and `<Route path="*" element={<Notfound />} />`).