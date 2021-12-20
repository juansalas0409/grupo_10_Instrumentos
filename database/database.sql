-- Creación de tablas

CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(255) NOT NULL,
   last_name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   username VARCHAR(255) NOT NULL,
   birth_date DATE NOT NULL,
   category_id int NOT NULL,
   avatar VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE user_categories (
   id INT NOT NULL AUTO_INCREMENT,
   category_name VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE products (
   id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(255) NOT NULL,
   price DECIMAL NOT NULL,
   product_category INT NOT NULL,
   description VARCHAR(500) NOT NULL,
   image VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE product_categories (
   id INT NOT NULL AUTO_INCREMENT,
   category_name VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE sales (
   sales_id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   total_price DECIMAL NOT NULL,
   total_qty VARCHAR(255) NOT NULL,
   PRIMARY KEY (sales_id)
);

CREATE TABLE cart_detail (
   id INT NOT NULL AUTO_INCREMENT,
   sales_id INT NOT NULL,
   product_id INT NOT NULL,
   PRIMARY KEY (id)
);


ALTER TABLE users ADD CONSTRAINT FK_bfca6615-3814-4eb3-883e-cbe75c5141af FOREIGN KEY (category_id) REFERENCES user_categories(id)  ;

ALTER TABLE products ADD CONSTRAINT FK_b1628f8f-2ae3-47ab-a197-af9a34df69bf FOREIGN KEY (product_category) REFERENCES product_categories(id)  ;

ALTER TABLE sales ADD CONSTRAINT FK_8eb5ed27-a658-478e-b7c0-9f0857dd800f FOREIGN KEY (user_id) REFERENCES users(id)  ;

ALTER TABLE cart_detail ADD CONSTRAINT FK_b6dabc30-eb7e-40e4-8a83-21bcb52235c8 FOREIGN KEY (sales_id) REFERENCES sales(sales_id)  ;

ALTER TABLE cart_detail ADD CONSTRAINT FK_8ea17788-306e-48c3-b073-9a175f86470c FOREIGN KEY (product_id) REFERENCES products(id)  ;

-- Tabla de Usuarios

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (1, 'Andrew', 'Jantel', 'ajantel0@webnode.com', '9flesdwAgL', 'ajantel0', DATE '1999/4/20', 1, 'https://robohash.org/anemodicta.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (2, 'Charity', 'Marrett', 'cmarrett1@oakley.com', 'rzn8hi1qxL', 'cmarrett1', DATE '1997/3/20', 2, 'https://robohash.org/reiciendisveldolor.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (3, 'Yulma', 'Pakes', 'ypakes2@uol.com.br', 'WnDFOOXl', 'ypakes2', DATE '1991/9/22', 2, 'https://robohash.org/velitautaspernatur.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (4, 'Roxanne', 'Russell', 'rrussell3@reddit.com', '37GCglt9Fra', 'rrussell3', DATE '1993/11/19', 2, 'https://robohash.org/verooccaecativitae.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (5, 'Ben', 'Gino', 'bgino4@devhub.com', 'UbO5B6sN3B', 'bgino4', DATE '1998/5/28', 2, 'https://robohash.org/estipsumneque.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (6, 'Brucie', 'Dallaway', 'bdallaway5@dailymail.co.uk', 'HOlqCtQGkL', 'bdallaway5', DATE '1995/8/12', 2, 'https://robohash.org/similiqueeumea.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (7, 'Bevan', 'Marchand', 'bmarchand6@live.com', 'yr9iGVg5DLT', 'bmarchand6', DATE '2000/7/15', 2, 'https://robohash.org/eumautet.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (8, 'Walker', 'Lanceter', 'wlanceter7@bigcartel.com', 'VaBrwxaVmP', 'wlanceter7', DATE'1991/4/22', 2, 'https://robohash.org/quialaborumquod.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (9, 'Andria', 'Jaszczak', 'ajaszczak8@sphinn.com', 'X0HGi8iXdBR4', 'ajaszczak8', DATE '1991/9/9', 2, 'https://robohash.org/porroharumquisquam.png?size=50x50&set=set1');

INSERT INTO users (id, first_name, last_name, email, password, username, brith_date, category_id, avatar) VALUES (10, 'Ulrikaumeko', 'Shooter', 'ushooter9@hc360.com', 'Yy0wkg2Zj04', 'ushooter9', DATE '1990/1/20', 2, 'https://robohash.org/doloresinventoresaepe.png?size=50x50&set=set1');

-- Tabla de User-categories

INSERT INTO user_categories (id, category_name) VALUES (1, 'admin');

INSERT INTO user_categories (id, category_name) VALUES (2, 'usuario');


-- Tabla de Product-categories

INSERT INTO product_categories (id, category_name) VALUES (1, 'Bateria y Percusión');

INSERT INTO product_categories (id, category_name) VALUES (2, 'Instrumentos de Cuerda');

INSERT INTO product_categories (id, category_name) VALUES (3, 'Instrumentos de Viento');

INSERT INTO product_categories (id, category_name) VALUES (4, 'Teclados y Pianos');

-- Tabla de Products

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (1, "Bateria Electronica Musical Flexible 9 Pad Pedal + Parlante", 9499, 1, "Batería portátil y profesional con sonido de tambor de alta calidad que traerá efecto de sonido natural y de gran alcance. Fácil de transportar, presentando un diseño y sonido de alta calidad. Este es un kit con pedales, par de palillos, selección de estilos musicales y metrónomo. Todo ello con la particularidad de la función GRABACIÓN (REC), que permite registrar su desempeño e inspiración donde y cuando quiera!!", "product_1.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (2, "Bateria Mapex Prodigy - Fierros + Platos + Banqueta - Cuotas", 114349, 1, "BATERIA MAPEX PRODIGY. Modelo: PDG5254T. - 5 cuerpos Con Fierros + Platillos + Banqueta.  MEdidas B: 22', TT: 12', TF: 13', R: 14'x5,5", "product_2.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (3, "Platillos Para Bateria Orion Twister Twp16c Crash 16 PuLG", 4279.85, 1, "ESPECIFICACIONES: Brillo moderado, medula: medio, volumen: bajo/medio; ataque rápido; sustain corto a mediano; composición: latón; control de frecuencia: regular", "product_3.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (4, "Guiro Metalico Cumbia Con Raspador Vg Kid 19 X 8,5cm - Full", 1399, 1, "GÜIRO VG KID CON PEINE RASPADOR !!!", "product_4.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (5, "Batería Electrónica Carlsbro Csd100 + Accesorios", 58530, 1, "El kit de batería electrónica Carlsbro CSD100 de 7 piezas consta del módulo de sonido Commander 100, 4 pads de batería, 3 platos que incluyen un platillo de doble zona y un soporte totalmente ajustable en altura. El módulo de sonido Commander 100 presenta 10 kits de batería preestablecidos, 108 voces de percusión, 10 canciones de demostración, entrada auxiliar y un metrónomo.", "product_5.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (6, "Palillos Baquetas Stagg 5a 5b Bateria Madera Sm5a Sm5b", 372, 1, "5A, 5B, 7A", "product_6.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (7, "Guitarra eléctrica Femmto Stratocaster EG001 de aliso 2020 naranja y negra brillante con diapasón de md", 16999, 2, "Disfrutá con esta guitarra Femmto Stratocaster de la conexión con la música. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Explorá, amplificá tu creatividad y desarrollá tu pasión.", "product_7.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (8, "Ukelele De Madera Soprano Con Funda Manual Y Lecciones", 2213.18, 2, "Ukelele de madera instrumento musical importado de primera calidad", "product_8.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (9, "Guitarra electroacústica Femmto AG002 natural", 8499, 2, "Disfrutá con esta guitarra Femmto de la conexión con la música. Está diseñada para aficionados y profesionales. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical.", "product_9.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (10, "Bajo Eléctrico Squier Jazz Bass Vintage Modified 70's", 80054.6, 2, "l Squier Vintage Modified Jazz Bass '70s te devuelve a un periodo clásico en la historia del Jazz Bass.", "product_10.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (11, "Violin Palatino 4/4 Madera Estudio Con Estuche Arco Resina", 6999, 2, "Este violin es IDEAL para estudiantes y principiantes en la materia", "product_11.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (12, "Guitarra criolla clásica Gracia M1 natural", 10809, 2, "Con un toque artesanal único plasmado en sus materiales, Gracia acompaña a la historia musical desde el año 1870. Sus guitarras poseen alcance internacional y son utilizadas tantos por principiantes como por grandes referentes de la música.", "product_12.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (13, "Saxo Tenor Master Parquer +estuche+cañas+kit Limpieza", 13114, 3, "Saxo Tenor Master Parquer","product_13.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (14, "Armonica Diatónica Cromada Dy Air Blusera Afina Do + Estuch", 982, 3, "Ideal para tocar Blues, Folk y Rock", "product_14.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (15, "Flauta Dulce Benson R08 Tipo Germanica Ideal Escuelas Marfil", 262.75, 3, "BENSON R08 FLAUTA DULCE MARFIL", "product_15.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (16, "Teclado musical Meike MK-2089 61 teclas Negro", 8553.12, 4, "Con sus 61 teclas, podrás tocar una amplia variedad de obras y sumergirte en el mundo del intérprete musical. Ideal para niveles intermedios que quieren superarse y seguir el camino de los grandes músicos.", "producto_16.jpg");

INSERT INTO products(id, product_name, price, product_category, description, image) VALUES (17, "Piano De Cola Gaveau", 990000, 4, "Piano de cola francés, único por su estado y conservación, mantenido en condiciones óptimas. Perfecto funcionamiento. Lustre original de fábrica.", "product_17.jpg");
