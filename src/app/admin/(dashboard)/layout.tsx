import { getServerSession } from "next-auth";

export default async function AdminLayout({ children }: any) {
  const session = await getServerSession();

  if (!session) {
    return (
      <div className="p-10 text-center text-red-600">
        Access Denied. Please login as admin.
      </div>
    );
  }

  return <>{children}</>;
}
