const Hospital = require("../models/Hospital");

exports.getHospitals = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();
    if (!hospitals || hospitals.length === 0) {
      res.status(404).json({ success: false, message: "not found" });
    }
    res
      .status(200)
      .json({ success: true, count: hospitals.length, data: hospitals });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

exports.getHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data: hospital });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

exports.createHospital = async (req, res, next) => {
  const hospital = await Hospital.create(req.body);
  res.status(200).json({ success: true, data: hospital });
};

exports.updateHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!hospital) {
      return res.status(400).json({ success: false, data: hospital });
    }
    res.status(200).json({ success: true, data: hospital });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

exports.deleteHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!hospital) {
      return res.status(400).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};
