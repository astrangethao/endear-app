const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)

  res.send(req.user);
});

router.get("/info", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  const userId = req.user.id;

  const queryText = `SELECT "user_account".first_name, "user_account".last_name, "gender".name as "gender", "location".city as "city", "location".zipcode as "zip_code", "user_photo".link as "user_photo", "audio_clip".audio as "audio_link",
  "interested_in_gender".gender_id as "gender_preference"
  FROM "user_account" 
    JOIN "location" ON "location".user_account_id = "user_account".id
    JOIN "gender" ON "gender".id = "user_account".gender_id
    JOIN "user_photo" ON "user_photo".user_account_id = "user_account".id
    JOIN "interested_in_gender" ON "interested_in_gender".user_account_id = "user_account".id
    JOIN "audio_clip" ON "audio_clip".user_account_id = "user_account".id
    WHERE "user_account".id = $1;
  `;
  pool
    .query(queryText, [userId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch(() => res.sendStatus(500));
});

router.get("/options", rejectUnauthenticated, (req, res) => {
  // const genderId = req.userDetails.gender_preference;
  queryText = `SELECT "user_account".id as "user_id", "user_account".first_name, "user_account".last_name, "user_account".details, "user_account".gender_id, "user_account".dob, "user_account".phone_number, "user_photo".link, "audio_clip".audio,"location".city, "location".zipcode FROM "user_account"
  JOIN "user_photo" ON "user_photo".user_account_id = "user_account".id
  JOIN "location" ON "location".user_account_id = "user_account".id
  JOIN "audio_clip" ON "audio_clip".user_account_id = "user_account".id
  ORDER BY "user_account".gender_id;`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch(() => res.sendStatus(500));
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText =
    'INSERT INTO "user_account" (username, password) VALUES ($1, $2) RETURNING id';
  pool
    .query(queryText, [username, password])
    .then((response) => {
      res.send(response.rows[0]);
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/location/:id", (req, res, next) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText =
    'INSERT INTO "location" (city, zipcode, user_account_id) VALUES ($1, $2, $3) RETURNING id';

  pool
    .query(queryText, [newUser.city, newUser.zipcode, userId])
    .then((response) => {
      res.send(response.rows[0]);
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/interest/:id", (req, res, next) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText =
    'INSERT INTO "interested_in_gender" (user_account_id, gender_id) VALUES ($1, $2) RETURNING id';
  pool
    .query(queryText, [userId, newUser.gender_id])
    .then((response) => {
      res.send(response.rows[0]);
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/photos/:id", (req, res, next) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText =
    'INSERT INTO "user_photo" (user_account_id, link) VALUES ($1, $2) RETURNING id';
  pool
    .query(queryText, [userId, newUser.link])
    .then((response) => {
      res.send(response.rows[0]);
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/audio-link/:id", (req, res, next) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText =
    'INSERT INTO "audio_clip" (audio, user_account_id) VALUES ($1, $2) RETURNING id';
  pool
    .query(queryText, [newUser.audio, userId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/matches", (req, res, next) => {
  const match = req.body;

  const queryText =
    'INSERT INTO "matches" (user_1_id, match_user_1, user_2_id, match_user_2) VALUES ($1, $2, $3, $4) RETURNING id';
  pool
    .query(queryText, [
      match.user_1_id,
      match.match_user_1,
      match.user_2_id,
      match.match_user_2,
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put("/names/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText = `UPDATE "user_account" SET "first_name"= $1, "last_name"=$2 WHERE "id" = $3;`;

  pool
    .query(queryText, [newUser.first_name, newUser.last_name, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.put("/gender/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText = `UPDATE "user_account" SET "gender_id"= $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [newUser.gender_id, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.put("/dob/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText = `UPDATE "user_account" SET "dob"= $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [newUser.dob, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.put("/phone/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText = `UPDATE "user_account" SET "phone_number"= $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [newUser.phone_number, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.put("/details/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText = `UPDATE "user_account" SET "details"= $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [newUser.details, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;

  const queryText = `UPDATE "user_account" SET "details"= $1, "phone_number"=$2 WHERE "id" = $3;`;

  pool
    .query(queryText, [newUser.details, newUser.phone_number, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});
module.exports = router;
