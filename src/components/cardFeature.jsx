import PropTypes from "prop-types";
import {TextMedium} from "./Text.jsx";

export const CardFeature = ({ image, text }) => {
    return (
        <div className="flex items-center bg-white p-[20px] gap-[20px] border-[1px] border-backgroundButtonSecondary rounded-[20px]">
            <img src={image} alt="imageCard" />
           <TextMedium text={text}/>
        </div>
    );
};

CardFeature.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};