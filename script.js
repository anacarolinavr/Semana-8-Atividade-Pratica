// B.1 - Definição dos dados (JSON)

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 2,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 3,
        titulo: "Titanic",
        tipo: "filme",
        ano: 1997,
        generos: ["romance", "drama"],
        nota: 8.9,
        assistido: false
    },
    {
        id: 4,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["comédia", "sitcom"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 5,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["fantasia", "aventura"],
        nota: 9,
        assistido: true
    },
    {
        id: 6,
        titulo: "Wandinha",
        tipo: "serie",
        ano: 2022,
        generos: ["comédia", "fantasia"],
        nota: 8.8,
        assistido: false
    }
];

// B.2 - Acesso e leitura dos dados

console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item não possui um segundo gênero.");
}

// B.3.A - Listagem com forEach

console.log("LISTA DE TÍTULOS:");

catalogo.forEach(function (item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B.3.B - Transformação com map

const titulosEmCaixaAlta = catalogo.map(function (item) {
    return item.titulo.toUpperCase();
});

console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

// B.3.C - Seleção com filter

const naoAssistidos = catalogo.filter(function (item) {
    return item.assistido === false;
});

console.log("Quantidade de itens não assistidos:", naoAssistidos.length);

// B.3.D - Busca com find

const primeiroNotaAlta = catalogo.find(function (item) {
    return item.nota >= 9;
});

if (primeiroNotaAlta) {
    console.log(
        "Primeiro item com nota >= 9:",
        primeiroNotaAlta.titulo,
        primeiroNotaAlta.nota
    );
} else {
    console.log("Não existe item com nota >= 9.");
}

// B.3.E - Agregação com reduce

const somaNotas = catalogo.reduce(function (total, item) {
    return total + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(function (item) {
    return item.assistido === true;
});

const somaNotasAssistidos = assistidos.reduce(function (total, item) {
    return total + item.nota;
}, 0);

const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

// B.3.F - Checagens com some e every

const existeAnterior2000 = catalogo.some(function (item) {
    return item.ano < 2000;
});

const todosPossuemGenero = catalogo.every(function (item) {
    return item.generos.length >= 1;
});

console.log(
    "Existe algum item anterior a 2000?",
    existeAnterior2000
);

console.log(
    "Todos os itens possuem pelo menos um gênero?",
    todosPossuemGenero
);

// B.4 - Saída na tela

const quantidadeFilmes = catalogo.filter(function (item) {
    return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(function (item) {
    return item.tipo === "serie";
}).length;

const ranking = [...catalogo]
    .sort(function (a, b) {
        return b.nota - a.nota;
    })
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 maiores notas</h3>

    <ol>
        ${ranking.map(function (item) {
            return `<li>${item.titulo} - ${item.nota}</li>`;
        }).join("")}
    </ol>
`;