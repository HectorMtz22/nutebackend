const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find({user: req.userId}).sort({date: 'desc'});
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title ,content, mat, date } = req.body;
    const newNote = new Note({
        title,
        content,
        mat,
        date,
        user: ''
    });
    newNote.user = req.userId;
    await newNote.save();
    //console.log(newNote);
    res.json({message: 'Note Saved'});
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}

notesCtrl.updateNote = async (req, res) => {
    const { title, mat, content, date, _id } = req.body;
    await Note.findOneAndUpdate(_id, {
        title,
        content,
        mat,
        date
    });
    res.json({message: 'Note Updated', id: _id})
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Eliminated'})
}

notesCtrl.deleteNotess = async (req, res) => {
    const losparams = req.params.mat;
    await Note.deleteMany({mat: losparams});
    
    res.json({message: 'Note Eliminated'})
}

module.exports = notesCtrl;