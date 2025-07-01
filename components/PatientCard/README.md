# PatientCard Component

A reusable card component for displaying patient information with video play functionality.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `patient` | `Patient` | ✅ | - | Patient data object containing name, subtitle, and image |
| `onPlayClick` | `(patient: Patient) => void` | ❌ | - | Callback function when play button is clicked |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

## Usage

```tsx
import { PatientCard } from '../components';

const handlePlayClick = (patient: Patient) => {
  console.log('Playing video for:', patient.name);
};

<PatientCard
  patient={{
    id: '1',
    name: 'John Doe',
    subtitle: 'FUE | 2500 Graft',
    image: '/patient-image.jpg'
  }}
  onPlayClick={handlePlayClick}
/>
```

## Features

- Responsive design
- Lazy loading images
- Hover animations
- Accessibility support
- Play button overlay
- Gradient overlay for text readability 