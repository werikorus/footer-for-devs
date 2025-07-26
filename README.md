# 🧩 footer-for-devs

Um rodapé React simples, moderno e personalizável.
Ideal para sites institucionais, landing pages e portfólios que desejam exibir créditos do autor e do desenvolvedor com elegância.

<div align="center">

[![npm](https://img.shields.io/npm/v/footer-for-devs.svg?style=flat-square)](https://www.npmjs.com/package/footer-for-devs)
[![downloads](https://img.shields.io/npm/dt/footer-for-devs.svg?style=flat-square)](https://www.npmjs.com/package/footer-for-devs)
[![GitHub stars](https://img.shields.io/github/stars/werikorus/footer-for-devs?style=social)](https://github.com/werikorus/footer-for-devs)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

---

## 📦 Instalação

```bash
npm install simple-footer
```

ou

```bash
yarn add simple-footer
```

---

## ⚙️ Uso

```tsx
import { SimpleFooter } from "simple-footer";

function App() {
  return (
    <SimpleFooter
      ownerName="Empresa Exemplo"
      developerName="Werik Santos"
      developerLink="https://github.com/weriksantos"
    />
  );
}
```

---

## 🧰 Props

| Prop            | Tipo        | Obrigatório | Descrição                                                       |
| --------------- | ----------- | ----------- | --------------------------------------------------------------- |
| `ownerName`     | `string`    | ✅ Sim      | Nome do proprietário ou empresa do site.                        |
| `developerName` | `string`    | ✅ Sim      | Nome do desenvolvedor responsável.                              |
| `developerLink` | `string`    | ❌ Não      | URL com link para portfólio ou perfil público do desenvolvedor. |
| `year`          | `number`    | ❌ Não      | Ano a ser exibido no rodapé. Padrão: ano atual.                 |
| `icon`          | `ReactNode` | ❌ Não      | Ícone JSX exibido ao lado do nome do desenvolvedor.             |

---

## 🧪 Exemplo com ícone personalizado

```tsx
<SimpleFooter
  ownerName="Acme Inc."
  developerName="Werik Santos"
  icon={<span style={{ marginLeft: 4 }}>🚀</span>}
/>
```

<div align="center">
<img width="397" height="89" alt="image" src="https://github.com/user-attachments/assets/f4cf9a69-176c-4f94-babf-6a06d82776f5" />
</div>

---

## 🤝 Contribuição

Este é um projeto **open source**! Sinta-se à vontade para abrir issues, enviar PRs ou sugerir melhorias.

1. Faça um fork
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça as alterações e dê commit: `git commit -m "Minha feature"`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request 🚀

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 💡 Dica

Combine este rodapé com seu tema principal para manter a identidade visual do seu site consistente.
