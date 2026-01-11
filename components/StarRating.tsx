import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = true,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const iconSize = sizeClasses[size];

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(
          <Star
            key={i}
            className={`${iconSize} fill-[#FFB800] text-[#FFB800]`}
          />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(
          <div key={i} className="relative">
            <Star className={`${iconSize} text-gray-300`} />
            <StarHalf
              className={`${iconSize} fill-[#FFB800] text-[#FFB800] absolute top-0 left-0`}
            />
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <Star
            key={i}
            className={`${iconSize} text-gray-300`}
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {renderStars()}
      </div>
      {showNumber && (
        <span className="text-gray-600 font-semibold">
          {rating.toFixed(1)}/{maxRating}
        </span>
      )}
    </div>
  );
}
