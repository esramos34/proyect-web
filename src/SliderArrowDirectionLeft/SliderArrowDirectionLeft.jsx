import "./SliderArrowDirectionLeft.css";
import { IconLeftArrowAlt } from "../IconLeftArrowAlt/IconLeftArrowAlt.jsx";

export const SliderArrowDirectionLeft = ({
  direction = "left",
  className,
  ...props
}) => {
  const variantsClassName = "direction-" + direction;

  return (
    <div
      className={
        "slider-arrow-direction-left " + className + " " + variantsClassName
      }
    >
      <IconLeftArrowAlt className="icon-left-arrow-alt-instance"></IconLeftArrowAlt>
    </div>
  );
};
