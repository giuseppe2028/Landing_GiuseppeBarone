import { PrimaryButton, FourthButton } from "./Button";
import { TextHuge } from "./Text.jsx";
import {presentationSectionCostants} from "../costants/PageCostants.js";
import {buttonCostants} from "../costants/CostantsComponents.js";

export const PresentationSection = () => {
    return (
        <div className="bg-backgroundPrimary flex lg:flex-row flex-col text-center lg:text-start justify-between lg:pt-[120px] lg:px-[55px] pt-[60px] px-[30px] lg:screen gap-y-[60px]">
            <div className="flex flex-col lg:items-start  pb-[90px] gap-y-[40px]">

                <div className="flex flex-col gap-y-[20px]">
                    <TextHuge text={presentationSectionCostants.CELP}/>
                    {presentationSectionCostants.subtitle}
                </div>
                <div className="flex gap-y-[18px] mt-4 lg:flex-row justify-center items-center flex-col">
                    <PrimaryButton text={buttonCostants.GS} icon="/RocketLaunch.svg" iconPosition="left"/>
                    <FourthButton text={buttonCostants.Hiw}/>
                </div>
            </div>

            <div className="lg:mt-0 mt-8 flex justify-center items-end lg:justify-end  lg:min-h-full  w-full">
                <img width="450" height="450" src="/Mockup.svg" alt="mockup" />
            </div>
        </div>
    );
};