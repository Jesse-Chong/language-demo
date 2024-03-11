import './App.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';

function App() {
  const { t, i18n } = useTranslation();
  
  console.log('Current resource for greetings key:', i18n.getResource(i18n.language, 'translations', 'greetings'));

  const changeLanguage = (newLanguage) => {
    console.log('Changing language to:', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // const handleSubmit = () => {
  //   console.log('Form submitted');
  // };
  // onClick={handleSubmit}
  return (
    <Router>
    <div className="App">
      <h1>{t('greetings')}</h1>
      <label>Select Language: </label>
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="hi">Hindi</option>
        <option value="ru">Russian</option>
        <option value="fr">French</option>
        <option value="zh_CN">Chinese</option>
        <option value="ko">Korean</option>
      </select>
      <br />
      <button type="submit">
        {t('submit_button')}
      </button>
      <hr />
        <Link to="/about">
          <button>{t('about_button')}</button>
        </Link>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}



{/* <div className="App">
<h1>{t('greetings')}</h1>
<label>Select Language: </label>
<select onChange={(e) => changeLanguage(e.target.value)} value={language}>
<option value="en">English</option>
<option value="es">Español</option>
<option value="fr">French</option>
<option value="hi">Hindi</option>
<option value="ru">Russian</option>
</select>
</div> */}