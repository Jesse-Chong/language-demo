import './App.css';
import { useState } from 'react';
import i18n from 'i18next';

function App() {
  const [language, setLanguage] = useState('en');

const changeLanguage = (newLanguage) => {
  i18n.changeLanguage(newLanguage)
  setLanguage(newLanguage)
}

return (
  <div className="App">
    <div>
      <label>Select Language: </label>
      <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">French</option>
        <option value="hi">Hindi</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  </div>
);
}

export default App;