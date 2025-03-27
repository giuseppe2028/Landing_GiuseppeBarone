import {TextExtrabig, TextLarge, TextMedium, TextTiny} from "./Text.jsx";
import {ReviewCard} from "./ReviewCard.jsx";
import {PrimaryButton} from "./Button.jsx";

export const ExitSection = ()=>{
    return (
        <div className="bg-backgroundPrimary w-full flex flex-col items-center gap-y-[40px]">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex flex-col pt-[60px] px-[100px] gap-y-[20px]">
                    <TextLarge text="Get Landing Page UI Kit Today!"/>
                    <TextMedium text="Break Figma limits and explore the endless possibilities with Anima."/>
                </div>
                <PrimaryButton text="Get Started"/>
            </div>
            <div className="flex flex-col items-end justify-end">
                <img src="/Mockup-2.svg" className="mt-4"/>
            </div>
        </div>
    );
}