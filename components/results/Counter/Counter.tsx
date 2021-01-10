import cn from "classnames";
import { useSpring, animated, config, AnimatedValue } from "react-spring";
import s from "./Counter.module.css";

const Counter = ({ number, suffix = "%", onRest = undefined }) => {
  const { value } = useSpring({
    config: { ...config.molasses, precision: 1, clamp: true },
    from: { value: 0 },
    to: { value: number },
    onRest,
  }) as AnimatedValue<{ value: number }>;

  return (
    <div className={s.root}>
      <animated.span className={s.value}>
        {value.interpolate((n) => n.toFixed(0))}
      </animated.span>
      <span className={s.suffix}>{suffix}</span>
    </div>
  );
};

export default Counter;
