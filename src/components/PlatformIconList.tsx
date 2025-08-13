export interface Platform {
  platform: {
    id: number;
    slug: string;
  };
}

interface Props {
  parent_platforms: Platform[];
}

const PlatformIconList = ({ parent_platforms }: Props) => {
  return (
    <div>
      {parent_platforms.map(({ platform }) => (
        <span key={platform.id}>{platform.slug}</span>
      ))}
    </div>
  );
};
export default PlatformIconList;
