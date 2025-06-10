
# Projeto de automação Machine Learning

Projeto de Testes para validação do modelo de Machine Learning TextBlob com o uso de frameworks de automação, como Cypress, K6 e PyTest. Foi necessário desenvolver um aplicativo Flask para executar tanto o aplicativo web quanto a API, permitindo validar diferentes cenários nesses ambientes.



## Estrutura

```bash
  desafio_machine_learning/
│
├── .github/
│   └── workflows/
│       └── ci.yml                 # Configuração do CI/CD (GitHub Actions)
│
├── app/
│   ├── modelos/
│   └── aplicativo.py              # Arquivo principal do aplicativo
│
├── cypress/                       # Configurações e dados do Cypress
│   ├── data/                      # Dados adicionais para testes
│   ├── e2e/                       # Testes end-to-end (Web e API)
│   ├── fixtures/                  # Configurações de fixtures
│   ├── support/                   # Suporte para testes Cypress
│  
├── tests/
│   ├── k6/
│   │   └── load_test.js           # Testes de performance com K6
│   │
│   └── metrics/                   # Métricas e validações
│       ├── dataset/               # Dados de entrada para os testes de métricas 
│       ├── conftest.py            # Configuração do Pytest
│       └── test_metrics.py        # Testes de métricas (benchmarking)
│
├── .gitignore                     # Ignorar arquivos no versionamento
├── cypress.config.js              # Configuração do Cypress
├── merge-report.js                # Script para unificar relatórios
├── package.json                   # Dependências do projeto
├── package-lock.json              # Versões fixas das dependências
├── README.md                      # Documentação do projeto
├── reporter-config.json           # Configuração de relatórios
├── requirements.txt               # Dependências do Python
└── dataset/                       # Dataset utilizado (K6)              
```
## Técnicas de testes utilizadas

#### 1. Partição de equivalência
Aplicação da técnica de partição de equivalência para validar as categorias de polaridade classificadas pelo modelo TextBlob, garantindo que cada categoria seja corretamente identificada. As categorias testadas incluem:

- Muito positivo
- Levemente positivo
- Neutro
- Levemente negativo
- Muito negativo
#### 2. Análise de valor limite
Realização de testes nos valores limites para verificar a transição entre as classificações de polaridade. Os limites validados foram:

- Levemente positivo: 0.4, 0.5
- Muito positivo: 0.6
- Levemente negativo: -0.4, -0.5
- Muito negativo: -0.6
#### 3. Testes de carga
Testes de carga foram conduzidos para avaliar o desempenho das requisições à API sob diferentes condições, como períodos prolongados de execução e aumento no número de usuários simultâneos. O objetivo foi identificar possíveis gargalos e garantir a estabilidade do sistema
#### 4. Testes de benchmarking
- Acurácia
- Precisão
- Recall
- F1-Score
Também foi gerada a matriz de confusão, permitindo uma análise detalhada da classificação realizada pelo modelo.

## Modelo de Machine Learning utilizado
### TextBlob
Utiliza uma abordagem baseada em léxicos pré-definidos para determinar o sentimento de um texto. Ele se baseia no léxico **Pattern**, que associa palavras a valores de polaridade e subjetividade.

#### Como funciona:
| **Característica** | **Descrição** |
|---------------------|----------------|
| **Polaridade**      | Varia de -1.0 (muito negativo) a 1.0 (muito positivo). Mede o quão positiva ou negativa é a frase. |
| **Subjetividade**    | Varia de 0.0 (muito objetiva) a 1.0 (muito subjetiva). Avalia o grau de opinião ou fato presente no texto. |

# Ferramentas Utilizadas

- **Cypress**: Automação para testes de API e web.![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

- **K6**: Ferramenta para testes de performance da API.![K6](https://img.shields.io/badge/K6-00A8E8?style=for-the-badge&logo=k6&logoColor=white)
- **Pytest**: Framework utilizado para testes de benchmarking do modelo.![Pytest](https://img.shields.io/badge/Pytest-3776AB?style=for-the-badge&logo=pytest&logoColor=yellow)

- **Flask**: Utilizado para criar o servidor e a interface API/web para execução dos testes.![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

- **IDE**: Visual Studio Code (VSCode).![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

# Linguagens utilizadas
 - Para testes com Cypress e K6 ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
- Para testes de benchmarking com Pytest ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

## Critérios de aceite
#### 1. Classificação correta
As previsões realizadas pela API e interface web devem ser corretamente classificadas pelo modelo TextBlob.
#### 2. Interface Web
O front-end deve permitir a inserção de uma frase para análise de sentimento, com a predição exibida corretamente e consistente com a saída esperada do modelo.
#### 3.	Desempenho do endpoint /predict:
- Deve retornar o status 200 para todas as requisições realizadas.
- O tempo de resposta deve ser inferior a 8ms.
#### 4. Testes de carga:
- Simular **10 usuários simultâneos** acessando a aplicação por **pelo menos 30 segundos.**
- Todos os usuários devem ser capazes de finalizar o processo de predição sem falhas.
#### 5. Generalização do modelo
- O modelo deve classificar corretamente 70% dos sentimentos presentes no dataset (two_words_1000.csv) de testes.
- Deve validar corretamente a categoria de polaridade: muito positivo, levemente positivo, neutro, levemente negativo, muito negativo.
#### 6. Métricas de previsão
- As métricas do modelo, incluindo acurácia, precisão, recall e F1-Score, devem apresentar pelo menos 70% de acerto.
#### 7. Matriz de confusão
- A matriz de confusão deve ser gerada corretamente ao final dos testes de benchmarking, permitindo uma análise detalhada dos resultados.

# Cenários de Testes Automatizados

###  Cenários API

| ID do Cenário | Descrição |
|---------------|-----------|
| Cenário 01    | Validar previsão - Muito positivo |
| Cenário 02    | Validar previsão - Levemente positivo |
| Cenário 03    | Validar previsão - Neutro |
| Cenário 04    | Validar previsão - Levemente Negativo |
| Cenário 05    | Validar previsão - Muito Negativo |
| Cenário 06    | Validar previsão - Com dados inválidos |
| Cenário 07    | Validar previsão - Com espaços vazios |
| Cenário 08    | Validar previsão - limite (0,6) - Muito Positivo |
| Cenário 09    | Validar previsão - limite (0,5) - Levemente Positivo |
| Cenário 10    | Validar previsão - limite (0,4) - Levemente Positivo |
| Cenário 11    | Validar previsão - limite (-0,6) - Muito Negativo |
| Cenário 12    | Validar previsão - limite (-0,5) - Levemente Negativo |
| Cenário 13    | Validar previsão - limite (-0,4) - Levemente Negativo |

###  Cenários Web

| ID do Cenário | Descrição |
|---------------|-----------|
| Cenário 01    | Validar previsão - Muito positivo |
| Cenário 02    | Validar previsão - Levemente positivo |
| Cenário 03    | Validar previsão - Neutro |
| Cenário 04    | Validar previsão - Levemente Negativo |
| Cenário 05    | Validar previsão - Muito Negativo |
| Cenário 06    | Validar previsão - Com dados inválidos |
| Cenário 07    | Validar previsão - Com espaços vazios |
| Cenário 08    | Validar previsão - limite (0,6) - Muito Positivo |
| Cenário 09    | Validar previsão - limite (0,5) - Levemente Positivo |
| Cenário 10    | Validar previsão - limite (0,4) - Levemente Positivo |
| Cenário 11    | Validar previsão - limite (-0,6) - Muito Negativo |
| Cenário 12    | Validar previsão - limite (-0,5) - Levemente Negativo |
| Cenário 13    | Validar previsão - limite (-0,4) - Levemente Negativo |




# Execução do projeto localmente

## Instalação do Python

### Windows:
Siga os passos para instalação correta:
[Instalação do Python no Windows](https://python.org.br/instalacao-windows/)

### Linux:
```bash
sudo apt install python3
```

## Instalação do Node.js

### Windows:
Faça o download do Node.js e siga o passo a passo para finalizar a instalação:
[Node.js para Windows](https://nodejs.org/pt)

### Linux:
```bash
sudo apt install nodejs -y
```
## Execução do código de testes

### Clonar o repositório
Clone o repositório utilizando o comando:
```bash
git clone https://github.com/menahemlima/Cypress-and-Pytest-IA-automation
```

### Instalar as dependências do Python
1. Acesse o diretório do projeto:
   ```bash
   cd C:\Users\{NAMEUSER}\Documents\Cypress-and-Pytest-IA-automation
   ```
2. Execute o comando:
   ```bash
   pip install -r requirements.txt
   ```

### Instalar as dependências do Node.js
1. Acesse o diretório do projeto:
   ```bash
   cd C:\Users\{NAMEUSER}\Documents\Cypress-and-Pytest-IA-automation
   ```
2. Execute o comando:
   ```bash
   npm install -f
   ```

### Instalar o K6

#### Windows
Instale utilizando o Chocolatey:
```bash
choco install k6 -y
```

#### Linux
```bash
sudo apt install -y k6
```

### Executar a aplicação para iniciar os testes
1. Acesse o repositório do projeto:
   ```bash
   cd C:\Users\{NAMEUSER}\Documents\desafio_machine_learning
   ```
2. Execute o comando:
   ```bash
   python app/aplicativo.py
    
## Screenshots

[Tela Web - Front de análise de predições ](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/web.png)

[Tela API - Endpoint de análise de predições](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/api.png)

## Execução dos testes Cypress

1. Dentro da pasta:
   ```bash
   cd C:\Users\{NAMEUSER}\Documents\Cypress-and-Pytest-IA-automation
   ```
2. Execute o comando:
   ```bash
   npx cypress run
   ```

## Relatório de testes Cypress

1. Após a execução dos testes, gere o relatório com os comandos:
   ```bash
   node merge-report.js
   npx mochawesome-report-generator report.json --reportDir cypress/mochawesome-report
   ```
2. Abra o arquivo `report.html` no diretório `cypress/mochawesome-report` usando qualquer navegador.
#### Diretório
![diretorio_cypress](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/cypress_estrutura.png)

#### Relatório Cypress

![relatorio_cypress](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/cypress_result01.png)

![relatorio_cypress](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/cypress_result02.png)


## Execução dos testes benchmarking com K6

1. Dentro da pasta:
   ```bash
   cd C:\Users\{NAMEUSER \Documents\Cypress-and-Pytest-IA-automation\tests\k6
   ```
   ![diretorio_cypress](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/k6_estrutura.png)
2. Execute o comando:
   ```bash
   k6 run load_test.js --out json=test.json
   ```
3. Abra o arquivo `k6_report.html` no diretório usando qualquer navegador.

#### Relatório dos testes K6

![relatorio_k6](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/k6_result01.png)

![relatorio_k6](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/k6_result02.png)


## Execução dos testes benchmarking no modelo ML com Pytest

1. Dentro da pasta:
   ```bash
   cd  C:\Users\{NAMEUSER}\Documents\Cypress-and-Pytest-IA-automation\tests\metrics
   ```
   ![diretorio_pytest](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/pytest_estrutura.png)
2. Execute o comando:
   ```bash
   py.test test_metrics.py --html=pytest-reports/pytest_report.html --self-contained-html
   ```
3. Abra o arquivo `pytest_report.html` no diretório usando qualquer navegador.

#### Relatórios Pytest

![relatorio_pytest](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/pytest_result01.png)

![relatorio_pytest](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/pytest_result02.png)

## Relatórios no Github

Após a execução do pipeline no github as evidências dos testes ficam salvas na aba `Actions` > `Suite de testes ML` > `Projeto de testes - Machine Learning` 
veja o print [aqui](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/github_artifacts.png).

# Configuração da Pipeline CI/CD – GitHub Actions

Para a configuração do pipeline do GitHub Actions, as etapas foram organizadas da seguinte forma:

1. **Instalar Node.js**
2. **Instalar Python**
3. **Instalar dependências Python**
4. **Instalar dependências Node.js**
5. **Instalar K6**
6. **Inicializar a aplicação Flask**
7. **Verificar se a aplicação está rodando**
8. **Executar testes Web e API com Cypress**
9. **Gerar relatório de testes com Mochawesome**
10. **Salvar relatório dos testes Cypress**
11. **Executar testes de performance com K6**
12. **Salvar relatório dos testes K6**
13. **Executar testes de desempenho do modelo com Pytest**
14. **Salvar relatório dos testes Pytest**

---

## Insights sobre o modelo TextBlob

As funções abaixo foram criadas para realização da limpeza da base de dados e previsão dos dados com base no dataset `two_words_1000.csv`.

### Função `preprocess_text`
Essa função realiza o pré-processamento do texto, removendo informações desnecessárias e garantindo que ele esteja em um formato mais limpo para análise.

```python
def preprocess_text(text):    
    text = re.sub(r"http\S+|www.\S+", "", text)
    text = re.sub(r"[^a-zA-Z0-9\s]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text
```

### Função `classify_sentiment`
Essa função utiliza a biblioteca TextBlob para classificar o sentimento de um texto em categorias, baseando-se na polaridade do texto.

```python
def classify_sentiment(text):
    clean_text = preprocess_text(text)
    analysis = TextBlob(clean_text)
    score = analysis.sentiment.polarity

    if score > 0.5:
        return "Very Positive"
    elif 0 < score <= 0.5:
        return "Slightly Positive"
    elif score == 0:
        return "Neutral"
    elif -0.5 <= score < 0:
        return "Slightly Negative"
    else:
        return "Very Negative"
```

### Função `datasetPrevisoes`
Essa função carrega o dataset `two_words_1000.csv` de teste e aplica a classificação de sentimentos em cada registro do dataset, retornando os dados com uma nova coluna `prediction` contendo os sentimentos classificados.

```python
def datasetPrevisoes():
    base_path = os.path.dirname(__file__)
    dataset_path = os.path.join(base_path, "dataset", "two_words_1000.csv")
    dataset = pd.read_csv(dataset_path)
    
    registro = "text"
    categoria = "label"
    
    dataset["prediction"] = dataset[registro].apply(classify_sentiment)
    
    categorias = dataset[categoria]
    registros = dataset["prediction"]
    
    return categorias, registros
```

### Observações sobre o TextBlob
O TextBlob é um classificador simples voltado para a análise léxica de sentimentos. Ele apresenta bom desempenho ao lidar com frases curtas ou compostas por uma ou duas palavras. No entanto, quando exposto a contextos mais complexos, sua capacidade de generalização é significativamente limitada, resultando em desempenho insatisfatório.

Ao testar o modelo com um conjunto de dados contendo 400 frases, cada uma com mais de 3 palavras, os resultados demonstraram métricas abaixo de 70%. Esse desempenho é considerado insuficiente para problemas de aprendizado de máquina, evidenciando que o TextBlob não é adequado para cenários mais desafiadores ou com maior complexidade sem um refinamento ou suporte adicional.

#### Test metrics_failed

![test_metrics_failed](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/metrics_fail.png)

Ao simplificar o dataset para frases com até 2 palavras e expandir para 1000 registros, o modelo apresentou um desempenho consistente, alcançando métricas satisfatórias:
A matriz de confusão revela uma boa capacidade de classificação, com um número reduzido de erros em relação ao total de previsões, especialmente para classes bem representadas. Esses resultados indicam que a simplificação do escopo e o aumento do volume de dados permitiram ao modelo generalizar de forma mais eficiente em contextos menos complexos.

#### Test metrics_passed

![test_metrics_passed](https://raw.githubusercontent.com/menahemlima/Cypress-and-Pytest-IA-automation/main/images/metrics_pass.png)

O modelo, conforme mencionado anteriormente, apresenta bom desempenho apenas quando o contexto da previsão é simples. Em cenários mais complexos, é recomendável considerar modelos mais avançados disponíveis no mercado, como **VADER** ou **BERT**, que são projetados para lidar com maior complexidade sem perder a precisão.

Além disso, uma possível melhoria no desempenho deste modelo simples de machine learning seria adotar uma abordagem mais focada, utilizando apenas três polaridades: **positivo**, **neutro** e **negativo**. Essa simplificação poderia aumentar significativamente as chances de alcançar melhores resultados, tornando-o mais eficiente mesmo em contextos mais diversos.
## Referência

- [Cypress](https://www.cypress.io/)
- [Pytest](https://docs.pytest.org/en/stable/)
- [K6](https://k6.io/)
- [Node.js](https://nodejs.org/pt)
- [VsCode](https://code.visualstudio.com/)
- [Flask](https://flask.palletsprojects.com/en/stable/)