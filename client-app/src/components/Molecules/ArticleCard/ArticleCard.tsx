/* eslint-disable @next/next/no-img-element */
import { ArticleCardProps } from "./ArticleCard.types";
import { Button, Chip } from "@/components/Atoms";

const ArticleCard = ({
  description,
  image,
  title,
  category,
  url,
  isExternalUrl = false,
}: ArticleCardProps) => {
  return (
    <article className="w-full group space-y-5 relative">
      <img
        alt="imagen referente al servicio"
        className="w-full rounded-2xl aspect-[4/3] object-cover"
        src={image}
      />
      <h4 className="text-inherint font-black text-lg mb-4">{title}</h4>
      <p className="text-inherit text-sm">{description}</p>
      <Button href={url} isExternalLink={isExternalUrl}>
        <p className="text-sm text-white">CONOCER MÁS</p>
      </Button>
      <div className="absolute top-0 left-6">
        <Chip>{category.toUpperCase()}</Chip>
      </div>
    </article>
  );
};

export { ArticleCard };
