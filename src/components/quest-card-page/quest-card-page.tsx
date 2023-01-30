import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestAction } from '../../store/api-actions';
import { getCurrentQuest } from '../../store/quests/selectors';
import { genreName, levelName } from '../../utils';

function QuestCardPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentQuest = useAppSelector(getCurrentQuest);
  const {id: questId} = useParams();

  useEffect(() => {
    if (!questId) {
      return;
    }
    dispatch(fetchQuestAction({id: questId}));
  }, [questId, dispatch]);

  const {title, previewImg = '', previewImgWebp = '', level, peopleMinMax = [], description, coverImgWebp = '', coverImg = '', type} = currentQuest || {};

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`} />
          <img src={previewImg} srcSet={`${coverImg} 2x`} width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{type && genreName(type)}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {peopleMinMax.join('-')}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>
              {level && levelName(level)}
            </li>
          </ul>
          <p className="quest-page__description">{description}</p>
          <a className="btn btn--accent btn--cta quest-page__btn" href="booking.html">Забронировать</a>
        </div>
      </div>
    </main>
  );
}

export default QuestCardPage;
