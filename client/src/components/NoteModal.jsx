import React, { useEffect, useState } from "react";

const NoteModal = ({ closeModal, addNote, currentNote, editNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      editNote(currentNote._id, title, description);
    } else {
      addNote(title, description);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative mx-auto p-5 border w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="mt-3 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {currentNote ? "Edit Note" : "Add New Note"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="text-left">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Note Description"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex space-x-4 mt-5 justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 
                  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium 
                  text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                {currentNote ? "Update Note" : "Add Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
