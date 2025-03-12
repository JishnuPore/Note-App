import express from "express";
import Note from "../models/Note.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();

router.post("/add", middleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({ title, description, userId: req.user.id });

    await newNote.save();

    return res
      .status(201)
      .json({ success: true, message: "Note Created Successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong. Failed to Create Note",
    });
  }
});

router.get("/", middleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    return res.status(200).json({ success: true, notes });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Retreve Note" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateNote = await Note.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ success: true, updateNote });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Update Note" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateNote = await Note.findByIdAndDelete(id);
    return res.status(200).json({ success: true, updateNote });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Delete Note" });
  }
});

export default router;
