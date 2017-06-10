# Pharmacies Manager

Aplikacja wspomagająca obsługę aptek należących do wspólnej sieci.

## Opis modułów
Aplikacja składa się z dwóch modułów: serwerowego i klienckiego. Kod źródłowy modułu klienckiego
znajduję się w katalogu `web-ui`, natomiast serwerowego w `src`.

## Instrukcja uruchomienia projektu
### Lokalnie za pomocą Gradle'a
`./gradlew bootRun -Dspring.profiles.active=dev`
Kod interfejsu webowego zostanie dołączony do folderu ``build``. Aplikacja dostępna pod ``http://localhost:8090``

### Z IntelliJ IDEA w trybie developerskim
Projekt importujemy wskazując ``build.gradle`` z głównego modułu i odznaczamy opcję ``Create separate module per source set.``
Do zbudowania i uruchomienia projektu w trybie developerskim potrzebujemy dwóch konfiguracji:
1. Backend: Task ``Application`` lub ``Spring Boot`` (tylko w wersji Ultimate) dla klasy: ``com.pik01.pharmaciesmanager.PharmaciesManagerApplication``
z dodanym aktywnym profilem ``dev`` (wtedy wczytają się ``application-dev.properties``).
2. Frontend: `./run-web-ui.sh`

Aplikacja dostępna pod ``http://localhost:4200`` z opcją _live reload_.

### Build produkcyjny
``./gradlew build``
Produkcyjny JAR dostępny w ``builds/libs``