# PLATAFORMA PARA SORTEIO DE MOTOS

**CLIENTE**: Anderson

**CONTATO**: +55 48 8406-1811

## HISTÓRIA 

O CLIENTE DESEJA QUE SEJA CONSTRUIDO UM SISTEMA QUE TEM O INTUITO DE GERENCIAR SORTEIOS DE MOTOS. OS PARTICIPANTES ENVOLVIDOS TERÃO QUE REALIZAR A ESCOLHA DE COTAS DISPONÍVEIS PARA O SORTEIO E ISSO FARÁ QUE O MESMO TENHA UMA RESERVA DESSAS COTAS, NESSE PROCESSO, O MESMO DEVE REALIZAR UMA TRANSFERÊNCIA BANCARIA PARA UMA DAS CONTAS DO ADMINISTRADOR(`Anderson`) CORRESPONDENTE A QUANTIDADE DE CONTAS COMPRADAS E AO VALOR DA UNIDADE COTA. APÓS A TRANSFERÊNCIA O MESMO IRÁ ENCAMINHAR O COMPROVANTE AO ADMINISTRADOR(`Anderson`) E COM ISSO O MESMO IRÁ NO SISTEMA DO SORTEIO VALIDAR AS COTAS QUE FORAM RESERVADAS PELO PARTICIPANTE NAQUELE SORTEIO. 

NO DIA DO SORTEIO QUE VAI SAIR O RESULTADO DO NÚMERO SORTEADO NA CENTENA DO 1º PRÊMIO DA LOTERIA FEDERAL, VINCULADO ASSIM, O PARTICIPANTE COM O PREÊMIO.

O **ADMINISTRADOR** DO SISTEMA É RESPONSÁVEL POR : 

- CRIAR OS SORTEIOS
- GERENCIAR O CICLO DE VIDA DOS SORTEIOS(`ATIVO,ENCERRADO`).
- CADASTRAR AS CONTAS BANCÁRIAS  
- CADASTRO DO CNPJ DA EMPRESA E NOME FANTASIA
- CADASTRO DE UMA LOGO PARA O PORTAL
- REDES SOCIAIS(YOUTUBE,FACEBOOK,INSTAGRAM,WHATS APP)

O **SORTEIO** É UM ITEM QUE É VINCULADO A UM SOTEIO EXISTENTE NA LOTERIA FEDERAL, A MESMA TEM ALGUMAS CARACTERÍSTICAS QUE A DEFINEM COMO UM SORTEIO NA APLICAÇÃO.

- TITULO
- SUBTITULO
- VALOR(UNIDADE)
- IMAGEM DA MOTO SORTEADA
- DATA DO SORTEIO
- DESCRIÇÃO
- STATUS(**ATIVO**,**ENCERRADO**)

OS **PARTICIPANTES** SÃO OS USUARIOS DA APLICAÇÃO QUE TIVERAM O INTERESSE NO SORTEIO, OS MESMOS TEM UM LIMITE DE COMPRA DE 10 COTAS 

AS **COTAS** REPRESENTAM UM NÚMERO QUE TEM A POSSIBILIDADE DE SER SORTEADO NA CENTENA DO 1º PRÊMIO DA LOTERIA FEDERAL. 

- DE 000 A 999

OS **USUARIOS(CLIENTES)** SÃO OS FUTÚROS PARTICIPANTES DOS SORTEIOS  
- CPF
- EMAIL
- TELEFONE
- CIDADE
- SENHA

OS **GANHADORES** SÃO OS PARTICIPANTES QUE ESTAVAM VINCULADOS EM UM SORTEIO, E UMA DAS SUAS COTAS QUE O PARTICIPANTE COMPROU FOI O NÚMERO GANHADOR, O FAZENDO O GANHADOR DO SORTEIO.

## CASES     

- [Rifamotos](https://rifamotos.com)

## ENTIDADES

-  BUSNESS - FEITO
-  GANHADORES
-  PARTICIPANTES - FEITO
-  CONTAS BANCARIAS - FEITO
-  SORTEIOS - FEITO
-  RIFAS - FEITO
-  COTAS SORTEIO - FEITO
-  COTAS RIFAS - FEITO
-  USUARIOS - FEITO

## REQUISITOS FUNCIONAIS

- GESTÃO DE GANHADORES 
- GESTÃO DE USUARIOS
- GESTÃO DE PARTICIPANTES
- GESTÃO DE CONTAS BANCARIAS
- GESTÃO DE SORTEIOS
- GESTÃO DE RIFAS
- GESTÃO DE COTAS
- RELÓGIO DE CONTAGEM BASEADO NA DATA DO SORTEIO
- RELATÓRIOS SORTEIOS  (NOME E COTAS)
- RELATÓRIOS RIFAS  (NOME E COTAS)

## REQUISITOS NÃO FUNCIONAIS

- RNF 1: PADRÃO DE PROJETO MVC
- RNF 2: DEVE POSSIBILITAR UMA API
- RNF 3: SGDB MYSQL
- RNF 4: BACKEND NODE COM TYPESCRIPT
- RNF 5: FRONTEND COM REACT
- RNF 6: JWT

## REQUISITOS DAS REGRAS DE NEGÓCIO

- TODO CADASTRO DE USUÁRIO, DEVE SER COM UM CPF VÁLIDO
- COTAS VINCULADAS VÃO DE 000 A 999
- COTAS VINCULADAS AS RIFAS VÃO DE 00 A 99
- DEVE POSSUIR UM DOMINIO
- DEVE POSSUIR SERVIDOR

## CONVERSA 

### 16/09/2020

- DOMINIO 
- AMBIENTE DE PUBLICAÇÃO
- VALIDAÇÃO DE CPF
- TIMER
- MULTIPLAS RIFINHAS CRIAÇÃO DE RIFAS 
-  - DEZENAS
- RELATÓRIO SORTEIOS COM BUSCA POR NOME E COTAS
- RELATÓRIO RIFAS COM BUSCA POR NOME E DEZENAS 
- INTERESSE NO SUPORTE


## MODELAGEM DO BANCO DE DADOS

![](schema.svg)


## PLANOS DA PLATAFORMA DE HOSPEDAGEM  

A HOSPEDAGEM SERÁ O LOCAL ONDE A APLICAÇÃO QUANDO FINALIZADA VAI SER PÚBLICADA E VINCULADA AO DÓMINIO.

ENDEREÇO: [UMBLER](https://app.umbler.com/)

### PEQUENA 16 REAIS MÊS:
- CPU: 2 CORE
- RAM: 1GB
- DISCO: 10G
- TRAFEGO: 512G

### MEDIA 32 REIAS MÊS (Inicialmente Recomendo)
- CPU: 3 CORE
- RAM: 2GB
- DISCO: 20G
- TRAFEGO: 1024GB

### GRANDE 64 REAIS MÊS 
- CPU: 4 CORE
- RAM: 4GB
- DISCO: 40G
- TRAFEGO: 2024GB

## PLANOS DE DOMINIOS

- 1 ANO: 36,00 REAIS
- 2 ANO: 72,00 REAIS
- 3 ANO: 108,00 REAIS
- 5 ANO: 180,00 REAIS

## PLANOS DE BANCO DE DADOS

- R$ 0,90 mensais por banco	1 GB de armazenamento	25 Conexões simultâneas
- R$ 15,0 mensais por banco	2 GB de armazenamento	50 Conexões simultâneas
- R$ 35,0 mensais por banco	5 GB de armazenamento	50 Conexões simultâneas

## CONTRATO 

**TEMPO**: 4 SEMANAS

**VALOR**: 1000 REAIS

**VALOR SUPORTE**: 50.00 REIAS A HORA TÉCNICA

**OBSERVAÇÃO**: Sobre o valor do suporte, dessa forma, só vai pagar pelas horas que usar para resolver **problemas**. 
