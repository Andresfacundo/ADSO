CREATE DATABASE db_hotel;
USE db_hotel;
drop table habitaciones;
CREATE TABLE habitaciones(
	num_habitacion VARCHAR(100) PRIMARY KEY NOT NULL,
    tipo_individual BOOLEAN NOT NULL,
    tipo_doble BOOLEAN NOT NULL
);
INSERT INTO habitaciones(num_habitacion, tipo_individual, tipo_doble)VALUES(124,false,false),(224,1,0),(324,0,1),(424,1,0),(524,0,1),(624,0,1),(724,1,0),(824,0,1),(924,1,0),(1024,1,0);

CREATE TABLE reservas(
	id_reservas VARCHAR(100) PRIMARY KEY NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL
);
INSERT INTO reservas(id_reservas, fecha_inicio, fecha_fin)VALUES(1,'2023-08-19','2023-08-19'),(2,'2023-08-19','2023-08-19'),(3,'2023-08-19','2023-08-19'),(4,'2023-08-19','2023-08-19'),(5,'2023-08-19','2023-08-19'),
(6,'2023-08-19','2023-08-19'),(7,'2023-08-19','2023-08-19'),(8,'2023-08-19','2023-08-19'),(9,'2023-08-19','2023-08-19'),(10,'2023-08-19','2023-08-19');

CREATE TABLE huespedes(
	id_huespedes VARCHAR(100) PRIMARY KEY NOT NULL,
    nombre_nombre VARCHAR(100)NOT NULL,
    nombre_apellido VARCHAR(100)NOT NULL,
    telefono VARCHAR(100)NOT NULL,
    email TEXT NOT NULL,
    num_habitaciones VARCHAR(100)NOT NULL,
	FOREIGN KEY (num_habitaciones)REFERENCES habitaciones(num_habitacion)
);
INSERT INTO huespedes(id_huespedes, nombre_nombre, nombre_apellido, telefono, email, num_habitaciones)VALUES(123,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',124),(223,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',224),
(323,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',324),(423,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',424),(523,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',524),
(623,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',624),(723,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',724),(823,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',824),
(923,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',924),(1023,'andres','facundo',3185535003,'andresfelipefacundo@gmail.com',1024);

CREATE TABLE servicio(
	id_servicio VARCHAR(100) PRIMARY KEY NOT NULL,
    servicio_comida VARCHAR(100)NOT NULL,
    limpieza BOOLEAN NOT NULL,
    id_reservas VARCHAR(100)NOT NULL,
    FOREIGN KEY(id_reservas)REFERENCES reservas(id_reservas)
);

CREATE TABLE id_huespedes_reservas(
	id_huespedes VARCHAR(100)NOT NULL,
    id_reservas VARCHAR(100)NOT NULL,
    PRIMARY KEY(id_huespedes, id_reservas),
    FOREIGN KEY(id_huespedes)REFERENCES huespedes(id_huespedes),
    FOREIGN KEY(id_reservas)REFERENCES reservas(id_reservas)
);

SELECT * FROM habitaciones;
SELECT * FROM reservas ;
SELECT * FROM huespedes;
SELECT * FROM servicio;
SELECT * FROM id_huespedes_reservas;
