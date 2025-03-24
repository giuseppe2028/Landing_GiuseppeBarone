import PropTypes from "prop-types";

export const CardFeature = ({image,text})=>{
    return(
        <div className="grid grid-cols-2 bg-white gap-x-3">
            <img className="right-0" src={image} alt="imageCard"/>
            <div>{text}</div>
        </div>
    );
}

CardFeature.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
}