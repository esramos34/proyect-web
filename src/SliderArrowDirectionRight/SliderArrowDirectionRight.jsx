import "./SliderArrowDirectionRight.css";
import { IconRightArrowAlt } from "../IconRightArrowAlt/IconRightArrowAlt.jsx";

export const SliderArrowDirectionRight = ({
  direction = "left",
  className,
  ...props
}) => {
  const variantsClassName = "direction-" + direction;

  return (
    <div
      className={
        "slider-arrow-direction-right " + className + " " + variantsClassName
      }
    >
      <IconRightArrowAlt className="icon-right-arrow-alt-instance"></IconRightArrowAlt>
    </div>
  );
};
