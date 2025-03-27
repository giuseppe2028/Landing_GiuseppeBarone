import {CardFeature} from "./cardFeature.jsx";
import {ReviewCard} from "./ReviewCard.jsx";
import {TextExtrabig, TextTiny} from "./Text.jsx";
import {reviewCustomerCardsCostant, reviewsCustomerSectionCostants} from "../costants/PageCostants.js";

export const ReviewsCustomerSection = () => {
    return (
        <div className="bg-backgroundPrimary w-full lg:h-screen flex flex-col items-center justify-center lg:py-[120px] py-[100px] lg:px-[55px] px-[32px] gap-y-[60px]">
           <div className="flex flex-col gap-y-[20px]">
               <TextExtrabig text={reviewsCustomerSectionCostants.title}/>

               <TextTiny text={reviewsCustomerSectionCostants.subtitle}/>
           </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-y-[30px] lg:gap-x-[30px]">
                {
                    reviewCustomerCardsCostant.map(
                        el => <ReviewCard review={el.review} reviewRating={el.rating} role={el.role} image={el.image} name={el.name}/>
                    )
                }
            </div>
        </div>
    );
};