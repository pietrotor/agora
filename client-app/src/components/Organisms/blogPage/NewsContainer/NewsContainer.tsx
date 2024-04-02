"use client";

import { ArticleLoader, Button, ButtonSizeEnum } from "@/components/Atoms";
import { ArticleCard } from "@/components/Molecules";
import { BlogResponse } from "@/interfaces";
import { useNews } from "@/services/blog";

const NewsContainer = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useNews({
    params: {
      page: 1,
    },
  });
  return (
    <section className="container flex flex-col items-center space-y-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-16">
        {isLoading ? (
          <>
            {Array.from(Array(10).keys()).map((index) => (
              <ArticleLoader key={index} />
            ))}
          </>
        ) : (
          <>
            {data?.pages.map((page: BlogResponse) => (
              <>
                {page.articles
                  ?.map((item, index) => (
                    <ArticleCard
                      key={index}
                      category={new Date(item.publishedAt).toDateString()}
                      description={item.description}
                      image={item.urlToImage}
                      title={item.title}
                      url={item.url}
                      isExternalUrl
                    />
                  ))
                  .reverse()}
              </>
            ))}
          </>
        )}
      </div>
      <Button
        size={ButtonSizeEnum.LG}
        isLoading={isFetchingNextPage}
        onClick={() => {
          console.log("CLKICK");
          fetchNextPage();
        }}
      >
        Ver más
      </Button>
    </section>
  );
};

export { NewsContainer };
