
export const Footer = () => {
    return (
        <footer className="bg-textTitle text-white py-[24px] lg:px-[60px] px-[20px]">
            <div className="lg:container lg:mx-auto flex lg:justify-between lg:items-center lg:flex-row flex-col-reverse gap-y-[20px]">
                <div className="text-sm">
                    © 2023 Anima’s Landing Page Ui Kit
                </div>

                <div className="flex space-x-4">
                    <div
                        className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons-4.svg" alt="alt"/>
                    </div>
                    <div
                        className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons-3.svg" alt="alt"/>
                    </div>
                    <div
                        className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons.svg" alt="alt"/>
                    </div>
                    <div
                        className="w-[32px] h-[32px] bg-footerbackgroundIcon flex items-center justify-center rounded-full">
                        <img src="/footerLogos/Icons-2.svg" alt="alt"/>
                    </div>

                </div>
            </div>
        </footer>
    );
};