type TArticleHeaderProps = {
  title: string;
  date: string;
};

const ArticleHeader = ({ date, title }: TArticleHeaderProps) => {
  return (
    <section className="w-full container">
      <div className="bg-text py-20 px-10 rounded-2xl w-full space-y-5">
        <h4>{date}</h4>
        <h1 className="text-white">{title}</h1>
      </div>
    </section>
  );
};

export { ArticleHeader };
