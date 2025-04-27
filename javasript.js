document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const placa = document.getElementById('placa').value;
        const nomeProprietario = document.getElementById('nomeProprietario').value;
        const numeroApartamento = document.getElementById('numeroApartamento').value;
        const blocoApartamento = document.getElementById('blocoApartamento').value;
        const modeloVeiculo = document.getElementById('modeloVeiculo').value;
        const corVeiculo = document.getElementById('corVeiculo').value;
        const numeroVaga = document.getElementById('numeroVaga').value;

        const formData = {
            placa: placa,
            nomeProprietario: nomeProprietario,
            numeroApartamento: numeroApartamento,
            blocoApartamento: blocoApartamento,
            modeloVeiculo: modeloVeiculo,
            corVeiculo: corVeiculo,
            numeroVaga: numeroVaga
        };

        console.log("Dados do Formulário:", formData);
        alert("Cadastro realizado com sucesso!");

        cadastroForm.reset(); // Limpa o formulário após o envio
    });
});