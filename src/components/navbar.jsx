import { PrimaryButton, SecondaryButton, ThirdButton } from "./Button";
import {buttonCostants} from "../costants/CostantsComponents.js";

export const CustomNavbar = () => {
    return (
        <nav className="bg-backgroundPrimary flex items-center justify-between bg-r lg:px-[50px] lg:py-[20px] p-[20px]">
            <div className="flex gap-[6px]">
                <img src="/logo.svg" alt="Logo" />
            </div>

            <div className="hidden lg:flex lg:gap-[50px] gap-x-[20px]">
                <ThirdButton text={buttonCostants.Contact} href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples" />
                <SecondaryButton text={buttonCostants.Hiw} href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"/>
                <PrimaryButton text={buttonCostants.GS} icon="/RocketLaunch.svg" href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"/>
            </div>

            <div className="lg:hidden">
                <PrimaryButton text="Get Started" icon="/ArrowLeft.svg" href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"/>
            </div>
        </nav>
    );
};