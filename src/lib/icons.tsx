import React from 'react';
import {
  // Navigation & UI
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Heart,
  Star,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  
  // E-commerce & Shopping
  Package,
  Truck,
  CreditCard,
  Gift,
  Tag,
  Percent,
  ShoppingBag,
  
  // Environment & Recycling
  Recycle,
  Leaf,
  TreePine,
  Sprout,
  Globe,
  Mountain,
  Waves,
  
  // Home & Lifestyle
  Home,
  Sofa,
  Lamp,
  Bed,
  Bath,
  Utensils,
  Coffee,
  
  // Fashion & Style
  Shirt,
  ShirtIcon,
  Watch,
  Gem,
  
  // Technology & Electronics
  Smartphone,
  Laptop,
  Monitor,
  Headphones,
  Camera,
  Gamepad2,
  Wifi,
  Battery,
  
  // Office & Work
  Briefcase,
  FileText,
  PenTool,
  Calculator,
  Printer,
  BookOpen,
  Clipboard,
  
  // Sports & Fitness
  Dumbbell,
  Activity,
  Bike,
  Car,
  Plane,
  Ship,
  MapPin,
  
  // Art & Creative
  Palette,
  Brush,
  Scissors,
  Image,
  Music,
  Video,
  Mic,
  
  // Communication & Social
  Mail,
  Phone,
  MessageCircle,
  Share2,
  ThumbsUp,
  Users,
  Bell,
  
  // Security & Settings
  Lock,
  Shield,
  Eye,
  EyeOff,
  Settings,
  HelpCircle,
  Info,
  
  // Time & Calendar
  Clock,
  Calendar,
  Timer,
  History,
  
  // Weather & Nature
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Snowflake,
  Wind,
  
  // Food & Dining
  Apple,
  Pizza,
  Cake,
  Wine,
  IceCream,
  Cookie,
  
  // Health & Medical
  Heart as HeartIcon,
  Stethoscope,
  Pill,
  Syringe,
  Bandage,
  
  // Education & Learning
  GraduationCap,
  Book,
  Lightbulb,
  Target,
  Award,
  Trophy,
  
  // Travel & Transportation
  Map,
  Compass,
  Navigation,
  Train,
  Bus,
  
  // Tools & Utilities
  Wrench,
  Hammer,
  Drill,
  Paintbrush,
  
  // Miscellaneous
  Plus,
  Minus,
  Check,
  X as XIcon,
  AlertCircle,
  CheckCircle,
  XCircle,
  Loader2,
  RefreshCw,
  Download,
  Upload,
  Copy,
  Trash2,
  Edit,
  Save,
  ExternalLink,
} from 'lucide-react';

// Icon Library Component
export const IconLibrary = {
  // Navigation & UI
  menu: Menu,
  close: X,
  search: Search,
  cart: ShoppingCart,
  user: User,
  heart: Heart,
  star: Star,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  play: Play,
  pause: Pause,
  
  // E-commerce & Shopping
  package: Package,
  truck: Truck,
  creditCard: CreditCard,
  gift: Gift,
  tag: Tag,
  percent: Percent,
  shoppingBag: ShoppingBag,
  
  // Environment & Recycling
  recycle: Recycle,
  leaf: Leaf,
  tree: TreePine,
  sprout: Sprout,
  globe: Globe,
  mountain: Mountain,
  waves: Waves,
  
  // Home & Lifestyle
  home: Home,
  sofa: Sofa,
  lamp: Lamp,
  bed: Bed,
  bath: Bath,
  kitchen: Utensils,
  utensils: Utensils,
  coffee: Coffee,
  
  // Fashion & Style
  shirt: Shirt,
  shirtIcon: ShirtIcon,
  watch: Watch,
  gem: Gem,
  
  // Technology & Electronics
  smartphone: Smartphone,
  laptop: Laptop,
  monitor: Monitor,
  headphones: Headphones,
  camera: Camera,
  gamepad: Gamepad2,
  wifi: Wifi,
  battery: Battery,
  
  // Office & Work
  briefcase: Briefcase,
  fileText: FileText,
  penTool: PenTool,
  calculator: Calculator,
  printer: Printer,
  bookOpen: BookOpen,
  clipboard: Clipboard,
  
  // Sports & Fitness
  dumbbell: Dumbbell,
  activity: Activity,
  bike: Bike,
  car: Car,
  plane: Plane,
  ship: Ship,
  mapPin: MapPin,
  
  // Art & Creative
  palette: Palette,
  brush: Brush,
  scissors: Scissors,
  image: Image,
  music: Music,
  video: Video,
  mic: Mic,
  
  // Communication & Social
  mail: Mail,
  phone: Phone,
  messageCircle: MessageCircle,
  share: Share2,
  thumbsUp: ThumbsUp,
  users: Users,
  bell: Bell,
  
  // Security & Settings
  lock: Lock,
  shield: Shield,
  eye: Eye,
  eyeOff: EyeOff,
  settings: Settings,
  helpCircle: HelpCircle,
  info: Info,
  
  // Time & Calendar
  clock: Clock,
  calendar: Calendar,
  timer: Timer,
  history: History,
  
  // Weather & Nature
  sun: Sun,
  moon: Moon,
  cloud: Cloud,
  cloudRain: CloudRain,
  snowflake: Snowflake,
  wind: Wind,
  
  // Food & Dining
  apple: Apple,
  pizza: Pizza,
  cake: Cake,
  wine: Wine,
  iceCream: IceCream,
  cookie: Cookie,
  
  // Health & Medical
  heartIcon: HeartIcon,
  stethoscope: Stethoscope,
  pill: Pill,
  syringe: Syringe,
  bandage: Bandage,
  
  // Education & Learning
  graduationCap: GraduationCap,
  book: Book,
  lightbulb: Lightbulb,
  target: Target,
  award: Award,
  trophy: Trophy,
  
  // Travel & Transportation
  map: Map,
  compass: Compass,
  navigation: Navigation,
  train: Train,
  bus: Bus,
  
  // Tools & Utilities
  wrench: Wrench,
  hammer: Hammer,
  drill: Drill,
  paintbrush: Paintbrush,
  
  // Miscellaneous
  plus: Plus,
  minus: Minus,
  check: Check,
  x: XIcon,
  alertCircle: AlertCircle,
  checkCircle: CheckCircle,
  xCircle: XCircle,
  loader: Loader2,
  refresh: RefreshCw,
  download: Download,
  upload: Upload,
  copy: Copy,
  trash: Trash2,
  edit: Edit,
  save: Save,
  externalLink: ExternalLink,
};

// Icon Component with consistent styling
export interface IconProps {
  name: keyof typeof IconLibrary | string;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  color 
}) => {
  const IconComponent = IconLibrary[name as keyof typeof IconLibrary];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in IconLibrary`);
    return null;
  }
  
  return (
    <IconComponent 
      size={size} 
      className={className}
      color={color}
    />
  );
};

// Category Icons Mapping
export const CategoryIcons = {
  'Home Decor': 'home',
  'Fashion': 'shirt',
  'Garden': 'sprout',
  'Electronics': 'smartphone',
  'Kitchen': 'kitchen',
  'Office': 'briefcase',
  'Sports': 'activity',
  'Art & Crafts': 'palette',
} as const;

// Feature Icons Mapping
export const FeatureIcons = {
  'Premium Quality': 'award',
  'Fast Delivery': 'truck',
  'Affordable Prices': 'tag',
  'Eco-Friendly': 'leaf',
  'Customer Support': 'users',
  'Secure Payment': 'shield',
} as const;

export default Icon;
