import PropTypes from "prop-types";
export const PrimaryButton = ({ onClick, text, icon, altText = "Icona del pulsante", iconPosition = "right" }) => {
    return (
        <button
            className={`rounded-[20px] px-[50px] py-[16px] bg-backgroundButtonPrimary text-textButtonPrimary flex items-center gap-[8px] font-poppins font-semibold ${
                iconPosition === "left" ? "flex-row" : "flex-row-reverse lg:flex-row"
            }`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt={altText} className="w-6 h-6 inline-block" />}
            <span className="text-tiny">{text}</span>
        </button>
    );
};
PrimaryButton.propTypes = {
    onClick: PropTypes.func,
    text:PropTypes.string.isRequired,
    icon:PropTypes.string
};


export const SecondaryButton = ({ onClick,text}) => {
    return (
        <button
            className="h-[60px] rounded-[20px] gap-[8px] px-[50px] py-[16px] bg-backgroundButtonSecondary text-textButtonSecondary font-poppins font-semibold text-tiny"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

SecondaryButton.propTypes = {
    onClick: PropTypes.func,
    text:PropTypes.string.isRequired
};


export const ThirdButton = ({ onClick,text}) => {
    return (
        <button
            className="h-[60px] rounded-[20px] px-[50px] py-[16px] text-textButtonSecondary font-poppins font-semibold gap-[8px] text-tiny"
            onClick={onClick}
        >
          {text}
        </button>
    );
};

ThirdButton.propTypes = {
    onClick: PropTypes.func,
    text:PropTypes.string.isRequired
};

export const FourthButton = ({ onClick,text}) => {
    return (
        <button
            className="h-[60px] rounded-[20px] px-[50px] py-[16px] text-textButtonSecondary bg-white border-backgroundButtonPrimary border-1 font-poppins font-semibold text-tiny"
            onClick={onClick}
        >
           {text}
        </button>
    );
};

FourthButton.propTypes = {
    onClick: PropTypes.func,
    text:PropTypes.string.isRequired
};



export const LinkButton = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className="h-[60px] font-poppins font-bold text-backgroundButtonPrimary">
            {text}
        </button>
    );
};