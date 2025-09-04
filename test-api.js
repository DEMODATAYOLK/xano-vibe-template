/**
 * Tarot Card API Test
 * 
 * This test file validates the tarot card API endpoint functionality.
 * Run with: node test-api.js
 * 
 * Tests:
 * - API endpoint accessibility
 * - Response format validation
 * - Data structure verification
 * - Error handling
 */

async function testTarotAPI() {
  try {
    console.log('🧪 Testing Tarot Card API...');
    console.log('📡 Endpoint: https://xi5k-kqun-rjxc.n7e.xano.io/api:bhawqcMo/TarotCard');
    
    const response = await fetch('https://xi5k-kqun-rjxc.n7e.xano.io/api:bhawqcMo/TarotCard');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const cards = await response.json();
    
    // Validate response structure
    if (!Array.isArray(cards)) {
      throw new Error('Response is not an array');
    }
    
    if (cards.length === 0) {
      throw new Error('No cards returned from API');
    }
    
    // Validate first card structure
    const firstCard = cards[0];
    const requiredFields = ['id', 'name', 'fortune_telling', 'keyword', 'light_meaning', 'shadow_meaning', 'img_url'];
    
    for (const field of requiredFields) {
      if (!(field in firstCard)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    console.log(`✅ API Success! Retrieved ${cards.length} tarot cards`);
    console.log('📊 Sample card data:');
    console.log({
      id: firstCard.id,
      name: firstCard.name,
      img_url: firstCard.img_url,
      keywords: firstCard.keyword,
      fortune_telling_count: firstCard.fortune_telling.length,
      light_meaning_count: firstCard.light_meaning.length,
      shadow_meaning_count: firstCard.shadow_meaning.length
    });
    
    // Test image URL accessibility
    console.log('🖼️  Testing image URL accessibility...');
    const imageResponse = await fetch(firstCard.img_url, { method: 'HEAD' });
    if (imageResponse.ok) {
      console.log('✅ Image URL is accessible');
    } else {
      console.log('⚠️  Image URL may not be accessible');
    }
    
    return true;
  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
    return false;
  }
}

// Run the test
console.log('🚀 Starting Tarot Card API Regression Test...\n');
testTarotAPI().then(success => {
  if (success) {
    console.log('\n🎉 All tests passed! API is working correctly.');
  } else {
    console.log('\n💥 Tests failed! Check the API endpoint.');
    process.exit(1);
  }
});
