export const ReviewCard = ({ image, name, role, review, reviewRating }) => {
    const stars = Array.from({ length: reviewRating }, (_, index) => index);

    return (
        <div className="grid grid-cols-2 bg-white rounded-[20px] p-[40px] border border-backgroundButtonSecondary">
            <div>
                <div><img src={image} alt="reviewer" className="w-16 h-16 rounded-full" /></div>
                <div className="font-bold text-medium">{name}</div>
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