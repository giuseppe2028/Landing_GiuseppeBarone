import { PrimaryButton, SecondaryButton, ThirdButton } from "./Button";
import {buttonCostants} from "../costants/CostantsComponents.js";

export const CustomNavbar = () => {
    return (
        <nav className="bg-backgroundPrimary flex items-center justify-between bg-r lg:px-[50px] lg:py-[20px] p-[20px]">
            <div className="flex gap-[6px]">
                <img src="/logo.svg" alt="Logo" />
            </div>

            <div className="hidden lg:flex lg:gap-[50px] gap-x-[20px]">
                <ThirdButton text={buttonCostants.Contact} />
                <SecondaryButton text={buttonCostants.Hiw} />
                <PrimaryButton text={buttonCostants.GS} icon="/RocketLaunch.svg"/>
            </div>

            <div className="lg:hidden">
                <PrimaryButton text="Get Started" icon="/ArrowLeft.svg"/>
            </div>
        </nav>
    );
};