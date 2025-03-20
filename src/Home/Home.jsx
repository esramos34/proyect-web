import "./Home.css";
import { CompanyLogoAlternateFalse } from "../CompanyLogoAlternateFalse/CompanyLogoAlternateFalse.jsx";
import { IconRelume } from "../IconRelume/IconRelume.jsx";
import { ButtonStylePrimarySmallTrueAlternateFalseIconPositionNoIcon } from "../ButtonStylePrimarySmallTrueAlternateFalseIconPositionNoIcon/ButtonStylePrimarySmallTrueAlternateFalseIconPositionNoIcon.jsx";
import { ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon } from "../ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon/ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon.jsx";
import { ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon } from "../ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon/ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon.jsx";
import { PlaceholderLogoLogo2AlternateFalse } from "../PlaceholderLogoLogo2AlternateFalse/PlaceholderLogoLogo2AlternateFalse.jsx";
import { SliderArrowDirectionLeft } from "../SliderArrowDirectionLeft/SliderArrowDirectionLeft.jsx";
import { SliderArrowDirectionRight } from "../SliderArrowDirectionRight/SliderArrowDirectionRight.jsx";
import { IconChevronRight } from "../IconChevronRight/IconChevronRight.jsx";
import { ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing } from "../ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing/ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing.jsx";

export const Home = ({ className, ...props }) => {
  return (
    <div className={"home " + className}>
      <div className="navbar-2">
        <div className="container">
          <div className="content">
            <CompanyLogoAlternateFalse className="company-logo-instance"></CompanyLogoAlternateFalse>
          </div>
          <div className="column">
            <div className="link">
              <div className="link-text">Home Services </div>
            </div>
            <div className="link">
              <div className="link-text">PC Builds </div>
            </div>
            <div className="link">
              <div className="link-text">Installations </div>
            </div>
            <div className="link2">
              <div className="nav-link-dropdown">
                <div className="link-text">More Info </div>
                <img className="chevron-down" src="chevron-down0.svg" />
              </div>
            </div>
          </div>
          <div className="actions">
            <ButtonStylePrimarySmallTrueAlternateFalseIconPositionNoIcon
              icon={<IconRelume className="icon-relume-instance" />}
              small="true"
              text="Sign Up"
              className="button-instance"
            ></ButtonStylePrimarySmallTrueAlternateFalseIconPositionNoIcon>
          </div>
        </div>
      </div>
      <div className="header-84">
        <div className="container2">
          <div className="card">
            <div className="column2">
              <div className="content2">
                <div className="medium-length-hero-headline-goes-here">
                  Your One-Stop Shop for PC Solutions{" "}
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-suspendisse-varius-enim-in-eros-elementum-tristique-duis-cursus-mi-quis-viverra-ornare-eros-dolor-interdum-nulla-ut-commodo-diam-libero-vitae-erat">
                  Transform your computing experience with our expert
                  installation and custom PC building services. We cater to all
                  your tech needs, ensuring quality and satisfaction with every
                  build.{" "}
                </div>
              </div>
              <div className="actions2">
                <ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon
                  icon={<IconRelume className="icon-relume-instance" />}
                  text="Learn More"
                  className="button-instance"
                ></ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon>
                <ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon
                  icon={<IconRelume className="icon-relume-instance" />}
                  styleVariant="secondary"
                  text="Sign Up"
                  className="button-instance"
                ></ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon>
              </div>
            </div>
            <div className="image">
              <img className="placeholder-image" src="placeholder-image0.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="layout-6">
        <div className="container3">
          <div className="content3">
            <div className="content2">
              <div className="heading">
                Explore Our Comprehensive PC Building Services Tailored Just for
                You{" "}
              </div>
              <div className="text">
                Whether you&#039;re looking for a custom-built PC or need an
                upgrade, we have you covered. Our expert consultations ensure
                you get the perfect setup for your needs.{" "}
              </div>
            </div>
            <div className="content4">
              <div className="row">
                <div className="list-item">
                  <div className="subheading-one">Custom Builds </div>
                  <div className="text2">
                    Create a powerful machine tailored to your specific gaming
                    or work requirements.{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="subheading-two">Upgrades Available </div>
                  <div className="text2">
                    Enhance your existing setup with our top-notch upgrade
                    services.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="placeholder-image2" src="placeholder-image1.png" />
        </div>
      </div>
      <div className="testimonial-10">
        <div className="content5">
          <div className="container4">
            <div className="column3">
              <div className="content6">
                <img className="stars" src="stars0.svg" />
                <div className="quote">
                  &quot;The custom PC built for me exceeded my expectations!
                  It&#039;s not just powerful; it&#039;s a work of art!&quot;{" "}
                </div>
                <div className="avatar">
                  <img className="avatar-image" src="avatar-image0.png" />
                  <div className="avatar-content">
                    <div className="text3">John Doe </div>
                    <div className="text4">CEO, Tech Innovations </div>
                  </div>
                  <div className="divider"></div>
                  <PlaceholderLogoLogo2AlternateFalse
                    logo="2"
                    className="placeholder-logo-instance"
                  ></PlaceholderLogoLogo2AlternateFalse>
                </div>
              </div>
            </div>
            <div className="column4">
              <div className="content6">
                <img className="stars2" src="stars1.svg" />
                <div className="quote">
                  &quot;I was impressed by the professionalism and attention to
                  detail. My gaming experience has never been better!&quot;{" "}
                </div>
                <div className="avatar">
                  <img className="avatar-image" src="avatar-image1.png" />
                  <div className="avatar-content">
                    <div className="text3">Jane Smith </div>
                    <div className="text4">Manager, GameZone </div>
                  </div>
                  <div className="divider"></div>
                  <PlaceholderLogoLogo2AlternateFalse
                    logo="2"
                    className="placeholder-logo-instance2"
                  ></PlaceholderLogoLogo2AlternateFalse>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-dots">
            <div className="dot"></div>
            <div className="dot2"></div>
          </div>
          <SliderArrowDirectionLeft className="slider-arrow-instance"></SliderArrowDirectionLeft>
          <SliderArrowDirectionRight
            direction="right"
            className="slider-arrow-instance2"
          ></SliderArrowDirectionRight>
        </div>
      </div>
      <div className="layout-18">
        <div className="container3">
          <div className="content3">
            <div className="content2">
              <div className="heading">
                Discover the Unmatched Benefits of Our Expert PC Services Today!{" "}
              </div>
              <div className="text">
                Choosing our services means gaining access to expert advice
                tailored to your needs. We use only the highest quality
                components to ensure your PC performs at its best.{" "}
              </div>
            </div>
            <div className="list">
              <div className="list-item2">
                <IconRelume className="icon-relume-instance2"></IconRelume>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
                  Expert advice tailored to your unique requirements.{" "}
                </div>
              </div>
              <div className="list-item2">
                <IconRelume className="icon-relume-instance3"></IconRelume>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
                  Top-quality components for optimal performance and durability.{" "}
                </div>
              </div>
              <div className="list-item2">
                <IconRelume className="icon-relume-instance4"></IconRelume>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
                  Personalized builds designed to meet your specific needs.{" "}
                </div>
              </div>
            </div>
          </div>
          <img className="placeholder-image2" src="placeholder-image2.png" />
        </div>
      </div>
      <div className="layout-1">
        <div className="container3">
          <div className="content3">
            <div className="section-title">
              <div className="tagline-wrapper">
                <div className="tagline">Build </div>
              </div>
              <div className="content2">
                <div className="heading2">
                  Explore Our Premium PC Building Components{" "}
                </div>
                <div className="text">
                  Discover top-tier components designed for optimal performance.
                  Elevate your PC building experience with our carefully curated
                  selection.{" "}
                </div>
              </div>
            </div>
            <div className="actions3">
              <ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon
                icon={<IconRelume className="icon-relume-instance" />}
                styleVariant="secondary"
                text="Shop"
                className="button-instance2"
              ></ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon>
              <ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing
                icon={
                  <IconChevronRight className="icon-chevron-right-instance" />
                }
                styleVariant="link"
                iconPosition="trailing"
                text="Learn More"
                className="button-instance2"
              ></ButtonStyleLinkSmallFalseAlternateFalseIconPositionTrailing>
            </div>
          </div>
          <img className="placeholder-image2" src="placeholder-image3.png" />
        </div>
      </div>
      <div className="cta-7">
        <div className="container5">
          <div className="content7">
            <div className="row2">
              <div className="heading">Start Your PC Journey Today </div>
              <div className="text">
                Book a consultation or request your personalized quote now!{" "}
              </div>
            </div>
          </div>
          <div className="actions2">
            <ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon
              icon={<IconRelume className="icon-relume-instance" />}
              text="Get Started"
              className="button-instance"
            ></ButtonStylePrimarySmallFalseAlternateFalseIconPositionNoIcon>
            <ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon
              icon={<IconRelume className="icon-relume-instance" />}
              styleVariant="secondary"
              text="Learn More"
              className="button-instance"
            ></ButtonStyleSecondarySmallFalseAlternateFalseIconPositionNoIcon>
          </div>
        </div>
      </div>
      <div className="footer-7">
        <div className="content8">
          <div className="logo">
            <CompanyLogoAlternateFalse className="company-logo-instance"></CompanyLogoAlternateFalse>
          </div>
          <div className="links">
            <div className="about-us">About Us </div>
            <div className="services">Services </div>
            <div className="contact-us">Contact Us </div>
            <div className="blog">Blog </div>
            <div className="support">Support </div>
          </div>
        </div>
        <div className="credits">
          <div className="divider2"></div>
          <div className="row3">
            <div className="_2025-relume-all-rights-reserved">
              © 2025 Relume. All rights reserved.{" "}
            </div>
            <div className="footer-links">
              <div className="privacy-policy">Privacy Policy </div>
              <div className="terms-of-service">Terms of Service </div>
              <div className="cookies-settings">Cookies Settings </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
