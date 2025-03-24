import {FourthButton, PrimaryButton} from "./Button.jsx";
import {CardFeature} from "./cardFeature.jsx";

export const FeatureSection = ()=>{
    return (
        <div className="grid grid-cols-2 gap-4 bg-backgroundSecondary w-full h-screen flex items-center justify-center">
            <div>
                <img src="/Visuals.svg" alt="mockup"/>
            </div>

            <div>
                <div className="font-semibold text-extrabig">Our features</div>
                <div className="text-medium">Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.</div>
                <div className="grid grid-cols-2 grid-rows-2 ">
                    <CardFeature image="/logo.svg" text="Fast building"/>
                    <CardFeature image="/logo.svg" text="Easy to edit"/>
                    <CardFeature image="/logo.svg" text="Responsiveness"/>
                    <CardFeature image="/logo.svg" text="No code needed"/>
                </div>
            </div>
        </div>
    );
}