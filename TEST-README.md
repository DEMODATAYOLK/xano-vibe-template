# 🧪 Tarot Card Application Test Suite

This directory contains regression tests for the Tarot Card application to ensure code quality and functionality.

## 📋 Test Files Overview

### `test-api.js`
- **Purpose**: Tests the tarot card API endpoint
- **Run**: `node test-api.js`
- **Tests**:
  - API endpoint accessibility
  - Response format validation
  - Data structure verification
  - Image URL accessibility
  - Error handling

### `test-shuffle.js`
- **Purpose**: Tests the Fisher-Yates shuffle algorithm
- **Run**: `node test-shuffle.js`
- **Tests**:
  - Shuffle algorithm correctness
  - Random distribution validation
  - Array integrity preservation
  - Performance testing
  - Edge case handling

### `test-animation.html`
- **Purpose**: Visual test for shuffle animations
- **Run**: Open in browser
- **Tests**:
  - Animation triggers
  - Button state management
  - Visual effects (bounce, glow)
  - Animation timing
  - Multiple iteration consistency

### `run-tests.js`
- **Purpose**: Automated test runner for all tests
- **Run**: `node run-tests.js`
- **Features**:
  - Runs all Node.js tests automatically
  - Provides test suite overview
  - Generates comprehensive test report
  - Exit codes for CI/CD integration

## 🚀 Quick Start

### Run All Tests
```bash
node run-tests.js
```

### Run Individual Tests
```bash
# API tests
node test-api.js

# Shuffle algorithm tests
node test-shuffle.js

# Animation tests (open in browser)
open test-animation.html
```

### Test Runner Options
```bash
# Show help
node run-tests.js --help

# Run specific test types (future feature)
node run-tests.js --api-only
node run-tests.js --shuffle-only
```

## 📊 Test Results

### Expected Output
- ✅ **API Test**: Should retrieve 78 tarot cards with proper structure
- ✅ **Shuffle Test**: Should produce different orders with preserved data
- ✅ **Animation Test**: Should show smooth bounce and glow effects

### Success Criteria
- All API endpoints return valid data
- Shuffle algorithm maintains data integrity
- Animations run smoothly without errors
- No console errors or warnings

## 🔧 Maintenance

### When to Run Tests
- After implementing new features
- Before deploying to production
- When modifying API endpoints
- After changing animation logic
- During code refactoring

### Adding New Tests
1. Create test file with descriptive name
2. Follow existing test patterns
3. Include comprehensive documentation
4. Add to `run-tests.js` test suite
5. Update this README

### Test File Standards
- Use descriptive names: `test-[feature].js`
- Include clear comments and documentation
- Test both success and failure cases
- Provide meaningful error messages
- Use consistent output formatting

## 🐛 Troubleshooting

### Common Issues
- **API Test Fails**: Check network connectivity and endpoint URL
- **Shuffle Test Fails**: Verify algorithm implementation
- **Animation Test Issues**: Check browser compatibility and CSS

### Debug Mode
Add `console.log` statements in test files for detailed debugging:
```javascript
console.log('Debug: Current state:', currentState);
```

## 📈 Performance Benchmarks

### Expected Performance
- **API Response**: < 2 seconds
- **Shuffle Algorithm**: < 1ms for 78 cards
- **Animation Duration**: 1 second total

### Monitoring
- Track test execution times
- Monitor API response times
- Watch for memory leaks in animations

## 🔄 Continuous Integration

### GitHub Actions (Example)
```yaml
name: Test Suite
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: node run-tests.js
```

### Pre-commit Hooks
```bash
# Add to package.json scripts
"precommit": "node run-tests.js"
```

---

**Note**: These test files are preserved for regression testing and should never be deleted. They ensure code quality and catch regressions early in the development process.
