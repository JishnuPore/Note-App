import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const NoteCard = ({ note, onEdit, deleteNote }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-150 ease-in-out">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h2>
      <p className="text-gray-600 mb-4 text-sm">{note.description}</p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => onEdit(note)}
          className="text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteNote(note._id)}
          className="text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md p-2"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
