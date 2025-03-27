import {CardFeature} from "./cardFeature.jsx";
import {ReviewCard} from "./ReviewCard.jsx";
import {TextExtrabig, TextTiny} from "./Text.jsx";

export const ReviewsCustomerSection = () => {
    return (
        <div className="bg-backgroundPrimary w-full h-screen flex flex-col items-center justify-center lg:py-[120px] py-[100px] lg:px-[55px] px-[32px] gap-y-[60px]">
           <div className="flex flex-col gap-y-[20px]">
               <TextExtrabig text=" Real Stories from Satisfied Customers"/>

               <TextTiny text=" See how our landing page UI kit is making an impact."/>
           </div>
            <div className="lg:grid lg:grid-cols-2 gap-[30px] mt-6 ">
                <ReviewCard
                    review="Animas Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."
                    image="/LaurenM.png"
                    name="Lauren M."
                    role="UI Designer @Boo"
                />
                <ReviewCard
                    review="Animas Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."
                    image="/DavidB.png"
                    name="Lauren M."
                    role="UI Designer @Boo"
                />
            </div>
        </div>
    );
};