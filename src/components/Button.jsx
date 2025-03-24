import PropTypes from "prop-types";
export const PrimaryButton = ({ onClick,text}) => {
    return (
        <button
            className="rounded-[20px] px-[50px] py-[16px] bg-backgroundButtonPrimary text-textButtonPrimary"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

PrimaryButton.propTypes = {
    onClick: PropTypes.func,
    text:PropTypes.string.isRequired
};


export const SecondaryButton = ({ onClick,text}) => {
    return (
        <button
            className="rounded-[20px] px-[50px] py-[16px] bg-backgroundButtonSecondary text-textButtonSecondary"
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
            className="rounded-[20px] px-[50px] py-[16px] text-textButtonSecondary"
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
            className="rounded-[20px] px-[50px] py-[16px] text-textButtonSecondary bg-white font-semibold border-backgroundButtonPrimary border-1"
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