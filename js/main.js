

import Operation from './math.js';
import { afficher } from './affichage.js';

const operation1 = new Operation(10, 5);

afficher("Résultat de l'addition : " + operation1.addition());
afficher("Résultat de la soustraction : " + operation1.soustraction());
afficher("Résultat de la multiplication : " + operation1.multiplication());

try {
  afficher("Résultat de la division : " + operation1.division());
} catch (error) {
  afficher(error.message);
}
