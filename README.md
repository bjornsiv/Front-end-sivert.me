# Front-end sivert.priv.no
Dette er front end-en til domenet sivert.me

## Node.js og NPM 
Før du begynner må du ha installert Node.js og NPM. Node.js blir blant annet brukt til å kjøre JavaScript-kode i serveren, mens NPM er en pakkebehandler som forenkler installasjonen av programvarebiblioteker slik at vi kan benytte oss av disse. NPM brukes både på klient- og serversiden.  

## NPM kommandoer

**0 Install node_modules**
før man kan forhåndsvise siden må man navigere til `/` (altså root mappen) og kjøre kommandoen ‘npm install’. Dette installerer alle nødvendige pakker.

**1.1 npm start** Starter 'webpack dev server' som forhåndsviser siden samt oppdaterer seg når man gjør endringer

**1.2 npm serve** Starter forhåndvisning basert på den sist bygde versjonen

**1.3 npm build** Bygger en utvikling bundle av nettsiden og vil legge seg i public-katalogen. Dersom dette fører til en feilmelding, kan en forsøke å bruke kommandoen ‘npm run-script build’ som et alternativ.


