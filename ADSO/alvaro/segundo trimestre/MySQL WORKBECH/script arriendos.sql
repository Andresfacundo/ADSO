create database db_arriendos;
use db_arriendos;

create table departamento(
	id_departamento smallint primary key not null,
    nom_departamento varchar(100)not null
);
insert into departamento(id_departamento, nom_departamento) values (1, 'quindio'),(2,'risaralda'),(3,'antioquia'),(4,'huila'),(5,'valle'),(6,'caldas'),(7,'tolima'),(8,'choco'),(9,'cundinamarca'),(10,'boyaca');

create table propietario(
	identificacion smallint primary key not null,
    primero_nombre varchar(100) not null,
    segundo_nombre varchar(100)not null,
    primer_apellido varchar(100)not null,
    segundo_apellido varchar(100)not null,
    telefono_fijo smallint not null,
    celular smallint not null,
    email text not null
);
insert into propietario(identificacion, primero_nombre, segundo_nombre, primer_apellido, segundo_apellido, telefono_fijo, celular, email) values(1,'andres','felipe','facundo','sanchez',7056230,3185535003,'andresfelipefacundo@gmail.com'),
(2,'sdfdsf','sdfsdfsd','erwteto','dfgdfg',8975969,6666666666,'sgwergtdfgdfg@gmail.com'),(3,'ytutyu','tyuef','dfgdgf','yuiiu',4556565,222222222,'qwertertuyghjgfyrtuj@gmail.com'),
(4,'mgjjnh','tyrynf','qweer','rtyryry',77878778,6665555555,'nhgfkjtyiyttyj@gmail.com'),(5,'retyrhn','qaweqwqwer','sdfwertegb','qw3r4wert',8454135,1324454875,'qwerqwregb@gmail.com'),
(6,'qwewertfnhg','yuiyiu','yuiyui','yuiyuiyui',15499151,864694566,'werwertwerehgehg@gmail.com'),(7,'wtertes','werwere','werdo','werwerwerez',96595460,6565534565,'wertwerteryr@gmail.com'),
(8,'wetertes','wertererte','werwerwercundo','werwerhez',84454430,894535003,'werwerwer@gmail.com'),(9,'werwer','sdfsdffpe','bfnbvnb','edryteryhez',947646940,656535003,'uyiyuilipefacundo@gmail.com'),
(10,'erterts','bvbvb','eryteyy','ereyry',8787230,4562535003,'nbvnbvnbvnvnbvbnvbnvbnnv@gmail.com');
ALTER TABLE propietario MODIFY telefono_fijo BIGINT NOT NULL;
alter table propietario modify celular bigint not null;

create table inquilino(
	identificacion_inquilino smallint primary key not null,
    primer_nombre varchar(100)not null,
    segundo_nombre varchar(100)not null,
    primer_apellido  varchar(100)not null,
    segundo_apellido varchar(100)not null,
    email text not null,
    celular smallint not null
);
insert into inquilino(identificacion_inquilino, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, celular) values(1,'qwerttwert','qweertqwee', 'qweqhdgfhweqwe', 'qweqvbnwer3','qweqwvbneqwe3@gmail.com',3156864226),
(2,'qwerqwewert','qweqqwrwee', 'qweqwyuoeqwe', 'qweqñlkñwer3','qweqweqnbnbhvwe3@gmail.com',3156864556),(3,'qwerwjkmert','qweqnmdfyrtwee', 'qweqw64eqwe', 'qweq68758wer3','qweqwwerwyt453eqwe3@gmail.com',3189864556),
(4,'qwetiykrwert','qweqwefdgqw34e', 'qweqww345rwefsveqwe', 'qweqwae5w2trwer3','qweqweqwe4652143@gmail.com',3411864556),(5,'qwer76970wert','qwe7860qwee', 'qweq456weqwe', 'qweqwe346r3','qweqwe3456qwe3@gmail.com',6756864556),
(6,'qwe,htrwert','qwvcbadseqwee', 'qweesadfsdfqweqwe', 'qwenbvnqwer3','qweqweñwqwe3@gmail.com',3152164556),(7,'qwqw3ytuerwert','qweqq24hyrtwee', 'qweqqe243rhurtweqwe', 'qwegfmherqwer3','qweqweyr5rq3eqwe3@gmail.com',3127864556),
(8,'qwerwee3467i65trt','qweiuyktiytqwee', 'qweertterqweqwe', 'qweqwernbvccbv3','qweqwwerweeqwe3@gmail.com',317764556),(9,'qwerwdfdfert','qweqweeddf', 'qweqqw3qqweqwe', 'qwwruieqwer3','qfgrtweqweqwe3@gmail.com',3666864556),
(10,'qw213rweerwert','qwuoeqwee', 'qweqmnvweqwe', 'qweqwqrterutwer3','qweqwfngbrefqw3eqwe3@gmail.com',7776864556);
alter table inquilino modify celular bigint not null;

create table ciudad(
	id_ciudad smallint primary key not null,
    nombre_ciudad varchar(100)not null,
    cod_departamento smallint not null,
    foreign key (cod_departamento)references departamento(id_departamento)
);
insert into ciudad(id_ciudad, nombre_ciudad, cod_departamento) values(1,'armenia',1),(2,'pereira',2),(3,'salento',3),(4,'calarca',4),(5,'circasia',5),(6,'alcala',6),(7,'quimbaya',7),(8,'filandia',8),(9,'ulloa',9),(10,'barcelona',10);


create table arriendo(
	id_arriendo smallint primary key not null,
    f_incio date not null,
    f_fin date not null,
    valor_mensual double not null,
    cod_vivienda smallint not null,
    foreign key(cod_vivienda)references vivienda(id_vivienda)
);
insert into arriendo(id_arriendo, f_incio, f_fin, valor_mensual, cod_vivienda)values(21,'2023-12-08','2023-12-09',300000,48),(22,'2023-12-07','2023-12-06',4000000,47),(23,'2023-12-05','2023-12-12',500000,46),(24,'2023-06-11','2023-09-10',600000,45),
(25,'2023-11-09','2023-08-08',700000,44),(26,'2023-06-07','2023-04-12',800000,43),(27,'2023-11-12','2023-09-12',900000,42),(28,'2023-10-10','2023-02-02',100000,41),(29,'2023-01-01','2023-11-11',200000,40),(30,'2023-07-07','2023-01-12',350000,39);

create table vivienda(
	id_vivienda smallint primary key not null,
    direccion varchar(200) not null,
    cant_habitantes smallint not null,
    descripcion text not null,
    indentificacion_propietario smallint not null,
    foreign key(indentificacion_propietario)references propietario(identificacion),
    cod_ciudad smallint not null,
    foreign key(cod_ciudad)references ciudad(id_ciudad)
);
insert into vivienda(id_vivienda, direccion, cant_habitantes, descripcion, indentificacion_propietario, cod_ciudad)values(48,'cra20#17N20',100,'santihumtyweutgw8efifgh',1,1),(47,'cra21#17N20',101,'santihumtywghjeutgw8efifgh',2,2),
(46,'cra22#17N20',102,'santihumthjkhjkyweutgw8efifgh',3,3),(45,'cra23#17N20',103,'santihumgjgjghjtyweutgw8efifgh',4,4),(44,'cra24#17N20',104,'santihuhjkhkmtyweutgw8efifgh',5,5),(43,'cra25#17N20',105,'santihumtyweuyioyuioyuiotgw8efifgh',6,6),
(42,'cra26#17N20',106,'santihiouiuiumtyweutgw8efifgh',7,7),(41,'cra27#17N20',107,'santihuioyirtyumtyweutgw8efifgh',8,8),(40,'cra28#17N20',108,'santihumtyweutiyuiyuitgw8efifgh',9,9),(39,'cra29#17N20',109,'santihumt+p´+p´+yweutgw8efifgh',10,10);

 create table arriendo_inquilinos(
	cod_arriendo smallint not null,
    cod_inquilino smallint,
    primary key (cod_arriendo, cod_inquilino),
    foreign key(cod_arriendo)references arriendo(id_arriendo),
    foreign key(cod_inquilino)references inquilino(identificacion_inquilino)
);
INSERT INTO	arriendo_inquilinos(cod_arriendo, cod_inquilino)values(21,1),(22,2),(23,3),(24,4),(25,5),(26,6),(27,7),(28,8),(29,9),(30,10);

#visualizar composicion de la tabla 
describe departamento;

#insertar registros en las tablas creadas
#insert into departamento(id_departamento, nom_departamento) values (1, 'quindio')

#mostrar registros en la tabla
select * from departamento;
select * from propietario;
select * from inquilino;
select * from ciudad;
select * from arriendo;
select * from vivienda;
select * from arriendo_inquilinos;

#para borrar los registros de una tabla
delete from arriendo;

#borrar database
drop database db_arriendos;

#mostrar tablas
show tables;






