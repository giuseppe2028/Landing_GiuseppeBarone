import {CardFeature} from "./cardFeature.jsx";
import {ReviewCard} from "./ReviewCard.jsx";

export const ReviewsCustomerSection = () => {
    return (
        <div className="bg-backgroundPrimary w-full h-screen flex flex-col items-center justify-center">
            <div className="text-extrabig font-bold">
                Real Stories from Satisfied Customers
            </div>
            <div className="text-tiny text-center">
                See how our landing page UI kit is making an impact.
            </div>
            {/* Griglia per le recensioni */}
            <div className="grid grid-cols-2 gap-[30px] mt-6">
                <ReviewCard
                    review="Animas Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."
                    image="/logo.svg"
                    name="Lauren M."
                    role="UI Designer @Boo"
                />
                <ReviewCard
                    review="Animas Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."
                    image="/logo.svg"
                    name="Lauren M."
                    role="UI Designer @Boo"
                />
            </div>
        </div>
    );
};