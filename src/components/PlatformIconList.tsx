import {
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

export interface Platform {
  platform: {
    id: number;
    slug: string;
  };
}

interface Props {
  parent_platforms: Platform[];
}

function slugToIcon(pstring: string) {
  if (pstring === "pc") return <FaWindows className="mr-2 inline" />;
  if (pstring === "playstation")
    return <FaPlaystation className="mr-2 inline" />;
  if (pstring === "nintendo")
    return <BsNintendoSwitch className="mr-2 inline" />;
  if (pstring === "mac") return <FaApple className="mr-2 inline" />;
  if (pstring === "xbox") return <FaXbox className="mr-2 inline" />;
  if (pstring === "linux") return <FaLinux className="mr-2 inline" />;
}

const PlatformIconList = ({ parent_platforms }: Props) => {
  return (
    <div>
      {parent_platforms.map(({ platform }) => (
        <>
          <span key={platform.id}>{slugToIcon(platform.slug)}</span>
        </>
      ))}
    </div>
  );
};
export default PlatformIconList;
