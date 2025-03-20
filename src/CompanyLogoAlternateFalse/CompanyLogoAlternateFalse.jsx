import "./CompanyLogoAlternateFalse.css";

export const CompanyLogoAlternateFalse = ({
  alternate = "false",
  className,
  ...props
}) => {
  const variantsClassName = "alternate-" + alternate;

  return (
    <div
      className={
        "company-logo-alternate-false " + className + " " + variantsClassName
      }
    >
      <img className="logo-wide-1" src="logo-wide-10.svg" />
    </div>
  );
};
