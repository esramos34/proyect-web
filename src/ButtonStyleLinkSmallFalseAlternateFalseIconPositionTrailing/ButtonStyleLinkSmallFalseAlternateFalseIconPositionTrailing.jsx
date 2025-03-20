import "./ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing.css";
import { IconRelume } from "../IconRelume/IconRelume.jsx";

export const ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing = ({
  icon = <IconRelume className="icon-relume-instance" />,
  styleVariant = "primary",
  small = "false",
  alternate = "false",
  iconPosition = "no-icon",
  text = "Button",
  className,
  ...props
}) => {
  const variantsClassName =
    "style-variant-" +
    styleVariant +
    " small-" +
    small +
    " alternate-" +
    alternate +
    " icon-position-" +
    iconPosition;

  return (
    <div
      className={
        "button-style-link-small-false-alternate-false-icon-position-trailing " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="button">{text} </div>
      {icon}
    </div>
  );
};
