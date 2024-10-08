// routes/bookingRoutes.js

const express = require("express");
const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
  getCustomerBookings,
  getCustomerBookingscards,
  getProfessionalBookings,
  getProfessionalEarnings,
} = require("../controllers/bookingController.js");

const router = express.Router();

// Create a new booking
router.post("/", createBooking);

// Get all bookings
router.get("/", getAllBookings);

// Get a specific booking by ID
router.get("/:id", getBookingById);

// Update a booking
router.put("/:id", updateBooking);

// Delete a booking
router.delete("/:id", deleteBooking);

// Get bookings for a specific customer
router.get("/customer/:customerId", getCustomerBookings);

// Get bookings cards for a specific customer
router.get("/customerbooking/:customerId", getCustomerBookingscards);

// Get bookings for a specific professional
router.get("/professional/:profId", getProfessionalBookings);

router.get("/professional/:profId/earnings", getProfessionalEarnings);

module.exports = router;
