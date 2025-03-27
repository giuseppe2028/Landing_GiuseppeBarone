import { PrimaryButton, SecondaryButton, ThirdButton } from "./Button";

export const CustomNavbar = () => {
    return (
        <nav className="bg-backgroundPrimary flex top-0 items-center justify-between bg-r lg:px-[50px] lg:py-[20px] z-30 p-[20px]">
            <div>
                <img src="/logo.svg" alt="Logo" />
            </div>

            <div className="hidden lg:flex gap-x-[20px]">
                <ThirdButton text="Contact" />
                <SecondaryButton text="How it works" />
                <PrimaryButton text="Get Started" icon="/RocketLaunch.svg"/>
            </div>

            <div className="lg:hidden">
                <PrimaryButton text="Get Started" icon="/ArrowLeft.svg"/>
            </div>
        </nav>
    );
};