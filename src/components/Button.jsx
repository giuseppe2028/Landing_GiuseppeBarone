import PropTypes from "prop-types";

export const PrimaryButton = ({ href, text, icon, altText = "Icona del pulsante", iconPosition = "right" }) => {
    return (
        <a
            href={href}
            className={`rounded-[20px] px-[50px] py-[16px] bg-backgroundButtonPrimary text-textButtonPrimary flex items-center gap-[8px] font-poppins font-semibold ${
                iconPosition === "left" ? "flex-row" : "flex-row-reverse lg:flex-row"
            }`}
        >
            {icon && <img src={icon} alt={altText} className="w-6 h-6 inline-block" />}
            <span className="text-tiny">{text}</span>
        </a>
    );
};

PrimaryButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export const SecondaryButton = ({ href, text }) => {
    return (
        <a
            href={href}
            className="h-[60px] rounded-[20px] gap-[8px] px-[50px] py-[16px] bg-backgroundButtonSecondary text-textButtonSecondary font-poppins font-semibold text-tiny"
        >
            {text}
        </a>
    );
};

SecondaryButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export const ThirdButton = ({ href, text }) => {
    return (
        <a
            href={href}
            className="h-[60px] rounded-[20px] px-[50px] py-[16px] text-textButtonSecondary font-poppins font-semibold gap-[8px] text-tiny"
        >
            {text}
        </a>
    );
};

ThirdButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export const FourthButton = ({ href, text }) => {
    return (
        <a
            href={href}
            className="h-[60px] rounded-[20px] px-[50px] py-[16px] text-textButtonSecondary bg-white border-backgroundButtonPrimary border-1 font-poppins font-semibold text-tiny"
        >
            {text}
        </a>
    );
};

FourthButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export const LinkButton = ({ href, text }) => {
    return (
        <a href={href} className="h-[60px] font-poppins font-bold text-backgroundButtonPrimary">
            {text}
        </a>
    );
};

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};