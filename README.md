# EPIC Books Project - Modulo M5

## Descrizione

Il progetto "EPIC Books" è un'applicazione web sviluppata con React e Bootstrap, progettata per gestire e visualizzare i commenti sui libri.
Gli utenti possono visualizzare, aggiungere, aggiornare ed eliminare commenti sui libri.
L'applicazione utilizza diverse librerie per gestire il frontend e le richieste HTTP.

## Funzionalità

* Visualizzazione della lista di commenti sui libri
* Aggiunta di nuovi commenti
* Aggiornamento dei commenti esistenti
* Eliminazione dei commenti
* Gestione e visualizzazione delle date dei commenti
* Tematizzazione dell'applicazione

## Tecnologie Utilizzate

* Vite-React
* React-Bootstrap
* Axios
* Date-fns
* React-Bootstrap-Icons


## Installazione

## Librerie Utilizzate

Configurazione di un Nuovo Progetto React con Vite
Creare un nuovo progetto React con Vite, segui questi passaggi:

### Crea un nuovo progetto con Vite:


```
npm create vite@latest
```
Scegli un nome per il progetto (ad esempio, books-project), seleziona React e poi JavaScript o TypeScript secondo le tue preferenze.

### Accedi alla cartella del progetto:

```
cd books-project
```
### Installa le dipendenze:

```
npm install
```
### Esegui il server di sviluppo:

```
npm run dev
```

React: Libreria JavaScript per costruire interfacce utente.

```
npm install react react-dom
```

React-Bootstrap: Componente Bootstrap per React.

```
npm install react-bootstrap bootstrap
```

Axios: Client HTTP per fare richieste API.

```
npm install axios
```

Date-fns: Libreria per la manipolazione e la formattazione delle date.

```
npm install date-fns
```

React-Bootstrap-Icons: Icone di Bootstrap per React.

```
npm install react-bootstrap-icons
```

### Prerequisiti

Assicurati di avere installato Node.js e npm (Node Package Manager) sul tuo computer.

### Passaggi per l'installazione

1. **Clona il repository:**

   
   git clone https://github.com/nagcas/Pratica-W2D4-03.06.2024-EPICBOOKS.git


## Struttura del Progetto

```
EPI-BOOKS/
├── public/
│   ├── index.html
│   └── ...
├── books/
│   ├── fantasy.json
│   ├── history.json
│   ├── horror.json
│   ├── romance.json
│   └── scifi.json
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AddComment.jsx
│   │   ├── AllTheBooks.jsx
│   │   ├── BookDetail.jsx
│   │   ├── Browse.jsx
│   │   ├── CommentArea.jsx
│   │   ├── CommentList.jsx
│   │   ├── DeleteComment.jsx
│   │   ├── MyFooter.jsx
│   │   ├── MyNav.jsx
│   │   ├── NotFound.jsx
│   │   ├── SearchBook.jsx
│   │   ├── SingleBook.jsx
│   │   ├── UpdateComment.jsx
│   │   └── Welcome.jsx
│   ├── modules/
│   │   ├── ApiAxios.jsx
│   │   └── Contexts.jsx
│   ├── style/
│   │   ├── AddComment.css
│   │   ├── AllTheBook.css
│   │   ├── BookDetail.css
│   │   ├── CommentList.css
│   │   ├── MyFooter.css
│   │   ├── MyNav.css
│   │   ├── NotFound.css
│   │   └── UpdateComment.css
│   ├── App.css
│   ├── App.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```
