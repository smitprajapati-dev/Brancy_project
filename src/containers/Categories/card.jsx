import React from 'react';
import clsx from 'clsx';

function Card({ title, imageUrl, className, badge }) {
  const displayBadge = () => {
    switch (badge) {
      case 'new':
        return <p className="badge badge--red">{badge}</p>;

      case 'hot':
        return <p className="badge badge--green">{badge}</p>;
      case 'sale':
        return <p className="badge badge--purple">{badge}</p>;

      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col gap-5 items-center justify-center max-w-40 min-h-60 aspect-4/3 md:aspect-3/4 rounded-2xl rotate-container relative max-lg:mt-7 mt-10',
        {
          [className]: !!className,
        },
      )}
    >
      <div className="rotate-card">
        <img src={imageUrl} alt="icon" height={70} width={70} />
      </div>
      <div className="w-10 h-0.5 mt-10  bg-red-500 rounded-lg" />
      <h3>{title}</h3>
      {displayBadge()}
    </div>
  );
}

export default Card;
