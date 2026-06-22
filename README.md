# ServiceNow ViaCEP Integration

Projeto de integração com a API ViaCEP para preenchimento automático de endereços.

## Objetivo

Permitir que o usuário informe um CEP e tenha os campos de endereço preenchidos automaticamente.

## Tecnologias

* ServiceNow
* JavaScript
* REST API
* GlideAjax
* Script Include
* Client Script

## Fluxo

Usuário → Client Script → GlideAjax → Script Include → RESTMessageV2 → ViaCEP → Retorno JSON → Preenchimento do formulário

## Componentes

* Tabela customizada
* Client Script
* Script Include
* Integração REST
* Tratamento de erros

## Status

Em desenvolvimento.
