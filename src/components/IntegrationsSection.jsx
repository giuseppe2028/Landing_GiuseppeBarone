import {TeamCard} from "./TeamCard.jsx";

export const IntegrationsSection = () => {
    return (
        <div className="bg-backgroundSecondary w-full h-screen flex flex-col items-center justify-center">
            <div className="text-extrabig font-bold">Meet our team</div>
            <div className="text-tiny">Get to know the faces behind the scenes and learn about the values that drive us.</div>
            <div className="grid grid-cols-2">
                <TeamCard image="/logo.svg" name="Sarah K." description="With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life." />
            </div>
        </div>
    );
}