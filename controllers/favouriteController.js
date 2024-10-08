const mongoose = require("mongoose");
const Favourite = require("../schemas/Favourite");

// Add a favourite (with duplicate check)
exports.addFavourite = async (req, res) => {
  try {
    const { cust_id, prof_id, jobId } = req.body;

    // Check if this combination of cust_id, prof_id, and jobId already exists
    const existingFavourite = await Favourite.findOne({ cust_id, prof_id, jobId });

    if (existingFavourite) {
      return res.status(400).json({ message: "This job is already in your favorites." });
    }

    // If no duplicate is found, create a new favorite
    const newFavourite = new Favourite({ cust_id, prof_id, jobId });
    const savedFavourite = await newFavourite.save();
    res.status(201).json(savedFavourite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get favourite by ID
exports.getFavouriteById = async (req, res) => {
  try {
    const favourite = await Favourite.findById(req.params.id)
      .populate("cust_id", "name email")
      .populate("prof_id", "name email")
      .populate("jobId", "description date startTime endTime");
    if (!favourite) {
      return res.status(404).json({ message: "Favourite not found" });
    }
    res.json(favourite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all favourites
exports.getAllFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.find()
      .populate("cust_id", "name email")
      .populate("prof_id", "name email")
      .populate("jobId", "description date startTime endTime");
    res.json(favourites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get favourites by customer ID
exports.getFavouritesByCustomer = async (req, res) => {
  try {
    const favourites = await Favourite.find({
      cust_id: req.params.custId,
    })
      .populate("prof_id", "firstName lastName profileImage city country chargesPerHour averageRating")
      .populate("jobId", "description date startTime endTime city country chargesPerHour")
      .populate({
        path: 'jobId',
        populate: { path: 'service_id', select: 'name' }
      });
    res.json(favourites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a favourite by ID
exports.removeFavourite = async (req, res) => {
  try {
    const favourite = await Favourite.findByIdAndDelete(req.params.id);
    if (!favourite) {
      return res.status(404).json({ message: "Favourite not found" });
    }
    res.status(200).json({ message: "Favourite removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
