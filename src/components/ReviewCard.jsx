import { TextMedium } from "./Text.jsx";

export const ReviewCard = ({ image, name, role, review, reviewRating }) => {
    return (
        <div className="flex gap-y-[30px] lg:gap-x-[30px] bg-white rounded-[20px] lg:p-[40px] py-[40px] px-30 border border-backgroundButtonSecondary lg:text-start text-center lg:flex-row flex-col">
            <div className="flex flex-col gap-y-[16px] justify-center items-center flex-1">
                <img width="120px" height="120px" src={image} alt="reviewer" className="rounded-full" />
                <TextMedium text={name} />
                <div className="text-gray-500">{role}</div>
            </div>

            <div className="lg:flex-col flex-col-reverse flex gap-y-[24px] justify-center lg:items-start items-center flex-2">
                <div className="flex justify-center">
                    <StarComponent reviewRating={reviewRating}/>
                </div>
                <div className="mt-4 text-gray-700">{review}</div>
            </div>
        </div>
    );
};

const StarComponent = ({ reviewRating }) => {
    const arr = Array.from({ length: reviewRating });
    console.log(arr); // Controlla la lunghezza dell'array

    return (
        <div className="flex gap-x-[5px]">
            {arr.map((_, index) => (
                <img key={index} src="/StarIcon.svg" alt="star" />
            ))}
        </div>
    );
};