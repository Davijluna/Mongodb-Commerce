// - Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken
db.produtos.find({ $and: [{ nome: { $ne: "McChicken" } }, { nome: { $ne: "Big Mac" } }] },
 { _id: 0, nome: 1, curtidas: 1, vendidos: 1 }); 