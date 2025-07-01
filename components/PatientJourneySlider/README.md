# PatientJourneySlider Component

A responsive slider component showcasing patient journey videos with navigation controls. Built with Swiper.js and follows SOLID principles.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ❌ | `"Our Patient Journey"` | Section title |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `onPatientVideoClick` | `(patient: Patient) => void` | ❌ | - | Callback when patient video is clicked |

## Usage

```tsx
import { PatientJourneySlider } from '../components';

const handleVideoClick = (patient: Patient) => {
  // Handle video play logic
  console.log('Playing video for:', patient.name);
};

<PatientJourneySlider
  title="Our Success Stories"
  onPatientVideoClick={handleVideoClick}
  className="my-custom-class"
/>
```

## Features

- **Responsive Design**: 1 slide on mobile, 2 on tablet, 3 on desktop
- **Touch/Swipe Support**: Native touch gestures
- **Keyboard Navigation**: Arrow key support
- **Accessibility**: ARIA labels and semantic HTML
- **Custom Navigation**: External navigation buttons
- **Performance**: Lazy loading and optimized rendering
- **Type Safety**: Full TypeScript support

## Architecture

- **SOLID Principles**: Single responsibility, dependency inversion
- **Custom Hook**: `useSwiper` for navigation logic
- **Reusable Components**: `PatientCard`, `NavigationButton`
- **Separated Concerns**: Types, constants, and logic are separated

## Dependencies

- `swiper` - Modern slider library
- Custom components and hooks
- Icon components 