import { PrimaryButton, FourthButton } from "./Button";
import { TextHuge } from "./Text.jsx";

export const PresentationSection = () => {
    return (
        <div className="bg-backgroundPrimary flex lg:flex-row flex-col text-center lg:text-start justify-between lg:pt-[120px] lg:px-[55px] pt-[60px] px-[30px] lg:screen gap-y-[60px]">
            <div className="flex flex-col lg:items-start  pb-[90px] gap-y-[40px]">
                <TextHuge text="Create Engaging Landing Pages"/>
                <div>
                    Build beautiful landing pages in record time with Anima’s Landing Page
                    UI kit for Figma. No code required!
                </div>
                <div className="flex gap-4 mt-4 lg:flex-row justify-center items-center flex-col-reverse">
                    <FourthButton text="How it Works"/>
                    <PrimaryButton text="Get Started"/>
                </div>
            </div>

            <div className="lg:mt-0 mt-8 flex justify-center items-end lg:justify-end  lg:min-h-full  w-full">
                <img width="450" height="450" src="/Mockup.svg" alt="mockup" />
            </div>
        </div>
    );
};