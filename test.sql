CREATE TABLE IF NOT EXISTS tasks (
	id int(10) unsigned NOT NULL AUTO_INCREMENT,
	name varchar(30) DEFAULT '',
	description TEXT,
	due_on int unsigned,
	completed_on int unsigned,
	PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
