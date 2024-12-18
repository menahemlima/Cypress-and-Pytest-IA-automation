test_results = []

new_names = {
    "test_accuracy": "Teste de Acurácia",
    "test_precision": "Teste de Precisão",
    "test_recall": "Teste de Recall",
    "test_f1_score": "Teste de F1-Score",
    "test_confusion_matrix": "Teste da Matriz de Confusão",
}

def pytest_runtest_logreport(report):
    if report.when == "call":
        test_name = report.nodeid.split("::")[-1]
        test_display_name = new_names.get(test_name, test_name)
        
        if report.outcome == "passed":
            test_results.append((test_display_name, "PASSOU"))
        elif report.outcome == "failed":
            test_results.append((test_display_name, "FALHOU"))

def pytest_sessionfinish():
    """Exibe o resumo ao final."""
    print("\n\n================= RESUMO DOS TESTES =================")
    for test_name, status in test_results:
        print(f"{test_name}: {status}")
    print("====================================================")
