import cn from "classnames";
import s from "./Card.module.css";

const Card = ({ className, imageUrl, title, description }) => (
  <div className={cn(s.root, className)}>
    <img className={s.avatar} src={imageUrl} alt={title} />
    <div className={s.content}>
      <span className={s.title}>{title}</span>
      <span className={s.description}>{description}</span>
    </div>
  </div>
);

export default Card;
