# Front-end sivert.me
Dette er front end-en til domenet sivert.me

## Node.js og NPM 
Før du begynner må du ha installert Node.js og NPM. Node.js blir blant annet brukt til å kjøre JavaScript-kode i serveren, mens NPM er en pakkebehandler som forenkler installasjonen av programvarebiblioteker slik at vi kan benytte oss av disse. NPM brukes både på klient- og serversiden.  

## NPM kommandoer

**npm start** Starter 'webpack dev server' som forhåndsviser siden samt oppdaterer seg når man gjør endringer

**npm serve** Starter forhåndvisning basert på den sist bygde versjonen

**2.1.**
Kommandoen ‘npm build’ bygger en utvikling bundle av nettsiden og vil legge seg i public-katalogen. Dersom dette fører til en feilmelding, kan en forsøke å bruke kommandoen ‘npm run-script build’ som et alternativ.

**2.2** 
Det finnes og en 'npm build-prod' kommando som bygger en produksjonsklar bundle av nettsiden. Denne vil legge seg i './client/public' mappen. 

**3.** For å kjøre serveren, start med å navigere til `./server` og kjør kommandoen ‘npm install’. Dette installerer alle nødvendige pakker. Deretter kjøres ‘npm start’ for å starte serveren lokalt. Denne tar utgangspunkt i bundle i `./client/public`. 
