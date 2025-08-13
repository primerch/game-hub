import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";

export interface Platform {
  id: number;
  slug: string;
}

interface Props {
  parent_platforms: { platform: Platform }[];
}

const PlatformIconList = ({ parent_platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="flex gap-2">
      {parent_platforms.map(({ platform }) => {
        const Icon = iconMap[platform.slug];
        return <span key={platform.id}>{Icon ? <Icon /> : null}</span>;
      })}
    </div>
  );
};
export default PlatformIconList;
