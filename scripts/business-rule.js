(function executeRule(current, previous /*null when async*/ ) {

    try {

        var cep = current.u_cep.toString().replace('-', '');

        var rm = new sn_ws.RESTMessageV2();
        rm.setHttpMethod('GET');
        rm.setEndpoint('https://viacep.com.br/ws/' + cep + '/json/');

        var response = rm.execute();
        var body = response.getBody();
        var data = JSON.parse(body);

        if (data.erro) {
            gs.addErrorMessage('CEP não encontrado.');
            current.setAbortAction(true);
        } else {

            current.u_logradouro = data.logradouro;
            current.u_complemento = data.complemento;
            current.u_unidade = data.unidade;
            current.u_bairro = data.bairro;
            current.u_localidade = data.localidade;
            current.u_uf = data.uf;
            current.u_estado = data.estado;
            current.u_regiao = data.regiao;
            current.u_ibge = data.ibge;
            current.u_gia = data.gia;
            current.u_ddd = data.ddd;
            current.u_siafi = data.siafi;

        }

    } catch (ex) {
        gs.error('Erro: ' + ex.message);
    }

})(current, previous);
