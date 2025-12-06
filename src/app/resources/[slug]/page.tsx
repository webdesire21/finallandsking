// SERVER COMPONENT (NO "use client")

import ResourceDetailsClient from "../[slug]/ResourceDetailsClient";

export default async function ResourceDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  // Fetch Single Resource Data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/resources/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Resource Not Found
      </div>
    );
  }

  const item = await res.json();

  // Fetch Fresh Blogs for Sidebar
  const blogsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/resources?type=Blog`,
    { cache: "no-store" }
  );

  const blogs = await blogsRes.json();
  const recentBlogs = blogs.filter((b: any) => b._id !== item._id).slice(0, 3);

  return <ResourceDetailsClient item={item} recentBlogs={recentBlogs} />;
}
