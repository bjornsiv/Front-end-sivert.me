# Front-end sivert.priv.no
Dette er front end-en til domenet sivert.priv.no

## Node.js og NPM 
Før du begynner må du ha installert Node.js og NPM. Node.js blir blant annet brukt til å kjøre JavaScript-kode i serveren, mens NPM er en pakkebehandler som forenkler installasjonen av programvarebiblioteker slik at vi kan benytte oss av disse. NPM brukes både på klient- og serversiden.  

## NPM kommandoer

**0 Install node_modules**
før man kan forhåndsvise siden må man navigere til `/` (altså root mappen) og kjøre kommandoen ‘npm install’. Dette installerer alle nødvendige pakker.

**1.1 npm start** Starter 'webpack dev server' som forhåndsviser siden samt oppdaterer seg når man gjør endringer

**1.2 npm serve** Starter forhåndvisning basert på den sist bygde versjonen

**1.3 npm build** Bygger en utvikling bundle av nettsiden og vil legge seg i public-katalogen. Dersom dette fører til en feilmelding, kan en forsøke å bruke kommandoen ‘npm run-script build’ som et alternativ.

**OppdatereNPM** For å oppdatere alle pakker i NPM, kjør følgende kommandoer etter hverandre:
npx npm-check-updates -u 
npm install 

## Git tutorial

**Git clone:** Bruk ‘git clone %repo%’ for å klone et git-prosjekt til din lokale datamaskin. Erstatt %repo% med en link til GitHub eller GitLab-mappen. 


**Git checkout:** For å opprette en ny branch; skriv kommandoen ‘git checkout -b "my-branch", der "my-branch" er navnet på den nye branchen.

Dersom en ønsker å bytte branch, kan dette gjøres ved å kjøre kommandoen ‘git checkout "my-branch", der "my-branch" er navnet på den branchen du ønsker å bytte til.

Merk at en bør være i riktig branch før en begynner å gjøre endringer. Dette er ikke et absolutt krav, men gjør prosessen mye enklere. 


**Sende endringer til GitHub/GitLab:** Når du er i ønsket branch og er ferdig med å gjøre endringer, kan du sende dette til GitLab eller GitHub. Følgende kommandoer bør kjøres i riktig rekkefølge, og en bør ikke foreta noen endringer i løpet av denne prosessen:


'git pull' oppdaterer den branchen man er i 


'git add .' legger alle filene med endringer i en pakke som skal sendes til Git 


'git stage .' fryser filene som er lagt i pakken


'git commit -m "my-message"' ferdigstiller pakken. Bytt ut "my-message" med en beskrivende kommentar som forklarer hva som er gjort av endringer


'git push' sender den ferdigstilte pakken til GitHub eller GitLab-serveren


Dersom du ønsker å sende opp en ny branch som enda ikke eksisterer i GitHub eller GitLab-repository, er det nødvendig å kjøre kommandoen 'git push -u origin "my-branch", der "my-branch" er navnet på den branchen du nettopp laget.