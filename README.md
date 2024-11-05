## 1. Vytvoření větve develop z main

Začneme vytvořením větve develop, která bude hlavní pracovní větví pro vývoj.

### Přepneme se na hlavní větev main

`git checkout main`

### Aktualizujeme větev main na poslední verzi z dálkového úložiště

`git pull origin main`

### Vytvoříme novou větev develop z main

`git checkout -b develop`

### Nahrajeme novou větev develop do dálkového úložiště

`git push origin develop`

## 2. Vytvoření nové feature-větve pro úkol

Nyní budeme pracovat na nové funkci a pro tento účel vytvoříme samostatnou větev. To pomáhá předejít konfliktům, protože každý úkol je izolovaný.

### Ujistíme se, že jsme na větvi develop a že je aktuální

`git checkout develop`
`git pull origin develop`

### Vytvoříme novou větev pro úkol (např. feature/nová-funkce) z develop

`git checkout -b feature/nová-funkce`

<!-- Doporučené přiklady, jak se nazyvat větev pro úkol:  -->
<!-- `git checkout -b feature/FE-funkcionalita1` -->
<!-- `git checkout -b feature/BE-funkcionalita2` -->

## 3. Provedení změn a uložení commitů

Nyní pracujeme ve větvi feature/nová-funkce. Provedeme zde změny v kódu, uložíme je pomocí commitů a připravíme k nahrání na GitHub.

### Provedeme změny v souborech projektu, poté je přidáme do indexu

`git add změněné_soubory`

### Uložíme změny vytvořením commitu

`git commit -m "Přidává novou funkci: krátký popis změn"`

## 4. Nahrání změn na GitHub a vytvoření pull requestu

Jakmile je práce na úkolu dokončena, nahrajeme změny na GitHub a vytvoříme pull request ke kontrole.

### Nahrajeme větev feature/nová-funkce na dálkový repozitář

`git push origin feature/nová-funkce`

## 5. Po nahrání větve přejděte na GitHub:

Otevřete svůj repozitář.
GitHub nabídne možnost [Create a Pull Request] pro nedávno nahranou větev.
Ujistěte se, že vytváříte pull request pro spojení z feature/nová-funkce do develop.
Vyplňte popis pull requestu a odešlete ke kontrole.

## 6. Konečné spojení pull requestu

Jakmile recenzenti schválí změny, spojte pull request s develop. To lze provést na GitHubu:

Klikněte na Merge Pull Request.
Odstraňte dočasnou větev feature/nová-funkce, aby se úložiště nezahlcovalo, kliknutím na Delete branch.

## 7. Synchronizace lokální větve develop

Po úspěšném spojení pull requestu aktualizujte svou lokální větev develop, aby obsahovala všechny poslední změny.

### Přepneme se na develop

`git checkout develop`

### Stáhneme poslední změny z dálkové větve develop

`git pull origin develop`

<!-- Kompletní příklad příkazů -->

## 1. Vytvoříme větev develop a nahrajeme ji na GitHub:

git checkout main
git pull origin main
git checkout -b develop
git push origin develop

## 2. Vytvoříme větev pro novou funkci a přepneme se na ni:

git checkout develop
git pull origin develop
git checkout -b feature/nová-funkce

## 3. Provedeme změny, přidáme do indexu a uložíme commity:

git add změněné_soubory
git commit -m "Přidává novou funkci: krátký popis změn"

## 4. Nahrajeme větev na GitHub a vytvoříme pull request:

git push origin feature/nová-funkce

## 5. Synchronizujeme lokální větev develop po spojení pull requestu:

git checkout develop
git pull origin develop
