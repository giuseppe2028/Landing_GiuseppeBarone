import {TeamCard} from "./TeamCard.jsx";
import {TextExtrabig, TextTiny} from "./Text.jsx";
import {PrimaryButton} from "./Button.jsx";
import {integrationSectionCostants} from "../costants/PageCostants.js";
import {buttonCostants} from "../costants/CostantsComponents.js";

export const IntegrationsSection = () => {
    return (
        <div className="bg-backgroundSecondary w-full h-screen flex flex-col items-center justify-center lg:px-[55px] px-[30px] lg:py-[120px] py-[60px] gap-y-[40px]">
           <div className="flex flex-col justify-center items-center gap-y-[20px]">
               <TextExtrabig text={integrationSectionCostants.title}/>
               <TextTiny text={integrationSectionCostants.subtitle}/>
           </div>
            <div className="flex justify-between w-full py-[40px] lg:gap-x-[10px]">
                <img height="64px" width="64px" src="/logos/Logo.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-2.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-3.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-4.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-5.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-6.svg"/>
            </div>
            <PrimaryButton text={buttonCostants.VAI}/>
        </div>
    );
}