import { Header, NewsContainer, UserLayout } from '@/components';

export default function Blog() {
  return (
    <UserLayout>
      <div className="w-full space-y-12 py-20">
        <Header />
        <NewsContainer />
      </div>
    </UserLayout>
  );
}
