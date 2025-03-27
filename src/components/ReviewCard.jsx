import {TextMedium} from "./Text.jsx";

export const ReviewCard = ({ image, name, role, review, reviewRating }) => {
    const stars = Array.from({ length: reviewRating }, (_, index) => index);

    return (
        <div className="flex gap-x-[30px] bg-white rounded-[20px] p-[40px] border border-backgroundButtonSecondary">
            <div className="flex flex-col gap-y-[16px] justify-center">
                <img width="120px" height="120px" src={image} alt="reviewer" className="rounded-full" />
                <TextMedium text={name}/>
                <div className="text-gray-500">{role}</div>
            </div>

            <div>
                <div className="flex">
                    {stars.map((_, index) => (
                        <img key={index} src="/StarIcon.svg" alt="star" className="w-6 h-6" />
                    ))}
                </div>

                <div className="mt-4 text-gray-700">{review}</div>
            </div>
        </div>
    );
};