import cn from "classnames";
import Image from "next/image";
import s from "./Card.module.css";

const Card = ({ className, imageUrl, title, description }) => (
  <div className={cn(s.root, className)}>
    <div className={s.avatarBox}>
      <Image
        className={s.avatar}
        src={`/api/image/${imageUrl.replace(/https?:\/\//, "")}`}
        alt={title}
        objectFit="cover"
        layout="fill"
      />
    </div>
    <div className={s.content}>
      <span className={s.title}>{title}</span>
      <span className={s.description}>{description}</span>
    </div>
  </div>
);

export default Card;
