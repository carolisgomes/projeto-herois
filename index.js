let herois = [
    { nome: "Lux", XP: 8500 },
    { nome: "Morgana", XP: 3000 },
    { nome: "Sett", XP: 12000 },
    { nome: "Yone", XP: 4500 },
    { nome: "Seraphine", XP: 9500 }
];

function classificarHeroi(XP) {
    if (XP < 1000) return "Ferro";
    else if (XP <= 2000) return "Bronze";
    else if (XP <= 5000) return "Prata";
    else if (XP <= 7000) return "Ouro";
    else if (XP <= 8000) return "Platina";
    else if (XP <= 9000) return "Ascendente";
    else if (XP <= 10000) return "Imortal";
    else return "Radiante";
}

herois.forEach(heroi => {
    let nivel = classificarHeroi(heroi.XP);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
});