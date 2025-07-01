# NavigationButton Component

A reusable navigation button component for sliders and carousels with forward ref support.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `direction` | `'prev' \| 'next'` | ✅ | - | Direction of navigation |
| `onClick` | `() => void` | ❌ | - | Click handler function |
| `disabled` | `boolean` | ❌ | `false` | Whether the button is disabled |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | ✅ | - | Button content (usually an icon) |

## Usage

```tsx
import { NavigationButton } from '../components';
import { ChevronLeftIcon, ChevronRightIcon } from '../public/icons';

const prevRef = useRef(null);
const nextRef = useRef(null);

<NavigationButton
  ref={prevRef}
  direction="prev"
  onClick={() => console.log('Previous')}
>
  <ChevronLeftIcon />
</NavigationButton>

<NavigationButton
  ref={nextRef}
  direction="next"
  onClick={() => console.log('Next')}
>
  <ChevronRightIcon />
</NavigationButton>
```

## Features

- Forward ref support for external library integration
- Accessibility with proper ARIA labels
- Hover and disabled states
- Consistent styling
- Type-safe direction prop 