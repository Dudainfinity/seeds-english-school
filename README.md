# Seeds English School

Site institucional estático da Seeds English School.

## Estrutura do projeto

```
seeds_English/
├── index.html            # Página principal (árvore, trilha, sobre, valores, professores)
├── historia.html         # Página da história da escola
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos do site
│   ├── js/
│   │   └── script.js      # Interações da página
│   └── images/
│       ├── logo.jpg       # Logotipo
│       ├── arvore.png     # Ilustração da árvore (usada no index)
│       └── arvore.jpeg    # Versão alternativa da árvore
├── .gitignore
└── README.md
```

## Como visualizar

Abra `index.html` diretamente no navegador, ou rode um servidor local:

```bash
python3 -m http.server 8000
```

E acesse http://localhost:8000

## Observações

- `.bgvenv/` é um ambiente Python (removedor de fundo de imagens) e **não é versionado** — veja `.gitignore`.
