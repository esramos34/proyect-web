import "./PlaceholderLogoLogo2AlternateFalse.css";

export const PlaceholderLogoLogo2AlternateFalse = ({
  logo = "1",
  alternate = "false",
  className,
  ...props
}) => {
  const variantsClassName = "logo-" + logo + " alternate-" + alternate;

  return (
    <img
      className={
        "placeholder-logo-logo-2-alternate-false " +
        className +
        " " +
        variantsClassName
      }
      src="placeholder-logo-logo-2-alternate-false.svg"
    />
  );
};
