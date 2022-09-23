function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);

    $.ajax({  //Exemplo de requisição Ajax
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);  //Exemplo de formatação com o JQuery
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
        }
    })
}