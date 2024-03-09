import './App.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function App() {
  const { t, i18n } = useTranslation();
  
  console.log('Current resource for greetings key:', i18n.getResource(i18n.language, 'translations', 'greetings'));

  const changeLanguage = (newLanguage) => {
    console.log('Changing language to:', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // useEffect(() => {
  //   console.log('All translations:', i18n.store.data);
  //   console.log('Current translations:', i18n.getDataByLanguage(i18n.language));
  
  //   // Access translations based on the language directly
  //   const greetingsTranslation = i18n.store.data[i18n.language].translations.greetings;
  //   console.log('Translation for "greetings" key:', greetingsTranslation);
  // }, [i18n.language]);


  return (
    <div className="App">
      <h1>{t('greetings')}</h1>
      <h2>{t('submit_button')}</h2>
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
    </div>
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