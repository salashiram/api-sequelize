const router = require("express").Router();

const User = require("../model/user.model");

router.get("/user", async (req, res) => {
  const user = await User.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: user,
  });
});

router.get("/user/:idUser", async (req, res) => {
  const id = req.params.idUser;
  const user = await User.findOne({
    where: {
      idUser: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: user,
  });
});

router.post("/user", async (req, res) => {
  const { userName, email, pass, fullName, gender, userImage } = req.body;

  if (!userName || !email || !pass || !fullName || !gender) {
    return res.status(400).json({
      ok: false,
      message: "All fields are required",
    });
  }

  try {
    const existingUserName = await User.findOne({ where: { userName } });
    const existingEmail = await User.findOne({ where: { email } });
    if (existingUserName) {
      return res.status(400).json({
        ok: false,
        message: "Username already exists",
      });
    } else if (existingEmail) {
      return res.status(400).json({
        ok: false,
        message: "Email already exists",
      });
    }

    const newUser = await User.create({
      userName,
      pass,
      fullName,
      email,
      gender,
      userImage,
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: "Created user",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      status: 500,
      message: "Error creating user",
      error: error.message,
    });
  }
});

router.put("/user/:idUser", async (req, res) => {
  const id = req.params.idUser;
  const dataUser = req.body;
  const updateUser = await User.update(
    {
      userName: dataUser.userName,
      pass: dataUser.pass,
      fullName: dataUser.fullName,
      email: dataUser.email,
      gender: dataUser.gender,
      userImage: dataUser.userImage,
    },
    {
      where: {
        idUser: id,
      },
    }
  );
  res.status(200).json({
    ok: true,
    status: 200,
    body: updateUser,
  });
});

router.delete("/user/:idUser", async (req, res) => {
  const id = req.params.idUser;
  const deleteUser = await User.destroy({
    where: {
      idUser: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 204,
    body: deleteUser,
  });
});

module.exports = router;
