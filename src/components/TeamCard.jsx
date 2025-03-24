import {FourthButton, ThirdButton} from "./Button.jsx";

export const TeamCard = ({image,name,role,description,twitter,linkedin,dribble}) => {
    return(
        <div className="flex-col">
            <img src={image} alt="image"/>
            <div className="text-medium font-bold">{name}</div>
            <div className="text-lessBlack text-tiny">{role}</div>
            <div>{description}</div>
            <div className="grid grid-cols-3">
                <ThirdButton text="Twitter"/>
                <ThirdButton text="Dribbble"/>
                <ThirdButton text="LinkedIn"/>
            </div>
        </div>
    );
}