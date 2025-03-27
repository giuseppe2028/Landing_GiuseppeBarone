import {FourthButton, LinkButton, ThirdButton} from "./Button.jsx";
import {openLink} from "../utils/util.js";

export const TeamCard = ({image,name,role,description,twitter,linkedin,dribble}) => {
    return(
        <div className="flex items-center text-center flex-col rounded-[20px] border-[1px] border-backgroundButtonSecondary px-[30px] py-[40px] gap-y-[30px] bg-white justify-center">
            <div className="flex flex-col lg:gap-y-[16px] items-center gap-y-[6px]">
                <img width="100px" height="100px" src={image} alt="image"/>
                <div className="text-medium font-bold">{name}</div>
                <div className="text-lessBlack text-tiny">{role}</div>
                <div>{description}</div>
            </div>
            <div className="flex justify-between w-full">
                <LinkButton text="Twitter"/>
                <LinkButton text="Dribbble"/>
                <LinkButton text="LinkedIn"/>
            </div>
        </div>
    );
}