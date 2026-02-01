document.getElementById("form-agendamento").addEventListener("submit", function (event) {
    event.preventDefault();

    const evento = document.getElementById("evento").value;
    const estilo = document.getElementById("estilo").value;
    const dataInput = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const nome = document.getElementById("nome").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const tema = document.getElementById("tema").value;
    const observacoes = document.getElementById("observacoes").value;

    // Coletar opções marcadas
    const itensSelecionados = [];
    document.querySelectorAll(".opcoes input:checked").forEach(item => {
        itensSelecionados.push(item.value);
    });

    if (
        !evento || !estilo || !dataInput || !horario ||
        !nome || !whatsapp || !tema
    ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const dataFormatada = new Date(dataInput).toLocaleDateString("pt-BR");

    const mensagem = 
`Olá! Gostaria de agendar uma decoração 🎉

🗓 Evento: ${evento}
🎨 Estilo: ${estilo}
🎭 Tema: ${tema}
📅 Data: ${dataFormatada}
⏰ Horário: ${horario}
👤 Nome: ${nome}
📞 WhatsApp: ${whatsapp}

🧩 Itens desejados:
${itensSelecionados.length ? "- " + itensSelecionados.join("\n- ") : "Nenhum item selecionado"}

📝 Observações:
${observacoes || "Nenhuma"}

✨ Aguardamos seu contato para confirmar!
`;

    const telefoneMae = "5586995630268"; // número da sua mãe

    const confirmar = confirm("Deseja enviar este agendamento pelo WhatsApp?");
    if (!confirmar) return;

    const url = `https://wa.me/${telefoneMae}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});
