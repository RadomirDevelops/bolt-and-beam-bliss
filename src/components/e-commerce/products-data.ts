
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  material: string;
  size: string;
  rating: number;
  reviewCount: number;
  image: string;
  tag?: 'New' | 'Sale' | 'Best Seller';
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'bolt-1',
    name: 'Hex Head Bolts',
    description: 'High-strength structural bolt with hexagonal head for easy installation.',
    price: 12.99,
    category: 'bolts',
    material: 'Stainless Steel',
    size: 'M10 x 50mm',
    rating: 5,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=500',
    tag: 'Best Seller',
    inStock: true
  },
  {
    id: 'bolt-2',
    name: 'Carriage Bolts',
    description: 'Smooth rounded head with square neck that prevents rotation when tightening.',
    price: 9.99,
    category: 'bolts',
    material: 'Zinc-Plated Steel',
    size: 'M8 x 40mm',
    rating: 4,
    reviewCount: 28,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=500',
    inStock: true
  },
  {
    id: 'nut-1',
    name: 'Hex Nuts',
    description: 'Standard hexagonal nuts compatible with various bolt sizes.',
    price: 5.99,
    category: 'nuts',
    material: 'Stainless Steel',
    size: 'M10',
    rating: 5,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1607346704322-c3413c565a4f?q=80&w=500',
    inStock: true
  },
  {
    id: 'nut-2',
    name: 'Lock Nuts',
    description: 'Self-locking design that prevents loosening under vibration.',
    price: 7.49,
    originalPrice: 9.99,
    category: 'nuts',
    material: 'Grade 8 Steel',
    size: 'M8',
    rating: 4,
    reviewCount: 32,
    image: 'https://images.unsplash.com/photo-1602066215357-07c701d6f228?q=80&w=500',
    tag: 'Sale',
    inStock: true
  },
  {
    id: 'screw-1',
    name: 'Self-Tapping Screws',
    description: 'Creates its own thread as it enters material, ideal for metal and plastic.',
    price: 8.49,
    category: 'screws',
    material: 'Zinc-Plated Steel',
    size: '#8 x 1-1/2"',
    rating: 4,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1615398600617-1ae0f0f6a3c0?q=80&w=500',
    inStock: true
  },
  {
    id: 'screw-2',
    name: 'Wood Screws',
    description: 'Specifically designed for woodworking projects, with deep threads.',
    price: 6.99,
    category: 'screws',
    material: 'Brass',
    size: '#10 x 2"',
    rating: 5,
    reviewCount: 18,
    image: 'https://images.unsplash.com/photo-1518681845152-a8cc589f21e6?q=80&w=500',
    tag: 'New',
    inStock: true
  },
  {
    id: 'washer-1',
    name: 'Flat Washers',
    description: 'Distributes load and prevents damage to material surface.',
    price: 3.49,
    category: 'washers',
    material: 'Stainless Steel',
    size: 'M10',
    rating: 5,
    reviewCount: 41,
    image: 'https://images.unsplash.com/photo-1627131599431-401a79208722?q=80&w=500',
    inStock: true
  },
  {
    id: 'washer-2',
    name: 'Lock Washers',
    description: 'Prevents fasteners from loosening due to vibrations.',
    price: 4.29,
    category: 'washers',
    material: 'Spring Steel',
    size: 'M8',
    rating: 4,
    reviewCount: 16,
    image: 'https://images.unsplash.com/photo-1618236301299-31f7101201d2?q=80&w=500',
    inStock: true
  },
  {
    id: 'anchor-1',
    name: 'Wall Anchors',
    description: 'Secures fixtures to drywall when studs are not available.',
    price: 10.99,
    originalPrice: 14.99,
    category: 'anchors',
    material: 'Nylon',
    size: '1/4"',
    rating: 4,
    reviewCount: 38,
    image: 'https://images.unsplash.com/photo-1604401345963-57ea9099e866?q=80&w=500',
    tag: 'Sale',
    inStock: true
  },
  {
    id: 'specialty-1',
    name: 'Eye Bolts',
    description: 'Bolt with a looped head for attaching ropes or cables.',
    price: 15.99,
    category: 'specialty',
    material: 'Forged Steel',
    size: 'M12 x 80mm',
    rating: 5,
    reviewCount: 14,
    image: 'https://images.unsplash.com/photo-1508748866429-950dc5960b8e?q=80&w=500',
    inStock: true
  },
  {
    id: 'specialty-2',
    name: 'Concrete Wedge Anchors',
    description: 'Heavy-duty anchor for securing objects to concrete.',
    price: 18.99,
    category: 'specialty',
    material: 'Carbon Steel',
    size: '1/2" x 5"',
    rating: 5,
    reviewCount: 27,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500',
    tag: 'New',
    inStock: true
  },
  {
    id: 'bolt-3',
    name: 'T-Head Bolts',
    description: 'T-shaped head designed for sliding into T-slots in machinery or fixtures.',
    price: 14.49,
    category: 'bolts',
    material: 'Hardened Steel',
    size: 'M12 x 60mm',
    rating: 4,
    reviewCount: 19,
    image: 'https://images.unsplash.com/photo-1611118243957-37b3981a76ac?q=80&w=500',
    inStock: true
  }
];
