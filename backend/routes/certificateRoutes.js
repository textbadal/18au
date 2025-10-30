const express = require("express");
const Certificate = require("../models/Certificate");
const router = express.Router();

// ✅ Verify multiple certificates
router.post("/verify", async (req, res) => {
  try {
    const { certificateIDs } = req.body;

    // Validate input
    if (!certificateIDs || !Array.isArray(certificateIDs)) {
      return res.status(400).json({ message: "certificateIDs must be an array" });
    }

    // Trim IDs to avoid extra spaces
    const trimmedIDs = certificateIDs.map((id) => id.trim());

    // Find matching certificates
    const certificates = await Certificate.find({
      certificateID: { $in: trimmedIDs },
    });

    if (!certificates || certificates.length === 0) {
      return res.status(404).json({ message: "No certificates found for the provided IDs" });
    }

    // ✅ Send back full certificate data
    return res.status(200).json(certificates);
  } catch (err) {
    console.error("Error verifying certificates:", err);
    return res.status(500).json({ message: "Server error while verifying certificates" });
  }
});

// ✅ Add multiple certificates at once
router.post("/addMany", async (req, res) => {
  try {
    const { certificates } = req.body;

    // Validate input
    if (!Array.isArray(certificates) || certificates.length === 0) {
      return res.status(400).json({ message: "certificates must be a non-empty array" });
    }

    // Check each certificate for required fields
    for (let certificate of certificates) {
      const { certificateID, studentName, courseName } = certificate;
      if (!certificateID || !studentName || !courseName) {
        return res.status(400).json({
          message: "Each certificate must include certificateID, studentName, and courseName",
        });
      }

      // Avoid duplicates
      const exists = await Certificate.findOne({ certificateID });
      if (exists) {
        return res.status(400).json({ message: `Certificate ID ${certificateID} already exists` });
      }
    }

    // Insert many certificates
    const inserted = await Certificate.insertMany(certificates);

    return res.status(201).json({
      message: "Certificates added successfully",
      certificates: inserted,
    });
  } catch (err) {
    console.error("Error adding certificates:", err);
    return res.status(500).json({ message: "Error adding certificates", error: err.message });
  }
});

module.exports = router;
