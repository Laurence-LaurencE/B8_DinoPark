CREATE TABLE booking(
   id INTEGER,
   booking_date DATE NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE ticket_type(
   id INTEGER,
   title VARCHAR(50)  NOT NULL,
   unit_price NUMERIC(4,2)   NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(title)
);

CREATE TABLE dinosaurs(
   id INTEGER,
   common_noun VARCHAR(50)  NOT NULL,
   diet VARCHAR(500)  NOT NULL,
   description VARCHAR(500)  NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(common_noun)
);

CREATE TABLE book(
   id_ticket INTEGER,
   id INTEGER,
   quantity INTEGER NOT NULL,
   total_price NUMERIC(15,2)   NOT NULL,
   PRIMARY KEY(id_ticket, id),
   FOREIGN KEY(id_ticket) REFERENCES booking(id),
   FOREIGN KEY(id) REFERENCES ticket_type(id)
);


INSERT INTO booking (id, booking_date) VALUES
(1, '2025-09-30'),
(2, '2025-09-25'),
(3, '2025-10-01');

INSERT INTO ticket_type (id, title, unit_price) VALUES
(1, 'Adult', 15.00),
(2, 'Child', 8.50),
(3, 'VIP', 25.00);

INSERT INTO dinosaurs (id, common_noun, diet, description) VALUES
(1, 'baby_dino', 'Herbivore', 'Un petit dinosaure mignon qui adore les feuilles.'),
(2, 'beak_dino', 'Omnivore', 'Dinosaure avec un grand bec, mange fruits et petits animaux.'),
(3, 'pink_dino', 'Herbivore', 'Dinosaure rose très rare, aime les fleurs.'),
(4, 'rock_dino', 'Carnivore', 'Très robuste, se cache souvent parmi les rochers.'),
(5, 'teach_dino', 'Omnivore', 'Dinosaure sage qui apprend aux autres, mange de tout.'),
(6, 'twins_dino', 'Herbivore', 'Deux dinosaures inséparables, toujours ensemble.');

INSERT INTO book (id_ticket, id, quantity, total_price) VALUES
(1, 1, 2, 30.00),   
(1, 2, 1, 8.50),    
(2, 3, 2, 50.00), 
(3, 1, 1, 15.00),
(3, 2, 2, 17.00);


