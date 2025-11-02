// Aliz - Montessori Teacher, Space Holder, Medicine Teacher
// Warm, earthy, nurturing color system

export const colors = {
  // Primary Earthy Palette
  primary: {
    terracotta: '#D4837C',     // Warm clay/terracotta
    terracottaDeep: '#C17766', // Deeper terracotta
    sage: '#A8B5A1',           // Soft sage green
    sageDark: '#8B9A87',       // Darker sage
    forest: '#3D5A4C',         // Deep forest green
    gold: '#C9A961',           // Warm gold/brass
    cream: '#F5F1E8',          // Warm cream background
    creamDark: '#EDE7DC',      // Slightly darker cream
  },

  // Gradients - Soft and nurturing
  gradients: {
    warm: 'from-terracotta-400 to-amber-300',
    earth: 'from-sage-500 to-forest-600',
    sunset: 'from-terracotta-300 via-amber-200 to-cream-100',
    nature: 'from-sage-400 via-forest-500 to-emerald-600',
    gentle: 'from-cream-50 to-amber-50',
  },

  // Backgrounds & Surfaces
  surfaces: {
    light: {
      primary: '#FAFAF8',      // Off-white
      secondary: '#F5F1E8',    // Warm cream
      tertiary: '#EDE7DC',     // Darker cream
    },
    overlay: {
      light: 'bg-white/60 backdrop-blur-sm',
      medium: 'bg-white/80 backdrop-blur-md',
      cream: 'bg-[#F5F1E8]/90 backdrop-blur-lg',
    }
  },

  // Text & Content
  text: {
    primary: '#2D2D2D',        // Soft black
    secondary: '#5A5A5A',      // Medium gray
    tertiary: '#8B8B8B',       // Light gray
    accent: '#3D5A4C',         // Forest green for emphasis
  },

  // Borders
  borders: {
    subtle: 'border-stone-200',
    medium: 'border-stone-300',
    strong: 'border-stone-400',
    accent: 'border-sage-300',
  }
};

// Glow effects for interactive elements - softer, warmer
export const glows = {
  warm: 'hover:shadow-lg hover:shadow-terracotta-300/30',
  earth: 'hover:shadow-lg hover:shadow-sage-400/30',
  gold: 'hover:shadow-lg hover:shadow-amber-300/30',
};

// Animation durations - slower, more meditative
export const animations = {
  pulse: {
    slow: '8s',
    medium: '6s',
    fast: '4s',
  },
  transition: {
    instant: '150ms',
    fast: '300ms',
    normal: '500ms',
    slow: '700ms',
  }
};
