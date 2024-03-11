import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('about.description')}</p>
    </div>
  );
}

export default AboutPage;