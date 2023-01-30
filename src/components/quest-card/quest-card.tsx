import { Link } from 'react-router-dom';
import { Quest } from '../../types/quest';
import { levelName } from '../../utils';

type QuestCardProps = {
  quest: Quest;
}

function QuestCard({quest}: QuestCardProps): JSX.Element {
  const {title, previewImg, previewImgWebp, level, peopleMinMax, id} = quest;

  return (
    <Link className="quest-card" to={`/quest/${id}`}>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} width="344" height="232" alt="Фото квеста." />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">{title}</a>
        </div>
        <ul className="tags quest-card__tags">
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
            {levelName(level)}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default QuestCard;
