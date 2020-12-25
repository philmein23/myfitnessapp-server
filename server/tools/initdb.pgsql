DROP TABLE IF EXISTS exercises;

CREATE TABLE IF NOT EXISTS exercises (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(255) NOT NULL,
    description varchar(255),
    targeted_muscles text[]
);