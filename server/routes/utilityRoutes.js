const {  Router } = require('express');
const router = Router();

router.post('/logout', async (req, res) => {
 res.clearCookie("cookie", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logout Successfully" });

})

module.exports = router;