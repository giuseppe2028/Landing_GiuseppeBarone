import {TextExtrabig, TextLarge, TextMedium, TextTiny} from "./Text.jsx";
import {ReviewCard} from "./ReviewCard.jsx";
import {PrimaryButton} from "./Button.jsx";
import {exitSectionCostant} from "../costants/PageCostants.js";
import {buttonCostants} from "../costants/CostantsComponents.js";
//TODO non si attacca l'immagine
export const ExitSection = ()=>{
    return (
        <div className="bg-backgroundPrimary w-full flex flex-col items-center gap-y-[40px]">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex flex-col pt-[60px] px-[100px] gap-y-[20px]">
                    <TextLarge text={exitSectionCostant.title}/>
                    <TextMedium text={exitSectionCostant.subtitle}/>
                </div>
                <PrimaryButton text={buttonCostants.GS} icon="/RocketLaunch.svg" iconPosition="left"/>
            </div>
            <div className="flex flex-col items-end justify-end">
                <img src="/Mockup-2.svg" className="w-[320px] h-[100px] lg:w-[1170px] lg:h-[220px]"/>
            </div>
        </div>
    );
}