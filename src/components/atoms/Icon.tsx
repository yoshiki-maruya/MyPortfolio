import { icons } from "../../../node_modules/lucide-react";

export type IIconProps = {
  name: string;
  color?: string;
  size?: number;
};

const Icon: React.FC<IIconProps> = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
