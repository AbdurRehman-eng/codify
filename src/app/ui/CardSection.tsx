import SquareCard from './subui/SquareCard';
import Image from "next/image";
import { cards } from '@/../public/assets/data/cards';

function CardSection() {
  return (
    <div className="relative h-full w-full p-8">
      {/* Background Image */}
      <Image
        src="/assets/images/cards/background.png"
        alt="Card Background"
        fill
        style={{ objectFit: "cover" }}
        className=""
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-[5vh] place-items-center">
        {cards.slice(0, 6).map((card) => (
          <SquareCard
            key={card.id}
            title={card.title}
            detail={card.detail}
            color={card.color}
            iconSrc={card.icon}
            bgSrc={card.background}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
