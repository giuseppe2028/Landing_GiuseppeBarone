/*
 --text-tiny: 16px;
 --text-medium: 21px;
 --text-big: 24px;
 --text-extrabig: 38px;
 --text-huge: 67px;
 */



import PropTypes from "prop-types";

export const TextHuge = ({ text }) => {
    return (
        <p className="px-0 mx-0 font-poppins font-bold text-huge leading-[130%] tracking-[-2%]">
            {text}
        </p>
    );
};

TextHuge.propTypes = {
    text: PropTypes.string.isRequired
};

export const TextExtrabig = ({ text }) => {
    return (
        <p className="px-0 mx-0 font-poppins font-bold text-extrabig leading-[130%] tracking-[-2%]">
            {text}
        </p>
    );
};
TextExtrabig.propTypes = {
    text: PropTypes.string.isRequired
};

export const TextBig = ({ text }) => {
    return (
        <p className="px-0 mx-0 font-poppins font-semibold text-tiny leading-[150%] tracking-[0%] text-center">
            {text}
        </p>
    );
};

TextBig.propTypes = {
    text: PropTypes.string.isRequired
};

export const TextMedium = ({ text }) => {
    return (
        <p className="px-0 mx-0 font-mulish font-normal text-medium leading-[150%] tracking-[0%]">
            {text}
        </p>
    );
};

TextMedium.propTypes = {
    text: PropTypes.string.isRequired
};

export const TextTiny = ({ text }) => {
    return (
        <p className="px-0 mx-0 font-mulish font-normal text-tinyleading-[150%] tracking-[0%] text-center">
            {text}
        </p>
    );
};

TextTiny.propTypes = {
    text: PropTypes.string.isRequired
};

export const TextLarge = ({ text }) => {
    return (
        <p className="px-0 mx-0 font-poppins font-bold text-[50px] leading-[130%] tracking-[-2%] text-center">
            {text}
        </p>
    );
};

TextLarge.propTypes = {
    text: PropTypes.string.isRequired
};