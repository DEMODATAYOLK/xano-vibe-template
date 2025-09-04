import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { tarotCardService, TarotCard } from '@/lib/xano';

interface CardSectionProps {
  className?: string;
}

export const CardSection: React.FC<CardSectionProps> = ({ className = '' }) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [tarotCards, setTarotCards] = useState<TarotCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tarot cards on component mount
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(null);
        const cards = await tarotCardService.getAllCards();
        setTarotCards(cards);
      } catch (err: any) {
        setError(err.message || 'Failed to load tarot cards');
        console.error('Error fetching tarot cards:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

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
      
      // Get the tarot card data for this position, or use a fallback
      const tarotCard = tarotCards[cardId] || null;
      
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
                    src={tarotCard?.img_url || "https://cdn.jsdelivr.net/gh/Nattothemoon/Tarot/m14.jpg"} 
                    alt={tarotCard?.name || `Card ${cardId + 1} backside`}
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

  // Show loading state
  if (loading) {
    return (
      <div className={`card-section ${className}`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Interactive Card Collection</h3>
          <p className="text-muted-foreground">
            Loading tarot cards...
          </p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className={`card-section ${className}`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Interactive Card Collection</h3>
          <p className="text-red-500">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-section ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Interactive Card Collection</h3>
        <p className="text-muted-foreground">
          Click any card to flip it and see the tarot card. Only one card can be flipped at a time.
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
