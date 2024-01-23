import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <Card isFooterBlurred isPressable className="shadow-2xl shadow-red-800">
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          width="100%"
          alt={anime.name}
          className="w-full object-cover h-96"
          src={`https://shikimori.one${anime.image.original}`}
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-4">
        <b className="text-lg font-bold">{anime.name}</b>
        <div className="flex gap-6">
          <Chip className="capitalize">{anime.kind}</Chip>
          <Chip
            startContent={
              <Image
                src="/episodes.svg"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            }
            variant="bordered"
          >
            {anime.episodes || anime.episodes_aired}
          </Chip>
          <Chip
            startContent={
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
            }
            variant="faded"
            className="font-bold text-yellow-500"
          >
            {anime.score}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AnimeCard;
