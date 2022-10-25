// 25 - Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40
// Para isso, escreva no arquivo desafio25.js duas queries, nesta ordem:

db.produtos.updateMany(
    { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
    { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 }); 