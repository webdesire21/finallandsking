"use client";

export default function ConfirmModal({
  open,
  onConfirm,
  onCancel,
  message = "Are you sure you want to delete this resource?",
}: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[3000]">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 animate-slideIn">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Confirm Delete
        </h2>

        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
