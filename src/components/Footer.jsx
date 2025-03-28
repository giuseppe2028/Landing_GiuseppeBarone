import {footerConstant} from "../costants/PageCostants.js";

export const Footer = () => {
    return (
        <footer className="bg-textTitle text-white py-[24px] lg:px-[60px] px-[20px]">
            <div
                className="lg:container lg:mx-auto flex lg:justify-between lg:items-center lg:flex-row flex-col-reverse gap-y-[20px]">
                <div className="text-sm">
                    {footerConstant.title}
                </div>

                <div className="flex space-x-4">
                    <a href="https://www.youtube.com/c/Animaapp" target="_blank" rel="noopener noreferrer"
                       className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons-4.svg" alt="alt"/>
                    </a>
                    <a href="https://www.instagram.com/animaapp/" target="_blank" rel="noopener noreferrer"
                       className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons-3.svg" alt="alt"/>
                    </a>
                    <a href="https://github.com/AnimaApp" target="_blank" rel="noopener noreferrer"
                       className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons.svg" alt="alt"/>
                    </a>
                    <a href="https://www.linkedin.com/company/anima-app" target="_blank" rel="noopener noreferrer"
                       className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons-2.svg" alt="alt"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};