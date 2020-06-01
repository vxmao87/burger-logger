USE burgers_db;

-- INSERT INTO burgers_db (burger_name, devoured)
-- VALUES ("", );

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger", false);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Ohayo gozaimasu", false);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Habit", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Pepperjack burger", true);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Classic burger", true);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Katsu burger", true);

SELECT * from burgers;