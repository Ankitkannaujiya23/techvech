import { Globe, Smartphone, Sparkles } from "lucide-react";

const icons = { Globe, Smartphone, Sparkles };

// Maps the icon name stored in lib/services.js to a lucide icon.
export default function ServiceIcon({ name, size = 22 }) {
  const Icon = icons[name] || Globe;
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
