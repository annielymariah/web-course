const buscarCEP = async cep => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar o CEP');
        }

        const forms = await response.json();

        if (forms.erro) {
            document.getElementById('result').innerHTML = `CEP não encontrado.`;
            return;
        }

        document.getElementById('result').innerHTML = `
                    <strong>CEP:</strong> ${forms.cep}<br>
                    <strong>Logradouro:</strong> ${forms.logradouro}<br>
                    <strong>Bairro:</strong> ${forms.bairro}<br>
                    <strong>Cidade:</strong> ${forms.localidade}<br>
                    <strong>Estado:</strong> ${forms.uf}
                `;

    } catch (error) {
        document.getElementById('result').innerText = 'Ocorreu um erro ao buscar o CEP.';
    }
};

document.addEventListener('DOMContentLoaded', () => { // ChatGPT deu uma ajudada que só Deus na causa
    document.getElementById('cep-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const cep = document.getElementById('cep').value;
        buscarCEP(cep);
    });
});