import {TeamCard} from "./TeamCard.jsx";
import {TextExtrabig, TextTiny} from "./Text.jsx";
import {meetOurTeamCardsCostant, meetOurTeamSectionCostants} from "../costants/PageCostants.js";

export const    MeetOurTeamSection = () => {
    return (
        <div className="bg-backgroundSecondary w-full lg:h-screen flex flex-col items-center justify-center lg:py-[120px] lg:px-[55px] py-[60px] px-[30px] gap-y-[60px]">
            <div className="flex flex-col gap-y-[20px] justify-center items-center">
                <TextExtrabig text={meetOurTeamSectionCostants.title}/>
                <TextTiny text={meetOurTeamSectionCostants.subtitle}/>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px] flex flex-col gap-y-[30px]">
                {meetOurTeamCardsCostant.map(el => <TeamCard image={el.image} name={el.name} role={el.role} description={el.description} twitter={el.linkTwitter} dribble={el.linkDribble} linkedin={el.linkDribble}/> )}
            </div>
        </div>
    );
}