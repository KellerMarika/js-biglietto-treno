# js-biglietto-treno
js treno secondo esercizio

1)typof non è un oggetto!! si utulizza così:

typof xy
mai più così:
xy.typof

(e ha una f sola)

2) (isNaN) non si verifica se si ha già fatto il parseInt perchè è semanticamente una boiata. 

il parseInt trasforma il typeof di una stringa (ottenuta da un prompt) in numero, quindi non ha senso verificare questa cosa che è assoluta. 
pittosto ha senso verificare a monte che il valore da tradurre in numero col parseInt  (inserito dall'utente) contenga effettivamente solo un numero e non altre robe.
