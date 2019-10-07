const matsCtrl = {};

const Mat = require('../models/Mat');

matsCtrl.getMats = async (req, res) => {
    const mats = await Mat.find();
    res.json(mats);
}

matsCtrl.createMats = async (req, res) => {
    const { matname } = req.body;
    const newMat = new Mat({matname});
    await newMat.save();
    res.json('Mat created');
}

matsCtrl.deleteMats = async (req, res) => {
    await Mat.findByIdAndDelete(req.params.id);
    res.json('Mat Deleted');
}

module.exports = matsCtrl;