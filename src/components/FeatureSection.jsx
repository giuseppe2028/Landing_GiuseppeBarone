import {FourthButton, PrimaryButton} from "./Button.jsx";
import {CardFeature} from "./cardFeature.jsx";
import {TextExtrabig, TextMedium} from "./Text.jsx";

export const FeatureSection = ()=>{
    return (
        <div
            className="bg-backgroundSecondary w-full lg:h-screen flex lg:flex-row flex-col-reverse items-center text-center lg:text-start lg:pt-[120px] lg:px-[55px] pt-[60px] gap-[60px] lg:justify-between justify-center gap-y-[50px] py-[60px] px-[30px]">
            <div>
                <img className="max-w-full h-auto" width="540" height="450" src="/Visuals.svg" alt="mockup"/>
            </div>

            <div className="flex gap-y-[50px] flex-col">
                <div className="flex gap-y-[20px] flex-col">
                    <TextExtrabig text="Our features"/>
                    <TextMedium
                        text="Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages."/>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col gap-y-[20px] lg:gap-x-[20px]">
                    <CardFeature image="/Icon.svg" text="Fast building"/>
                    <CardFeature image="/Icon-2.svg" text="Easy to edit"/>
                    <CardFeature image="/Icon-3.svg" text="Responsiveness"/>
                    <CardFeature image="/Icon-4.svg" text="No code needed"/>
                </div>
            </div>
        </div>
    );
}