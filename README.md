# Fincon Reply Frontend Academy 2026 — CSS: Flexbox, Grid & SCSS

## Cel

To repo zawiera trzy ćwiczenia z CSS:

1. Flexbox — siatka kart z przyklejonym przyciskiem
2. CSS Grid — klasyczny layout strony
3. SCSS — refaktoryzacja CSS z użyciem preprocesora

## Instalacja

```bash
npm install
npx playwright install chromium
```

Przed otwarciem ćwiczenia 3 w przeglądarce skompiluj SCSS:

```bash
npm run build:scss
```

Uruchomienie testów:

```bash
npm test
```

## Zadania

### Ćwiczenie 1

Plik:
```
task1/style.css
```

Zaimplementuj style dla siatki kart kursów.
Style powinny:

1. Układać karty w rzędzie z zawijaniem do kolejnych linii (`flex-wrap`)
2. Sprawić, że wszystkie karty w wierszu mają tę samą wysokość
3. Trzymać przycisk „Zapisz się" zawsze na dole karty, niezależnie od długości tekstu (`flex-grow`)

Wskazówki:
- `display: flex` i `flex-wrap: wrap` na `.card-grid`
- `display: flex; flex-direction: column` na `.card`
- `flex-grow: 1` (lub skrót `flex: 1`) na `.card__body`

### Oddanie zadania

Po rozwiązaniu ćwiczenia:
```
git add .
git commit -m "Solve CSS exercises"
git push
```

Testy uruchomią się automatycznie w GitHub Classroom.

---

### Ćwiczenie 2

Plik:
```
task2/style.css
```

Zaimplementuj klasyczny layout strony przy użyciu CSS Grid:

```
┌───────────────────────┐
│        header         │
├─────────┬─────────────┤
│ sidebar │    main     │
├─────────┴─────────────┤
│        footer         │
└───────────────────────┘
```

Style powinny:

1. Używać `display: grid` na kontenerze `.layout`
2. Definiować 2 kolumny: sidebar o stałej szerokości i main wypełniający resztę (`1fr`)
3. Opisywać układ przy użyciu `grid-template-areas`
4. Przypisywać każdy element do odpowiedniego obszaru przez `grid-area`
5. Dodawać odstęp między obszarami (`gap`)

Wskazówki:
- `grid-template-columns: 250px 1fr`
- `grid-template-areas` przyjmuje ciągi znaków, np. `"header header"` dla pełnej szerokości
- Każdy element dostaje `grid-area: <nazwa>` odpowiadającą nazwie z `grid-template-areas`

### Oddanie zadania

Po rozwiązaniu ćwiczenia:
```
git add .
git commit -m "Solve CSS exercises"
git push
```

Podobnie jak poprzednim razem, testy uruchomią się automatycznie w GitHub Classroom.

---

### Ćwiczenie 3 (z gwiazdką)

Plik:
```
task3/style.scss
```

Przepisz gotowy CSS (zawarty jako komentarz w pliku) na SCSS.
Przepisany kod powinien korzystać z:

1. Zmiennych SCSS (`$primary-color`, `$font-size-base`, `$border-radius` itp.) — zastąp nimi powtarzające się wartości
2. Zagnieżdżania selektorów — przepisz selektory BEM z użyciem `&`, np. `.card { &__header { ... } }`
3. Mixinu `flex-center` — zdefiniuj go przez `@mixin` i użyj przez `@include` co najmniej raz

Przykład zmiennych i zagnieżdżania:
```scss
$primary-color: #4f46e5;
$border-radius: 6px;

.card {
  border-radius: $border-radius;

  &__header {
    background: $primary-color;
  }

  &__body {
    padding: 16px;
  }
}
```

Przykład mixinu:
```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__footer {
  @include flex-center;
}
```

Kompilacja SCSS → CSS odbywa się automatycznie przed testami (`npm test`).
Możesz też skompilować ręcznie: `npm run build:scss`.

### Oddanie zadania

Po rozwiązaniu ćwiczenia:
```
git add .
git commit -m "Solve CSS exercises"
git push
```

Podobnie jak poprzednim razem, testy uruchomią się automatycznie w GitHub Classroom.

---

Powodzenia 💪