// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { signOut } from "next-auth/react";

// type ResourceItem = {
//   _id: string;
//   title: string;
//   type: string;
//   industry: string;
// };

// export default function AdminDashboard() {
//   const router = useRouter();

//   const [resources, setResources] = useState<ResourceItem[]>([]);
//   const [filterType, setFilterType] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const fetchResources = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("/api/resources", { cache: "no-store" });
//       const data = await res.json();
//       setResources(data);
//     } catch (err) {
//       console.error("Error fetching resources:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchResources();
//   }, []);

//   const filtered = resources.filter((item) =>
//     filterType === "All" ? true : item.type === filterType
//   );

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this resource?")) return;

//     const res = await fetch(`/api/admin/resources/${id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       alert("Resource deleted!");
//       fetchResources();
//     } else {
//       alert("Delete failed!");
//     }
//   };

//   const handleLogout = () => {
//     signOut({ callbackUrl: "/admin/login" });
//   };

//   return (
//     <div className="p-10">
//       {/* Top header with title + logout */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-blue-700">
//           Admin Dashboard
//         </h1>

//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Top Bar (Filter + Create) */}
//       <div className="flex justify-between items-center mb-6">
//         {/* Filter */}
//         <select
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="All">All</option>
//           <option value="Blog">Blog</option>
//           <option value="Case Studies">Case Studies</option>
//           <option value="Whitepaper">Whitepaper</option>
//           <option value="Brochure">Brochure</option>
//         </select>

//         {/* Create Button */}
//         <button
//           onClick={() => router.push("/admin/resources/new")}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           + Create New
//         </button>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border">
//             <thead className="bg-blue-100">
//               <tr>
//                 <th className="border p-3">Title</th>
//                 <th className="border p-3">Type</th>
//                 <th className="border p-3">Industry</th>
//                 <th className="border p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((item) => (
//                 <tr key={item._id}>
//                   <td className="border p-3">{item.title}</td>
//                   <td className="border p-3">{item.type}</td>
//                   <td className="border p-3">{item.industry}</td>

//                   <td className="border p-3 space-x-2">
//                     <button
//                       onClick={() =>
//                         router.push(`/admin/resources/${item._id}/edit`)
//                       }
//                       className="px-3 py-1 bg-green-600 text-white rounded"
//                     >
//                       Edit
//                     </button>

//                       <button
//                       onClick={() => handleDelete(item._id)}
//                       className="px-3 py-1 bg-red-600 text-white rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {filtered.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan={4}
//                     className="border p-4 text-center text-gray-500"
//                   >
//                     No results found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import ConfirmModal from "../../Components/ConfirmModal";

type ResourceItem = {
  _id: string;
  title: string;
  type: string;
  industry: string;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [filterType, setFilterType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/resources", { cache: "no-store" });
      const data = await res.json();
      setResources(data);
    } catch (err) {
      toast.error("Failed to fetch resources!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const filtered = resources.filter((item) =>
    filterType === "All" ? true : item.type === filterType
  );

  const handleDelete = async () => {
    if (!deleteId) return;

    const res = await fetch(`/api/admin/resources/${deleteId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      toast.success("Resource deleted successfully!");
      fetchResources();
    } else {
      toast.error("Delete failed!");
    }

    setDeleteId(null);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Toast Container */}
      <Toaster position="top-right" toastOptions={{ className: "animate-slideIn" }} />

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Filter + Create */}
      <div className="flex justify-between items-center mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border rounded-lg shadow-sm bg-white"
        >
          <option value="All">All</option>
          <option value="Blog">Blog</option>
          <option value="Case Studies">Case Studies</option>
          <option value="Whitepaper">Whitepaper</option>
          <option value="Brochure">Brochure</option>
        </select>

        <button
          onClick={() => router.push("/admin/resources/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create New
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3 font-semibold">Title</th>
                <th className="border p-3 font-semibold">Type</th>
                <th className="border p-3 font-semibold">Industry</th>
                <th className="border p-3 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 transition border-b"
                >
                  <td className="border p-3">{item.title}</td>
                  <td className="border p-3">{item.type}</td>
                  <td className="border p-3">{item.industry}</td>

                  <td className="border p-3 space-x-2">
                    <button
                      onClick={() =>
                        router.push(`/admin/resources/${item._id}/edit`)
                      }
                      className="px-3 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => setDeleteId(item._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="p-4 text-center text-gray-500 italic"
                  >
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirm Delete Modal */}
      <ConfirmModal
        open={!!deleteId}
        onCancel={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
