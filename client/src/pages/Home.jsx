import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import { toast } from "react-toastify";
import { useAuth } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState(false);
  const [query, setQuery] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  const handleClick = () => {
    if (user) {
      setModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setNotes(data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentNote(null);
  };

  const onEdit = (note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/note/${id}`,
        {
          title,
          description,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.success) {
        fetchNotes();
        closeModal();
        toast.success("Note Updated Successfully");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.success) {
        fetchNotes();
        toast.success("Note Deleted Successfully");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        {
          title,
          description,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.success) {
        fetchNotes();
        closeModal();
        toast.success("Note Added Successfully");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Navbar setQuery={setQuery} />
      <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={onEdit}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <p>No Notes Found</p>
        )}
      </div>
      <button
        onClick={handleClick}
        className="fixed right-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white font-medium w-14 h-14 rounded-full shadow-md flex items-center justify-center transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Add new item"
      >
        <span className="text-2xl">+</span>
      </button>
      {isModalOpen && (
        <NoteModal
          closeModal={closeModal}
          addNote={addNote}
          currentNote={currentNote}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default Home;
