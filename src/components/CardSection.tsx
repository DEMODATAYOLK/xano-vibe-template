import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CardSectionProps {
  className?: string;
}

export const CardSection: React.FC<CardSectionProps> = ({ className = '' }) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    // If clicking the same card, flip it back
    if (flippedCard === cardId) {
      setFlippedCard(null);
    } else {
      // Flip the new card (automatically flips previous card back)
      setFlippedCard(cardId);
    }
  };

  const generateCards = (rowIndex: number) => {
    const cards = [];
    for (let i = 0; i < 20; i++) {
      const cardId = rowIndex * 20 + i;
      const isFlipped = flippedCard === cardId;
      
      cards.push(
        <div
          key={cardId}
          className={`card-container ${isFlipped ? 'flipped' : ''}`}
          style={{
            left: `${i * 4}%`,
            zIndex: isFlipped ? 1000 : i + 1,
          }}
          onClick={() => handleCardClick(cardId)}
        >
          <div className="card-inner">
            {/* Front side of card */}
            <div className="card-front">
              <Card className="h-full w-full cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="h-full p-0">
                  <img 
                    src="/backside.png" 
                    alt={`Card ${cardId + 1}`}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Back side of card */}
            <div className="card-back">
              <Card className="h-full w-full cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="h-full p-0">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/Nattothemoon/Tarot/m14.jpg" 
                    alt={`Card ${cardId + 1} backside`}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div className={`card-section ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Interactive Card Collection</h3>
        <p className="text-muted-foreground">
          Click any card to flip it and see the backside. Only one card can be flipped at a time.
        </p>
      </div>
      
      <div className="space-y-8">
        {[0, 1, 2].map((rowIndex) => (
          <div key={rowIndex} className="card-row">
            {generateCards(rowIndex)}
          </div>
        ))}
      </div>
    </div>
  );
};
