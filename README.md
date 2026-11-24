# Alfa i Omega — strona e-booka

Responsywny szablon landing page w HTML, CSS i JavaScript.

## Uruchomienie
Otwórz `index.html` w przeglądarce lub opublikuj cały folder na hostingu statycznym (np. Netlify, Vercel albo własny hosting).

## Co działa w szablonie
- responsywna nawigacja mobilna,
- sekcje: prezentacja, autor, spis treści, fragment, opinie, cena, FAQ, newsletter, blog i kontakt,
- okno zakupu z adresem wojtczakbart@outlook.com i przyciskiem otwierającym wiadomość e-mail,
- demonstracyjny formularz newslettera.

## Przed publikacją / sprzedażą
1. Uzupełnij prawdziwe dane autora, treść e-booka, rozdziały, fragment, cenę, opinie i dane kontaktowe.
2. Podmień odnośniki social media, politykę prywatności i regulamin.
3. Podłącz operatora płatności (np. Stripe, PayU lub Przelewy24) przez backend/checkout. Nie umieszczaj kluczy API w kodzie przeglądarki.
4. Skonfiguruj backend zamówień, potwierdzenia e-mail i bezpieczne linki do pobrania pliku po potwierdzeniu płatności.
5. Podłącz formularz newslettera do wybranej platformy mailingowej i wdroż prawidłowe zgody oraz politykę prywatności.
6. Dodaj rzeczywiste wpisy blogowe, metadane SEO, favicon i analitykę zgodnie z polityką prywatności.

Szablon nie przetwarza prawdziwych płatności ani nie zapisuje adresów newslettera — te elementy wymagają integracji z usługami zewnętrznymi.


## Sposób zakupu
Przycisk „Kup e-book” otwiera okno z adresem wojtczakbart@outlook.com. Klient może kliknąć „Napisz wiadomość”, aby otworzyć program pocztowy z przygotowanym tematem wiadomości.
