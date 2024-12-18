import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"

const dataSet = new SharedArray('Dataset', () => {
  const csv = open('../../dataset/dataset_random.csv');
  return csv
    .split('\n')
    .slice(1)
    .map((line) => line.trim());
});

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const textoAleatorio = dataSet[Math.floor(Math.random() * dataSet.length)];

  const url = `http://localhost:5000/predict`;
  const payload = JSON.stringify({
    input: textoAleatorio,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);
  const maxTempoResposta = 8;

  check(response, {
    'Verificar Status Code = 200': (r) => r.status === 200,
    [`Verificar Tempo de resposta menor que ${maxTempoResposta}ms`]: (r) => 
      r.timings.duration < maxTempoResposta,
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    "k6_report.html": htmlReport(data)
  };
}