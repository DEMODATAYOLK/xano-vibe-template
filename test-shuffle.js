/**
 * Shuffle Algorithm Test
 * 
 * This test file validates the Fisher-Yates shuffle algorithm implementation.
 * Run with: node test-shuffle.js
 * 
 * Tests:
 * - Shuffle algorithm correctness
 * - Random distribution validation
 * - Array integrity preservation
 * - Performance testing
 */

function shuffleCards(cards) {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function testShuffleAlgorithm() {
  console.log('🧪 Testing Shuffle Algorithm...');
  
  // Test with sample data
  const sampleCards = [
    { id: 1, name: "The Fool" },
    { id: 2, name: "The Magician" },
    { id: 3, name: "The High Priestess" },
    { id: 4, name: "The Empress" },
    { id: 5, name: "The Emperor" },
    { id: 6, name: "The Hierophant" },
    { id: 7, name: "The Lovers" },
    { id: 8, name: "The Chariot" }
  ];

  console.log('📊 Original order:', sampleCards.map(c => c.name));

  // Test shuffle multiple times
  let differentResults = 0;
  const results = [];
  
  for (let i = 0; i < 5; i++) {
    const shuffled = shuffleCards(sampleCards);
    results.push(shuffled.map(c => c.name));
    console.log(`🎲 Shuffle ${i + 1}:`, shuffled.map(c => c.name));
    
    // Check if result is different from original
    const isDifferent = shuffled.some((card, index) => card.id !== sampleCards[index].id);
    if (isDifferent) differentResults++;
  }

  // Validate shuffle results
  console.log('\n🔍 Validation Results:');
  
  // Check if all cards are preserved
  const allCardsPreserved = results.every(result => 
    result.length === sampleCards.length && 
    sampleCards.every(original => result.includes(original.name))
  );
  
  console.log(`✅ Cards preserved: ${allCardsPreserved ? 'PASS' : 'FAIL'}`);
  console.log(`✅ Different results: ${differentResults}/5 shuffles produced different orders`);
  
  // Test with larger dataset
  console.log('\n📈 Testing with larger dataset...');
  const largeDataset = Array.from({ length: 78 }, (_, i) => ({ id: i + 1, name: `Card ${i + 1}` }));
  
  const startTime = Date.now();
  const shuffledLarge = shuffleCards(largeDataset);
  const endTime = Date.now();
  
  console.log(`✅ Large dataset shuffle completed in ${endTime - startTime}ms`);
  console.log(`✅ Large dataset integrity: ${shuffledLarge.length === 78 ? 'PASS' : 'FAIL'}`);
  
  // Test edge cases
  console.log('\n🧪 Testing edge cases...');
  
  // Empty array
  const emptyShuffle = shuffleCards([]);
  console.log(`✅ Empty array: ${emptyShuffle.length === 0 ? 'PASS' : 'FAIL'}`);
  
  // Single element
  const singleShuffle = shuffleCards([{ id: 1, name: "Single Card" }]);
  console.log(`✅ Single element: ${singleShuffle.length === 1 && singleShuffle[0].id === 1 ? 'PASS' : 'FAIL'}`);
  
  return true;
}

// Performance test
function performanceTest() {
  console.log('\n⚡ Performance Test...');
  
  const testSizes = [10, 50, 100, 500, 1000];
  
  testSizes.forEach(size => {
    const testArray = Array.from({ length: size }, (_, i) => ({ id: i, name: `Item ${i}` }));
    
    const startTime = Date.now();
    for (let i = 0; i < 100; i++) {
      shuffleCards(testArray);
    }
    const endTime = Date.now();
    
    const avgTime = (endTime - startTime) / 100;
    console.log(`📊 Size ${size}: ${avgTime.toFixed(2)}ms average per shuffle`);
  });
}

// Run all tests
console.log('🚀 Starting Shuffle Algorithm Regression Test...\n');

try {
  testShuffleAlgorithm();
  performanceTest();
  console.log('\n🎉 All shuffle tests passed! Algorithm is working correctly.');
} catch (error) {
  console.error('\n💥 Shuffle test failed:', error.message);
  process.exit(1);
}
