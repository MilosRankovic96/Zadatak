Link projekta: https://github.com/MilosRankovic96/Zadatak.git

Pokretanje aplikacije: git clone, npm install, npm start

Sta nisam stigao da uradim: Stilizovanje, dizajn, responsive layout, light-dark theme, Material UI koriscen minimalno(samo za buttone)

Opis:
Uradjena sva funkcionalnost, dataIsValid sam koristio zbog ponovnog rendera sa setovanjem na true ili false i ako u requirements-u stoji ovo "(Keep in mind that if you are using jsonplaceholder API you will not be able to actually create/delete/update user and you should only check if request is successful or not)", sto sada i nema svrhe, ali sam to uradio u slucaju da je situacija drugacija kako bi se desio ponovni render i ucitalo novo stanje nakon primenjivanja neke metode(post, delete, put). U User komponenti sam primenio ovaj uslov (user!==undefined && (pa ovde sadrzaj)) kako bih resio problem koji sam imao nakon refresovanja User stranice, jer nakon refresh-a nisam imao propse.

