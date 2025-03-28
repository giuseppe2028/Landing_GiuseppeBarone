import { PrimaryButton, FourthButton } from "./Button";
import {TextHuge, TextMedium} from "./Text.jsx";
import {featureSection, presentationSectionCostants} from "../costants/PageCostants.js";
import {buttonCostants} from "../costants/CostantsComponents.js";

export const PresentationSection = () => {
    const formattedText = presentationSectionCostants.subtitle.replace(
        "Anima",
        `<a href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples" class="text-blue-500 no-underline">Anima</a>`
    );
    return (
        <div className="bg-backgroundPrimary flex lg:flex-row flex-col text-center lg:text-start justify-between lg:pt-[120px] lg:px-[55px] pt-[60px] px-[30px] lg:screen gap-y-[60px]">
            <div className="flex flex-col lg:items-start  pb-[90px] gap-y-[40px]">

                <div className="flex flex-col gap-y-[20px]">
                    <TextHuge text={presentationSectionCostants.CELP}/>
                    <p className="px-0 mx-0 font-mulish font-normal text-medium leading-[150%] tracking-[0%]" dangerouslySetInnerHTML={{__html:formattedText}}/>
                </div>
                <div className="flex gap-[18px] mt-4 lg:flex-row justify-center items-center flex-col">
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