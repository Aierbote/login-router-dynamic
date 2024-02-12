# Exercise Assignment

<!-- author: Alberto Cangialosi -->

[//]: # "exercise by Riccardo Genova"

#### Obiettivo

Lo scopo di questo esercizio è creare un'applicazione utilizzando Create React App, TypeScript, React Router e Context API. L'applicazione consentirà all'utente di autenticarsi tramite un semplice bottone. Una volta autenticato, l'utente potrà visualizzare una lista di post e, cliccando su un post, navigare verso una pagina di dettaglio dove visualizzare il titolo, il corpo del post e tutti i suoi commenti.

#### Requisiti

1. **Configurazione Iniziale**

   - Utilizza `create-react-app` con il template TypeScript per inizializzare il progetto.
   - Installa e configura `react-router-dom` per la gestione delle rotte.

2. **Autenticazione**

   - Implementa un semplice meccanismo di autenticazione che modifichi lo stato di autenticazione dell'utente (es: un bottone "Login").
   - Utilizza Context API per gestire lo stato di autenticazione e renderlo accessibile in tutta l'applicazione.
   - Impedisci l'accesso alla pagina di login (`/login`) se l'utente è già autenticato.

3. **Routing**

   - Configura React Router con le seguenti rotte:
     - `/login` per la pagina di login.
     - `/` per la lista dei post (visibile solo agli utenti autenticati).
     - `/:idPost` per i dettagli del post (visibile solo agli utenti autenticati).

4. **Visualizzazione dei Post**

   - Utilizza l'API pubblica `jsonplaceholder` per ottenere i post e i commenti.
   - Nella pagina principale (`/`), mostra la lista dei post.
   - Quando un utente clicca su un post, naviga alla pagina di dettaglio del post (`/:idPost`) mostrando titolo, corpo e commenti relativi a quel post.

5. **Persistenza**

   - (Opzionale) Fai persistere lo stato di autenticazione dell'utente utilizzando `localStorage`.

6. **Note Aggiuntive**
   - Non è necessaria una UI elaborata, ma l'applicazione dovrebbe essere funzionale.
   - Assicurati di gestire eventuali errori nell'ottenimento dei dati dall'API.

#### Criteri di Valutazione

- **Funzionalità**: L'applicazione soddisfa tutti i requisiti funzionali descritti sopra.
- **Codice**: Il codice è ben organizzato, seguendo le best practices di React e TypeScript.
- **Utilizzo di Context API**: Dimostrazione efficace nell'uso di Context API per gestire lo stato globale dell'applicazione.
- **Routing**: Implementazione corretta e efficiente del routing con `react-router-dom`.
- **Persistenza**: (Opzionale) Implementazione efficace della persistenza dello stato di autenticazione.

#### Consegna

Carica il codice sorgente su una piattaforma di hosting di codice (come GitHub) e fornisci il link per la revisione. Assicurati che il README del tuo progetto includa istruzioni su come eseguire l'applicazione localmente.
