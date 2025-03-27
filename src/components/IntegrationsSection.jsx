import {TeamCard} from "./TeamCard.jsx";
import {TextExtrabig, TextTiny} from "./Text.jsx";
import {PrimaryButton} from "./Button.jsx";

export const IntegrationsSection = () => {
    return (
        <div className="bg-backgroundSecondary w-full h-screen flex flex-col items-center justify-center lg:px-[55px] px-[30px] lg:py-[120px] py-[60px] gap-y-[40px]">
           <div className="flex flex-col justify-center items-center gap-y-[20px]">
               <TextExtrabig text="More than 500 integrations"/>
               <TextTiny text="We integrate with more than 50 apps you use daily"/>
           </div>
            <div className="flex justify-between w-full py-[40px]">
                <img height="64px" width="64px" src="/logos/Logo.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-2.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-3.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-4.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-5.svg"/>
                <img height="64px" width="64px" src="/logos/Logo-6.svg"/>
            </div>
            <PrimaryButton text="View All Integration"/>
        </div>
    );
}