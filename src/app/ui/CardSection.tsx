import SquareCard from './subui/SquareCard'
import Image from 'next/image';
import { cards } from '@/../public/assets/data/cards'; 


function CardSection() {
    return ( 
        <div className="border-2 border-border relative flex h-full w-full flex-shrink-0 flex-wrap justify-center gap-x-8 gap-y-8 p-8">
           <Image
                  src="/assets/images/cards/background.png"
                  alt="Card Background"
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0"
                />
          
    {cards.map((card) => (
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
    );
}

export default CardSection;
