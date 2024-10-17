import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <div className="counter-container">
      <div className="btn-group" role="group">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            type="button"
            data-testid={lng}
            className={
              i18n.resolvedLanguage === lng
                ? 'btn mb-3 btn-primary'
                : 'btn mb-3 btn-outline-primary'
            }
            onClick={() => i18n.changeLanguage(lng)}>
            {t('language', { lng })}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-info mb-3 align-self-center"
        data-testid="counter"
        onClick={() => setCount(count + 1)}>
        {t('click', { count })}
      </button>
      <button
        type="button"
        className="btn btn-warning"
        data-testid="reset"
        onClick={() => setCount(0)}>
        {t('reset')}
      </button>
    </div>
  );
}
