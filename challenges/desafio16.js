// 16 - Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac

db.produtos.updateOne({ nome: "Big Mac" },
 { $currentDate: { ultimaModificacao: { $type: "timestamp" } } });

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 }); 
