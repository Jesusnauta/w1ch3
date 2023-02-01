import { Character } from '../models/character';
import { Counselor } from '../models/counselor';
import { Fighter } from '../models/fighters';
import { King } from '../models/king';
import { Squire } from '../models/Squire';

const joffrey = new King('Joffrey', 'Baratheon', 23, 10);
const jaime = new Fighter('Jaime', 'Lannister', 30, 'sword', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 28, 'dragon', 6);
const tyrion = new Counselor('Tyrion', 'Lannister', 35, daenerys);
const bronn = new Squire('Bronn', 'Gonzalez', 24, jaime, 9);
