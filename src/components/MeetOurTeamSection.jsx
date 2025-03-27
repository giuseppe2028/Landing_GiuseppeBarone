import {TeamCard} from "./TeamCard.jsx";
import {TextExtrabig, TextTiny} from "./Text.jsx";

export const MeetOurTeamSection = () => {
    return (
        <div className="bg-backgroundSecondary w-full lg:h-screen flex flex-col items-center justify-center lg:py-[120px] lg:px-[55px] py-[60px] px-[30px] gap-y-[60px]">
            <div className="flex flex-col gap-y-[20px] justify-center items-center">
                <TextExtrabig text="Meet our team"/>
                <TextTiny text="Get to know the faces behind the scenes and learn about the values that drive
                us."/>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px] flex flex-col gap-y-[30px]">
                <TeamCard image="/sarah.png" name="Sarah K."
                          role = "Lead Designer"
                          description="With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life."/>
                <TeamCard image="/Michael.png" name="Sarah K."
                          role = "Lead Designer"
                          description="With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life."/>
                <TeamCard image="/Lauren.png" name="Sarah K."
                          role = "Lead Designer"
                          description="With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life."/>
            </div>
        </div>
    );
}