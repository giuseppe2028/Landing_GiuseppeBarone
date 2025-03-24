import {PrimaryButton, SecondaryButton, ThirdButton} from "./Button"

export const CustomNavbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 z-10">
            <div>
               <img src="/logo.svg"/>
            </div>

            <div className="flex gap-x-[20px]"> 
                <ThirdButton text="Contact"/>
                <SecondaryButton text="How it works"/>
                <PrimaryButton text="Get Started"/>
            </div>
        </nav>
    );
};