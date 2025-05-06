const axios = require('axios');
const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { data } = await axios.get('https://catfact.ninja/fact');
    const note = new Note({ title, content, catfact: data.fact });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Error creating note' });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching notes' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting note' });
  }
};

exports.searchNotes = async (req, res) => {
  try {
    const query = req.query.q;
    const notes = await Note.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { content: new RegExp(query, 'i') },
        { catfact: new RegExp(query, 'i') },
      ],
    });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Error searching notes' });
  }
};
