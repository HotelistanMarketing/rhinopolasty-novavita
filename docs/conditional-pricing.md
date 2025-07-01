# Conditional Pricing Feature

## Overview
This feature implements conditional pricing based on the domain and page location. The price displayed in the HeroSection component changes depending on the domain and whether the user is on the homepage.

## How it works

### Price Logic
- **Default Price**: 1990€ (shown on all domains and pages except folycure.com homepage)
- **Special Price**: 2499€ (shown only on folycure.com homepage)

### Domain Detection
The system detects the current domain using the `useDomain` hook and checks if it's `folycure.com` or `www.folycure.com`.

### Homepage Detection
A page is considered the homepage if:
- Path is `/` (root)
- Path matches locale pattern like `/en`, `/tr`, `/fr`, `/de`, `/it`
- Note: The root path `/` redirects to `/en` automatically

### Implementation Details

#### Files Modified
1. `components/HeroSection/HeroSection.tsx` - Main component with conditional pricing
2. `hooks/useDomain.ts` - Custom hook for domain detection
3. `utils/domainUtils.ts` - Utility functions for domain logic
4. `utils/index.ts` - Exports for easy access

#### Key Functions
- `getDomainPrice(hostname, pathname)` - Returns appropriate price based on domain and path
- `useDomain()` - React hook that provides domain information
- `isFolycureDomain(hostname)` - Checks if domain is folycure.com or www.folycure.com
- `isHomepage(pathname)` - Checks if current path is homepage

## Usage Example
```tsx
import { getDomainPrice } from '@/utils/domainUtils';

const price = getDomainPrice('www.folycure.com', '/en'); // Returns '2499€'
const price2 = getDomainPrice('folycure.com', '/en'); // Returns '2499€'
const price3 = getDomainPrice('otherdomain.com', '/en'); // Returns '1990€'
const price4 = getDomainPrice('www.folycure.com', '/some-other-page'); // Returns '1990€'
```

## Testing
To test the feature:
1. Access the site on folycure.com homepage (folycure.com/en or www.folycure.com/en) - should show 2499€
2. Access the site on folycure.com other pages - should show 1990€
3. Access the site on any other domain - should show 1990€

## Debugging
The component includes console logging to help debug domain and pathname detection. Check the browser console for debug information when testing. 