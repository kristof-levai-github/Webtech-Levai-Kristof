const ANIMAL_INFO = {
    dog: {
        name: 'Kutya',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mudi_portrait.jpg',
        descriptionHTML: `
        <p>A <strong>kutya</strong> vagy <strong>eb</strong> (Canis lupus familiaris) ujjon járó emlős ragadozó állat, a szürke farkas (Canis lupus) egy mára kihalt alfajának háziasított formája. Valószínűleg a legrégebben háziasított állatfaj. Az egyetlen olyan emlős állatfaj, amely tudományos nevében megkapta a familiaris, azaz a családhoz tartozó jelzőt. A kutyákat szokás a társállatok sorában emlegetni.</p>
        <p>Ezenkívül tágabb értelemben kutyának neveznek a kutyafélék (Canidae) családján belül a valódi kutyaformák (Canini) nemzetségéhez tartozó több más fajt is: ilyenek például a kisfülű kutya (Atelocynus microtis), az ázsiai vadkutya (Cuon alpinus), a nyestkutya (Nyctereutes procyonoides), az afrikai vadkutya vagy hiénakutya (Lycaon pictus) és az őserdei kutya (Speothos venaticus). A háziasított kutyát mindezektől a <strong>házikutya</strong> elnevezéssel különböztetik meg.</p>
        <p>A kutyák munkatársként vagy munkaerőként (például: őrkutyák, vadászkutyák, szánhúzókutyák, vakvezetőkutyák), terápiás állatként, társállatként egyaránt szolgálják az embereket. Kelet-Ázsiában (vagy éhínség idején a világ többi részén is) emberi táplálék is lehet belőlük, ilyen célra tenyésztett fajta például a csau csau.</p>
    `,
        funFacts: [
            'A kutyák orrlenyomata ugyanolyan egyedi, mint az emberi ujjlenyomat, így akár azonosításra is használható.',
            'Egy kutya akár négyszer távolabbról is meghallhat egy hangot, mint egy ember, és több mint 40 000 Hz-es frekvenciákat is érzékelhet.',
            'A kutyák akár 100 000-szer érzékenyebben szagolnak, mint az emberek. Ezért is képesek kiszagolni betegségeket, például a rákot vagy a cukorszint változásait.',
            'Míg az emberek a testük nagy részén izzadnak, a kutyák csak a mancsukon lévő párnákon keresztül adják le az izzadságot.',
            'A kutatások szerint egy átlagos kutya 250 szót és kézmozdulatot is megérthet, ami egy kétéves gyermek szintjének felel meg.'
        ]
    },
    cat: {
        name: 'Macska',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cat_hygiene.jpg/500px-Cat_hygiene.jpg',
        descriptionHTML: `
        <p>A <strong>macska</strong>, más néven <strong>házi macska</strong> (Felis silvestris catus) kisebb termetű húsevő emlős, ami a ragadozók rendjén belül a macskafélék (Felidae) családjának Felis neméhez és vadmacska (Felis silvestris) fajához tartozik. A vadmacska alfaja. Ügyes ragadozó, több mint 1000 faj tekinthető a zsákmányának. Emellett meglehetősen intelligens, beidomítható egyszerű parancsok végrehajtására vagy szerkezetek működtetésére – illetve képes önállóan is kisebb feladatok betanulására.</p>
        <p>Körülbelül 10 000 évvel ezelőtt kezdett az ember társaságában élni, háziasításának első ábrázolása mintegy 4000 éve Egyiptomban történt.</p>
        <p>A macskának számos fajtája és színváltozata létezik. Csupasz és farok nélküli változatait is kitenyésztették. A macskák több mint százféle hangjel és testbeszéd segítségével kommunikálnak, mint például nyávogás („miaú”), dorombolás, bújás, fújás, morgás, perregés. A lovakhoz és más háziállatokhoz hasonlóan a macskák is képesek vadon élve fennmaradni. Az önállóan élő macskák gyakran kisebb kolóniákat alkotnak. Az állatvédők beszámolói szerint azonban hosszú távon csak igen kevés példány képes gazdátlanul életben maradni, többségüket elpusztítják a járművek, a ragadozók, az éhség, az időjárás viszontagságai és a betegségek.</p>
    `,
        funFacts: [
            'A macskák napi 12-16 órát is alhatnak.',
            'A macskák több mint 100 különböző hangot képesek kiadni, míg a kutyák körülbelül 10-et. Az emberekkel való kommunikációjuk során gyakran használják a dorombolást és a nyávogást.',
            'A macskák jobb látást biztosító retinával rendelkeznek, ami lehetővé teszi számukra, hogy gyenge fényviszonyok mellett is jól lássanak. Így könnyedén vadászhatnak szürkületben vagy hajnali órákban.',
            'A macskák fülében 32 izom van, amelyek lehetővé teszik számukra, hogy 180 fokos szögben mozgassák a fülüket, és bárhonnan hallják a hangokat.',
            'A házi macskák szoros kapcsolatban élnek az emberekkel, de megőrizték vad ősük vadászösztöneit, így sokukat nem lehet teljesen háziasítani.'
        ]
    }
};