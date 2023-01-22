print("Start creating database ##############");

db = db.getSiblingDB("send_email");
db.createUser({
  user: "sendEmail",
  pwd: "sendEmail",
  roles: [{ role: "readWrite", db: "user_db" }],
});
