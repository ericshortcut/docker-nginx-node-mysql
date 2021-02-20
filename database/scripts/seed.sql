use my_app;

create TABLE IF NOT EXISTS people(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

INSERT IGNORE INTO people (id,name) VALUES (1,"John doe") ;
INSERT IGNORE INTO people (id,name) VALUES (2,"Mary doe") ;