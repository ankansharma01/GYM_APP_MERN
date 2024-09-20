const express = require("express");
const router = express.Router();
const sendEmail = require('./utils/sendEmail')

router.post("/send/mail", async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Please provide all required details" });
  }
  try {
    await sendEmail({
      email: "ankansharma930@gmail.com",
      subject: "Gym Contact",
      message,
      userEmail: email,
      userName: name,
      userPhone: phone
    })

    return res.status(200).json({success: true, message: "Message sent successfully"})
  } catch (error) {
     console.log(error);
     
    res.status(500).json({message: "Internal server error"})
  }
});

module.exports = router;