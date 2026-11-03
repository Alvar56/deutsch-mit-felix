import{b as G,r as m,g as Y,ar as T,k as Q,j as e,p as I,t as b,aT as $,a2 as A,s as Z,at as X,x as _}from"./index-Cs7j2bLS.js";import{G as ee}from"./GameModePill-DzSo5swM.js";import{R as ne}from"./Reloj-b1H7kbJc.js";import{g as ie,h as re}from"./index-HokBP-Yg.js";import{d as ae}from"./progress-CU9I8_oV.js";import{i as te}from"./stars-C_YReScE.js";import{S as se}from"./StarButton-BysFl7wI.js";const he=["es","en","uk","tr","bks","ar","zh"],de={"Nomen:\ngroß oder klein?":[`Sustantivos:
¿mayúscula o minúscula?`,`Nouns:
capital or small letter?`,`Іменники:
з великої чи з малої?`,`İsimler:
büyük harfle mi, küçük harfle mi?`,`Imenice:
velikim ili malim slovom?`,`الأسماء:
بحرف كبير أم صغير؟`,`名词：
大写还是小写？`],"du oder Sie?":["¿du o Sie?","du or Sie?","du чи Sie?","du mu, Sie mi?","du ili Sie?","du أم Sie؟","用 du 还是 Sie？"],"Zahlen ab 21:\n21 · 35 · 99":[`Números a partir de 21:
21 · 35 · 99`,`Numbers from 21:
21 · 35 · 99`,`Числа від 21:
21 · 35 · 99`,`21'den itibaren sayılar:
21 · 35 · 99`,`Brojevi od 21:
21 · 35 · 99`,`الأعداد من 21:
21 · 35 · 99`,`21 以上的数字：
21 · 35 · 99`],"ei oder ie?":["¿ei o ie?","ei or ie?","ei чи ie?","ei mi, ie mi?","ei ili ie?","ei أم ie؟","ei 还是 ie？"],"der, die, das:\nund im Plural?":[`der, die, das:
¿y en plural?`,`der, die, das:
and in the plural?`,`der, die, das:
а в множині?`,`der, die, das:
çoğulda ne olur?`,`der, die, das:
a u množini?`,`der، die، das:
وفي الجمع؟`,`der、die、das：
复数呢？`],"Verbendungen:\nwohnen":[`Terminaciones del verbo:
wohnen`,`Verb endings:
wohnen`,`Закінчення дієслова:
wohnen`,`Fiil ekleri:
wohnen`,`Nastavci glagola:
wohnen`,`نهايات الفعل:
wohnen`,`动词词尾：
wohnen`],"Adjektiv nach sein:\nmit Endung?":[`Adjetivo después de sein:
¿lleva terminación?`,`Adjective after sein:
with an ending?`,`Прикметник після sein:
із закінченням?`,`sein'dan sonra sıfat:
ek alır mı?`,`Pridjev iza sein:
ima li nastavak?`,`الصفة بعد sein:
هل لها نهاية؟`,`sein 后面的形容词：
要加词尾吗？`],"Wo steht das Verb?\nAussage · W-Frage · Ja/Nein-Frage":[`¿Dónde va el verbo?
Aussage · W-Frage · Ja/Nein-Frage`,`Where does the verb go?
Aussage · W-Frage · Ja/Nein-Frage`,`Де стоїть дієслово?
Aussage · W-Frage · Ja/Nein-Frage`,`Fiil nerede durur?
Aussage · W-Frage · Ja/Nein-Frage`,`Gdje stoji glagol?
Aussage · W-Frage · Ja/Nein-Frage`,`أين يقع الفعل؟
Aussage · W-Frage · Ja/Nein-Frage`,`动词放在哪里？
Aussage · W-Frage · Ja/Nein-Frage`],"Wortakzent:\nWo liegt er meistens?":[`Acento de la palabra:
¿dónde suele caer?`,`Word stress:
where does it usually fall?`,`Наголос у слові:
де він зазвичай?`,`Kelime vurgusu:
genelde nerede?`,`Naglasak riječi:
gdje je obično?`,`نبرة الكلمة:
أين تقع عادةً؟`,`单词重音：
通常在哪里？`],"Vokal lang oder kurz?\nBoot · Name · Mutter · Stadt":[`¿Vocal larga o corta?
Boot · Name · Mutter · Stadt`,`Long or short vowel?
Boot · Name · Mutter · Stadt`,`Голосний довгий чи короткий?
Boot · Name · Mutter · Stadt`,`Ünlü uzun mu, kısa mı?
Boot · Name · Mutter · Stadt`,`Samoglasnik dug ili kratak?
Boot · Name · Mutter · Stadt`,`حرف العلة طويل أم قصير؟
Boot · Name · Mutter · Stadt`,`元音长还是短？
Boot · Name · Mutter · Stadt`],"b, d, g am Wortende:\nHund · Tag · halb":[`b, d, g al final de la palabra:
Hund · Tag · halb`,`b, d, g at the end of a word:
Hund · Tag · halb`,`b, d, g у кінці слова:
Hund · Tag · halb`,`Kelime sonunda b, d, g:
Hund · Tag · halb`,`b, d, g na kraju riječi:
Hund · Tag · halb`,`b وd وg في آخر الكلمة:
Hund · Tag · halb`,`词尾的 b、d、g：
Hund · Tag · halb`],"Satzmelodie:\nAussage · Ja/Nein-Frage · W-Frage":[`Entonación:
Aussage · Ja/Nein-Frage · W-Frage`,`Intonation:
Aussage · Ja/Nein-Frage · W-Frage`,`Інтонація:
Aussage · Ja/Nein-Frage · W-Frage`,`Tonlama:
Aussage · Ja/Nein-Frage · W-Frage`,`Intonacija:
Aussage · Ja/Nein-Frage · W-Frage`,`التنغيم:
Aussage · Ja/Nein-Frage · W-Frage`,`语调：
Aussage · Ja/Nein-Frage · W-Frage`],"aus oder in?":["¿aus o in?","aus or in?","aus чи in?","aus mu, in mi?","aus ili in?","aus أم in؟","aus 还是 in？"],Personalpronomen:["Pronombres personales","Personal pronouns","Особові займенники","Şahıs zamirleri","Lične zamjenice","الضمائر الشخصية","人称代词"],"sein im Präsens":["sein en presente","sein in the present tense","sein у теперішньому часі","sein şimdiki zamanda","sein u prezentu","sein في المضارع","sein 的现在时"],"heißen:\ndu … · er …":[`heißen:
du … · er …`,`heißen:
du … · er …`,`heißen:
du … · er …`,`heißen:
du … · er …`,`heißen:
du … · er …`,`heißen:
du … · er …`,`heißen：
du … · er …`],"W-Frage:\nWo steht das Verb?":[`W-Frage:
¿dónde va el verbo?`,`W-Frage:
where does the verb go?`,`W-Frage:
де стоїть дієслово?`,`W-Frage:
fiil nerede durur?`,`W-Frage:
gdje stoji glagol?`,`W-Frage:
أين يقع الفعل؟`,`W-Frage：
动词放在哪里？`],"wo · woher · wohin":["wo · woher · wohin","wo · woher · wohin","wo · woher · wohin","wo · woher · wohin","wo · woher · wohin","wo · woher · wohin","wo · woher · wohin"],"ch:\nich · Buch · sechs":[`ch:
ich · Buch · sechs`,`ch:
ich · Buch · sechs`,`ch:
ich · Buch · sechs`,`ch:
ich · Buch · sechs`,`ch:
ich · Buch · sechs`,`ch:
ich · Buch · sechs`,`ch：
ich · Buch · sechs`],"Länder mit Artikel":["Países con artículo","Countries with an article","Країни з артиклем","Artikelli ülkeler","Zemlje s članom","دول مع أداة التعريف","带冠词的国家"],"Land · Sprache · Person:\nSpanien":[`País · idioma · persona:
Spanien`,`Country · language · person:
Spanien`,`Країна · мова · людина:
Spanien`,`Ülke · dil · kişi:
Spanien`,`Zemlja · jezik · osoba:
Spanien`,`البلد · اللغة · الشخص:
Spanien`,`国家 · 语言 · 人：
Spanien`],"wir und ihr:\nwelche Endung?":[`wir y ihr:
¿qué terminación?`,`wir and ihr:
which ending?`,`wir та ihr:
яке закінчення?`,`wir ve ihr:
hangi ek?`,`wir i ihr:
koji nastavak?`,`wir وihr:
أي نهاية؟`,`wir 和 ihr：
用什么词尾？`],"Ja/Nein-Frage:\nWo steht das Verb?":[`Ja/Nein-Frage:
¿dónde va el verbo?`,`Ja/Nein-Frage:
where does the verb go?`,`Ja/Nein-Frage:
де стоїть дієслово?`,`Ja/Nein-Frage:
fiil nerede durur?`,`Ja/Nein-Frage:
gdje stoji glagol?`,`Ja/Nein-Frage:
أين يقع الفعل؟`,`Ja/Nein-Frage：
动词放在哪里？`],"sprechen:\ndu … · er …":[`sprechen:
du … · er …`,`sprechen:
du … · er …`,`sprechen:
du … · er …`,`sprechen:
du … · er …`,`sprechen:
du … · er …`,`sprechen:
du … · er …`,`sprechen：
du … · er …`],"haben im Präsens":["haben en presente","haben in the present tense","haben у теперішньому часі","haben şimdiki zamanda","haben u prezentu","haben في المضارع","haben 的现在时"],"sch · sp · st":["sch · sp · st","sch · sp · st","sch · sp · st","sch · sp · st","sch · sp · st","sch · sp · st","sch · sp · st"],"Die Adresse:\nStraße und Stock":[`La dirección:
calle y piso`,`The address:
street and floor`,`Адреса:
вулиця і поверх`,`Adres:
sokak ve kat`,`Adresa:
ulica i sprat`,`العنوان:
الشارع والطابق`,`地址：
街道和楼层`],"Ordinalzahlen:\n1. · 3. · 7. · 20.":[`Números ordinales:
1. · 3. · 7. · 20.`,`Ordinal numbers:
1. · 3. · 7. · 20.`,`Порядкові числівники:
1. · 3. · 7. · 20.`,`Sıra sayıları:
1. · 3. · 7. · 20.`,`Redni brojevi:
1. · 3. · 7. · 20.`,`الأعداد الترتيبية:
1. · 3. · 7. · 20.`,`序数词：
1. · 3. · 7. · 20.`],"Höflich bitten":["Pedir algo con educación","Asking politely","Ввічливо попросити","Kibarca rica etmek","Ljubazno zamoliti","الطلب بأدب","礼貌地请求"],"-e und -en am Wortende":["-e y -en al final de la palabra","-e and -en at the end of a word","-e та -en у кінці слова","Kelime sonunda -e ve -en","-e i -en na kraju riječi","-e و-en في آخر الكلمة","词尾的 -e 和 -en"],"haben und sein:\nPräsens und Präteritum":[`haben y sein:
presente y Präteritum`,`haben and sein:
present and Präteritum`,`haben і sein:
теперішній час і Präteritum`,`haben ve sein:
şimdiki zaman ve Präteritum`,`haben i sein:
prezent i Präteritum`,`haben وsein:
المضارع والـPräteritum`,`haben 和 sein：
现在时和 Präteritum`],"der, die oder das?\n-ung · -heit · -keit · -ion":[`¿der, die o das?
-ung · -heit · -keit · -ion`,`der, die or das?
-ung · -heit · -keit · -ion`,`der, die чи das?
-ung · -heit · -keit · -ion`,`der mi, die mi, das mı?
-ung · -heit · -keit · -ion`,`der, die ili das?
-ung · -heit · -keit · -ion`,`der أم die أم das؟
-ung · -heit · -keit · -ion`,`der、die 还是 das？
-ung · -heit · -keit · -ion`],"der, die oder das?\n-chen · -lein":[`¿der, die o das?
-chen · -lein`,`der, die or das?
-chen · -lein`,`der, die чи das?
-chen · -lein`,`der mi, die mi, das mı?
-chen · -lein`,`der, die ili das?
-chen · -lein`,`der أم die أم das؟
-chen · -lein`,`der、die 还是 das？
-chen · -lein`],"der, die oder das?\nTage · Monate · Jahreszeiten":[`¿der, die o das?
días · meses · estaciones`,`der, die or das?
days · months · seasons`,`der, die чи das?
дні · місяці · пори року`,`der mi, die mi, das mı?
günler · aylar · mevsimler`,`der, die ili das?
dani · mjeseci · godišnja doba`,`der أم die أم das؟
الأيام · الشهور · الفصول`,`der、die 还是 das？
星期 · 月份 · 季节`],"Pronomen für Sachen:\nder Schlüssel · die Brille · das Handy":[`Pronombres para cosas:
der Schlüssel · die Brille · das Handy`,`Pronouns for things:
der Schlüssel · die Brille · das Handy`,`Займенники для речей:
der Schlüssel · die Brille · das Handy`,`Eşyalar için zamirler:
der Schlüssel · die Brille · das Handy`,`Zamjenice za stvari:
der Schlüssel · die Brille · das Handy`,`ضمائر للأشياء:
der Schlüssel · die Brille · das Handy`,`指物的代词：
der Schlüssel · die Brille · das Handy`],"arbeiten:\ndu … · er …":[`arbeiten:
du … · er …`,`arbeiten:
du … · er …`,`arbeiten:
du … · er …`,`arbeiten:
du … · er …`,`arbeiten:
du … · er …`,`arbeiten:
du … · er …`,`arbeiten：
du … · er …`],"Beruf, weiblich:\nLehrer · Arzt · Koch":[`Profesión en femenino:
Lehrer · Arzt · Koch`,`Job, female form:
Lehrer · Arzt · Koch`,`Професія в жіночому роді:
Lehrer · Arzt · Koch`,`Meslek, kadın hâli:
Lehrer · Arzt · Koch`,`Zanimanje u ženskom rodu:
Lehrer · Arzt · Koch`,`المهنة بصيغة المؤنث:
Lehrer · Arzt · Koch`,`职业的女性形式：
Lehrer · Arzt · Koch`],"als + Beruf:\nmit Artikel?":[`als + profesión:
¿con artículo?`,`als + job:
with an article?`,`als + професія:
з артиклем?`,`als + meslek:
artikelli mi?`,`als + zanimanje:
sa članom?`,`als + المهنة:
مع أداة التعريف؟`,`als + 职业：
要加冠词吗？`],"Wo arbeitest du?\nbei …":[`¿Dónde trabajas?
bei …`,`Where do you work?
bei …`,`Де ти працюєш?
bei …`,`Nerede çalışıyorsun?
bei …`,`Gdje radiš?
bei …`,`أين تعمل؟
bei …`,`你在哪里工作？
bei …`],"nicht:\nWo steht es?":[`nicht:
¿dónde va?`,`nicht:
where does it go?`,`nicht:
де воно стоїть?`,`nicht:
nerede durur?`,`nicht:
gdje stoji?`,`nicht:
أين تقع؟`,`nicht：
放在哪里？`],"z · s · ß":["z · s · ß","z · s · ß","z · s · ß","z · s · ß","z · s · ß","z · s · ß","z · s · ß"],"Wessen Bruder?\nMaria + Bruder":[`¿El hermano de quién?
Maria + Bruder`,`Whose brother?
Maria + Bruder`,`Чий брат?
Maria + Bruder`,`Kimin kardeşi?
Maria + Bruder`,`Čiji brat?
Maria + Bruder`,`أخو مَن؟
Maria + Bruder`,`谁的兄弟？
Maria + Bruder`],"Possessivartikel:\nich · du · er · sie":[`Posesivos:
ich · du · er · sie`,`Possessive articles:
ich · du · er · sie`,`Присвійні артиклі:
ich · du · er · sie`,`İyelik artikelleri:
ich · du · er · sie`,`Posvojni članovi:
ich · du · er · sie`,`أدوات الملكية:
ich · du · er · sie`,`物主冠词：
ich · du · er · sie`],"Possessivartikel:\nwir · ihr · sie / Sie":[`Posesivos:
wir · ihr · sie / Sie`,`Possessive articles:
wir · ihr · sie / Sie`,`Присвійні артиклі:
wir · ihr · sie / Sie`,`İyelik artikelleri:
wir · ihr · sie / Sie`,`Posvojni članovi:
wir · ihr · sie / Sie`,`أدوات الملكية:
wir · ihr · sie / Sie`,`物主冠词：
wir · ihr · sie / Sie`],"ein oder eine?":["¿ein o eine?","ein or eine?","ein чи eine?","ein mi, eine mi?","ein ili eine?","ein أم eine؟","ein 还是 eine？"],"kein oder nicht?":["¿kein o nicht?","kein or nicht?","kein чи nicht?","kein mi, nicht mi?","kein ili nicht?","kein أم nicht؟","kein 还是 nicht？"],"und · oder · aber · denn · sondern:\nWo steht das Verb?":[`und · oder · aber · denn · sondern:
¿dónde va el verbo?`,`und · oder · aber · denn · sondern:
where does the verb go?`,`und · oder · aber · denn · sondern:
де стоїть дієслово?`,`und · oder · aber · denn · sondern:
fiil nerede durur?`,`und · oder · aber · denn · sondern:
gdje stoji glagol?`,`und · oder · aber · denn · sondern:
أين يقع الفعل؟`,`und · oder · aber · denn · sondern：
动词放在哪里？`],"ä · ö · ü":["ä · ö · ü","ä · ö · ü","ä · ö · ü","ä · ö · ü","ä · ö · ü","ä · ö · ü","ä · ö · ü"],"Wessen …? im Alltag":["¿De quién es …? en el día a día","Whose …? in everyday life","Чий …? у повсякденні","Günlük hayatta: Kimin …?","Čiji …? u svakodnevici","لمن …؟ في الحياة اليومية","日常生活中的“谁的……？”"],"Das Alter:\nsein oder haben?":[`La edad:
¿sein o haben?`,`Age:
sein or haben?`,`Вік:
sein чи haben?`,`Yaş:
sein mi, haben mi?`,`Godine:
sein ili haben?`,`العمر:
sein أم haben؟`,`年龄：
用 sein 还是 haben？`],"essen und nehmen:\ndu … · er …":[`essen y nehmen:
du … · er …`,`essen and nehmen:
du … · er …`,`essen і nehmen:
du … · er …`,`essen ve nehmen:
du … · er …`,`essen i nehmen:
du … · er …`,`essen وnehmen:
du … · er …`,`essen 和 nehmen：
du … · er …`],"mögen und möchte":["mögen y möchte","mögen and möchte","mögen і möchte","mögen ve möchte","mögen i möchte","mögen وmöchte","mögen 和 möchte"],"Akkusativ:\nWas ändert sich?":[`Acusativo:
¿qué cambia?`,`Accusative:
what changes?`,`Знахідний відмінок:
що змінюється?`,`Akkusativ:
ne değişir?`,`Akuzativ:
šta se mijenja?`,`حالة النصب (Akkusativ):
ما الذي يتغير؟`,`第四格：
有什么变化？`],"kein im Akkusativ":["kein en acusativo","kein in the accusative","kein у знахідному відмінку","Akkusativ'de kein","kein u akuzativu","kein في حالة النصب","第四格的 kein"],"Komposita:\nWelcher Artikel?":[`Palabras compuestas:
¿qué artículo?`,`Compound nouns:
which article?`,`Складні слова:
який артикль?`,`Birleşik isimler:
hangi artikel?`,`Složenice:
koji član?`,`الكلمات المركبة:
أي أداة تعريف؟`,`复合词：
用哪个冠词？`],"mit und ohne:\nWelcher Fall?":[`mit y ohne:
¿qué caso?`,`mit and ohne:
which case?`,`mit і ohne:
який відмінок?`,`mit ve ohne:
hangi hâl?`,`mit i ohne:
koji padež?`,`mit وohne:
أي حالة إعرابية؟`,`mit 和 ohne：
用哪一格？`],"eu · äu · au":["eu · äu · au","eu · äu · au","eu · äu · au","eu · äu · au","eu · äu · au","eu · äu · au","eu · äu · au"],"Mengen:\n2 kg Erdäpfel · 3 Stück Kuchen":[`Cantidades:
2 kg Erdäpfel · 3 Stück Kuchen`,`Quantities:
2 kg Erdäpfel · 3 Stück Kuchen`,`Кількість:
2 kg Erdäpfel · 3 Stück Kuchen`,`Miktarlar:
2 kg Erdäpfel · 3 Stück Kuchen`,`Količine:
2 kg Erdäpfel · 3 Stück Kuchen`,`الكميات:
2 kg Erdäpfel · 3 Stück Kuchen`,`数量：
2 kg Erdäpfel · 3 Stück Kuchen`],"Lebensmittel allgemein:\nmit Artikel?":[`Alimentos en general:
¿con artículo?`,`Food in general:
with an article?`,`Продукти загалом:
з артиклем?`,`Genel olarak yiyecekler:
artikelli mi?`,`Namirnice općenito:
sa članom?`,`الأطعمة بشكل عام:
مع أداة التعريف؟`,`泛指食物：
要加冠词吗？`],"um · am · im · von … bis":["um · am · im · von … bis","um · am · im · von … bis","um · am · im · von … bis","um · am · im · von … bis","um · am · im · von … bis","um · am · im · von … bis","um · am · im · von … bis"],"Die Zeit am Satzanfang:\nWo steht das Verb?":[`El tiempo al principio de la frase:
¿dónde va el verbo?`,`Time at the start of the sentence:
where does the verb go?`,`Час на початку речення:
де стоїть дієслово?`,`Cümle başında zaman:
fiil nerede durur?`,`Vrijeme na početku rečenice:
gdje stoji glagol?`,`الزمن في بداية الجملة:
أين يقع الفعل؟`,`时间放在句首：
动词放在哪里？`],"Trennbare Verben:\naufstehen · einkaufen":[`Verbos separables:
aufstehen · einkaufen`,`Separable verbs:
aufstehen · einkaufen`,`Відокремлювані дієслова:
aufstehen · einkaufen`,`Ayrılabilen fiiller:
aufstehen · einkaufen`,`Razdvojni glagoli:
aufstehen · einkaufen`,`الأفعال المنفصلة:
aufstehen · einkaufen`,`可分动词：
aufstehen · einkaufen`],"schlafen · fahren · sehen:\ndu … · er …":[`schlafen · fahren · sehen:
du … · er …`,`schlafen · fahren · sehen:
du … · er …`,`schlafen · fahren · sehen:
du … · er …`,`schlafen · fahren · sehen:
du … · er …`,`schlafen · fahren · sehen:
du … · er …`,`schlafen · fahren · sehen:
du … · er …`,`schlafen · fahren · sehen：
du … · er …`],"zuerst, dann, nachher\nam Satzanfang":[`zuerst, dann, nachher
al principio de la frase`,`zuerst, dann, nachher
at the start of the sentence`,`zuerst, dann, nachher
на початку речення`,`Cümle başında
zuerst, dann, nachher`,`zuerst, dann, nachher
na početku rečenice`,`zuerst وdann وnachher
في بداية الجملة`,`zuerst、dann、nachher
放在句首`],"v und w":["v y w","v and w","v і w","v ve w","v i w","v وw","v 和 w"],"14:30\noffiziell und im Alltag":[`14:30
oficial y en el día a día`,`14:30
official and everyday`,`14:30
офіційно і в побуті`,`14:30
resmî ve günlük dilde`,`14:30
zvanično i u svakodnevici`,`14:30
بشكل رسمي وفي الحياة اليومية`,`14:30
正式说法和日常说法`],"halb drei · Viertel nach zwei\nViertel vor drei":[`halb drei · Viertel nach zwei
Viertel vor drei`,`halb drei · Viertel nach zwei
Viertel vor drei`,`halb drei · Viertel nach zwei
Viertel vor drei`,`halb drei · Viertel nach zwei
Viertel vor drei`,`halb drei · Viertel nach zwei
Viertel vor drei`,`halb drei · Viertel nach zwei
Viertel vor drei`,`halb drei · Viertel nach zwei
Viertel vor drei`],"Zeit und Ort:\nWas kommt zuerst?":[`Tiempo y lugar:
¿qué va primero?`,`Time and place:
which comes first?`,`Час і місце:
що йде першим?`,`Zaman ve yer:
hangisi önce gelir?`,`Vrijeme i mjesto:
šta ide prvo?`,`الزمان والمكان:
أيهما يأتي أولًا؟`,`时间和地点：
哪个在前？`],"Über die Zukunft sprechen":["Hablar del futuro","Talking about the future","Говорити про майбутнє","Gelecek hakkında konuşmak","Govoriti o budućnosti","الحديث عن المستقبل","谈论将来"],"können und wollen\nim Präsens":[`können y wollen
en presente`,`können and wollen
in the present tense`,`können і wollen
у теперішньому часі`,`können ve wollen
şimdiki zamanda`,`können i wollen
u prezentu`,`können وwollen
في المضارع`,`können 和 wollen
的现在时`],"Satzklammer:\nModalverb und Infinitiv":[`Paréntesis verbal:
verbo modal e infinitivo`,`Sentence bracket:
modal verb and infinitive`,`Рамкова конструкція:
модальне дієслово й інфінітив`,`Cümle parantezi:
kip fiili ve mastar`,`Okvir rečenice:
modalni glagol i infinitiv`,`الإطار الفعلي:
الفعل المساعد والمصدر`,`句框：
情态动词和不定式`],"jeder · jede · jedes:\nTag · Woche · Jahr":[`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder · jede · jedes：
Tag · Woche · Jahr`],"-er und -ig am Wortende":["-er y -ig al final de la palabra","-er and -ig at the end of a word","-er та -ig у кінці слова","Kelime sonunda -er ve -ig","-er i -ig na kraju riječi","-er و-ig في آخر الكلمة","词尾的 -er 和 -ig"],"gern · lieber · am liebsten":["gern · lieber · am liebsten","gern · lieber · am liebsten","gern · lieber · am liebsten","gern · lieber · am liebsten","gern · lieber · am liebsten","gern · lieber · am liebsten","gern · lieber · am liebsten"],"Fußball · Rad · Ski · Yoga:\nwelches Verb?":[`Fußball · Rad · Ski · Yoga:
¿qué verbo?`,`Fußball · Rad · Ski · Yoga:
which verb?`,`Fußball · Rad · Ski · Yoga:
яке дієслово?`,`Fußball · Rad · Ski · Yoga:
hangi fiil?`,`Fußball · Rad · Ski · Yoga:
koji glagol?`,`Fußball · Rad · Ski · Yoga:
أي فعل؟`,`Fußball · Rad · Ski · Yoga：
用哪个动词？`],"können:\nzwei Bedeutungen":[`können:
dos significados`,`können:
two meanings`,`können:
два значення`,`können:
iki anlam`,`können:
dva značenja`,`können:
معنيان`,`können：
两个意思`],"immer, oft, manchmal, nie:\nWo stehen sie?":[`immer, oft, manchmal, nie:
¿dónde van?`,`immer, oft, manchmal, nie:
where do they go?`,`immer, oft, manchmal, nie:
де вони стоять?`,`immer, oft, manchmal, nie:
nerede dururlar?`,`immer, oft, manchmal, nie:
gdje stoje?`,`immer وoft وmanchmal وnie:
أين تقع؟`,`immer、oft、manchmal、nie：
放在哪里？`],"Wie oft?\nvon «immer» bis «nie»":[`¿Con qué frecuencia?
de «immer» a «nie»`,`How often?
from «immer» to «nie»`,`Як часто?
від «immer» до «nie»`,`Ne sıklıkla?
«immer»den «nie»ye`,`Koliko često?
od «immer» do «nie»`,`كم مرة؟
من «immer» إلى «nie»`,`多经常？
从 «immer» 到 «nie»`],"Plural:\nFrau · Tag · Kind · Handy · Vater":[`Plural:
Frau · Tag · Kind · Handy · Vater`,`Plural:
Frau · Tag · Kind · Handy · Vater`,`Множина:
Frau · Tag · Kind · Handy · Vater`,`Çoğul:
Frau · Tag · Kind · Handy · Vater`,`Množina:
Frau · Tag · Kind · Handy · Vater`,`الجمع:
Frau · Tag · Kind · Handy · Vater`,`复数：
Frau · Tag · Kind · Handy · Vater`],"Monate und Jahreszeiten:\nwelche Präposition?":[`Meses y estaciones:
¿qué preposición?`,`Months and seasons:
which preposition?`,`Місяці й пори року:
який прийменник?`,`Aylar ve mevsimler:
hangi edat?`,`Mjeseci i godišnja doba:
koji prijedlog?`,`الشهور والفصول:
أي حرف جر؟`,`月份和季节：
用哪个介词？`],"man:\nwelche Verbform?":[`man:
¿qué forma del verbo?`,`man:
which verb form?`,`man:
яка форма дієслова?`,`man:
fiilin hangi hâli?`,`man:
koji oblik glagola?`,`man:
أي صيغة للفعل؟`,`man：
动词用什么形式？`],"h:\nHaus · gehen · Uhr":[`h:
Haus · gehen · Uhr`,`h:
Haus · gehen · Uhr`,`h:
Haus · gehen · Uhr`,`h:
Haus · gehen · Uhr`,`h:
Haus · gehen · Uhr`,`h:
Haus · gehen · Uhr`,`h：
Haus · gehen · Uhr`],"Wetter:\nWelches Subjekt?":[`El tiempo (clima):
¿qué sujeto?`,`Weather:
which subject?`,`Погода:
який підмет?`,`Hava durumu:
hangi özne?`,`Vrijeme (prognoza):
koji subjekat?`,`الطقس:
أي فاعل؟`,`天气：
用什么主语？`],"wenn (Bedingung):\nWo steht das Verb?":[`wenn (condición):
¿dónde va el verbo?`,`wenn (condition):
where does the verb go?`,`wenn (умова):
де стоїть дієслово?`,`wenn (koşul):
fiil nerede durur?`,`wenn (uslov):
gdje stoji glagol?`,`wenn (شرط):
أين يقع الفعل؟`,`wenn（条件）：
动词放在哪里？`],"warm, kalt:\nvergleichen":[`warm, kalt:
comparar`,`warm, kalt:
comparing`,`warm, kalt:
порівняння`,`warm, kalt:
karşılaştırma`,`warm, kalt:
poređenje`,`warm وkalt:
المقارنة`,`warm、kalt：
比较`],"ng und nk":["ng y nk","ng and nk","ng і nk","ng ve nk","ng i nk","ng وnk","ng 和 nk"],"sein im Präteritum":["sein en Präteritum","sein in the Präteritum","sein у Präteritum","Präteritum'da sein","sein u preteritu","sein في الـPräteritum","sein 的 Präteritum"],"haben im Präteritum":["haben en Präteritum","haben in the Präteritum","haben у Präteritum","Präteritum'da haben","haben u preteritu","haben في الـPräteritum","haben 的 Präteritum"],"Perfekt mit sein:\nwelche Verben?":[`Perfekt con sein:
¿qué verbos?`,`Perfekt with sein:
which verbs?`,`Perfekt із sein:
які дієслова?`,`sein ile Perfekt:
hangi fiiller?`,`Perfekt sa sein:
koji glagoli?`,`الـPerfekt مع sein:
أي أفعال؟`,`用 sein 构成的 Perfekt：
哪些动词？`],"Perfekt:\ngehen · fahren · aufstehen · bleiben":[`Perfekt:
gehen · fahren · aufstehen · bleiben`,`Perfekt:
gehen · fahren · aufstehen · bleiben`,`Perfekt:
gehen · fahren · aufstehen · bleiben`,`Perfekt:
gehen · fahren · aufstehen · bleiben`,`Perfekt:
gehen · fahren · aufstehen · bleiben`,`Perfekt:
gehen · fahren · aufstehen · bleiben`,`Perfekt：
gehen · fahren · aufstehen · bleiben`],"Perfekt:\nWo stehen die zwei Verben?":[`Perfekt:
¿dónde van los dos verbos?`,`Perfekt:
where do the two verbs go?`,`Perfekt:
де стоять два дієслова?`,`Perfekt:
iki fiil nerede durur?`,`Perfekt:
gdje stoje dva glagola?`,`Perfekt:
أين يقع الفعلان؟`,`Perfekt：
两个动词放在哪里？`],"Partizip II regelmäßig:\nmachen · arbeiten · kaufen":[`Participio II regular:
machen · arbeiten · kaufen`,`Regular Partizip II:
machen · arbeiten · kaufen`,`Правильний Partizip II:
machen · arbeiten · kaufen`,`Düzenli Partizip II:
machen · arbeiten · kaufen`,`Pravilni Partizip II:
machen · arbeiten · kaufen`,`الـPartizip II القياسي:
machen · arbeiten · kaufen`,`规则的第二分词：
machen · arbeiten · kaufen`],"Partizip II unregelmäßig:\nsehen · schreiben · gehen":[`Participio II irregular:
sehen · schreiben · gehen`,`Irregular Partizip II:
sehen · schreiben · gehen`,`Неправильний Partizip II:
sehen · schreiben · gehen`,`Düzensiz Partizip II:
sehen · schreiben · gehen`,`Nepravilni Partizip II:
sehen · schreiben · gehen`,`الـPartizip II الشاذ:
sehen · schreiben · gehen`,`不规则的第二分词：
sehen · schreiben · gehen`],"Partizip II:\ntelefonieren · studieren":[`Participio II:
telefonieren · studieren`,`Partizip II:
telefonieren · studieren`,`Partizip II:
telefonieren · studieren`,`Partizip II:
telefonieren · studieren`,`Partizip II:
telefonieren · studieren`,`Partizip II:
telefonieren · studieren`,`第二分词：
telefonieren · studieren`],"letzt- / nächst-:\nMonat · Woche · Jahr":[`letzt- / nächst-:
Monat · Woche · Jahr`,`letzt- / nächst-:
Monat · Woche · Jahr`,`letzt- / nächst-:
Monat · Woche · Jahr`,`letzt- / nächst-:
Monat · Woche · Jahr`,`letzt- / nächst-:
Monat · Woche · Jahr`,`letzt- / nächst-:
Monat · Woche · Jahr`,`letzt- / nächst-：
Monat · Woche · Jahr`],"Reflexivpronomen\nim Akkusativ":[`Pronombres reflexivos
en acusativo`,`Reflexive pronouns
in the accusative`,`Зворотні займенники
у знахідному відмінку`,`Akkusativ'de
dönüşlü zamirler`,`Povratne zamjenice
u akuzativu`,`الضمائر الانعكاسية
في حالة النصب`,`第四格的
反身代词`],"Zuerst, dann, danach …\nam Satzanfang: Wo steht das Verb?":[`Zuerst, dann, danach …
al principio: ¿dónde va el verbo?`,`Zuerst, dann, danach …
at the start: where does the verb go?`,`Zuerst, dann, danach …
на початку: де стоїть дієслово?`,`Zuerst, dann, danach …
başta: fiil nerede durur?`,`Zuerst, dann, danach …
na početku: gdje stoji glagol?`,`Zuerst وdann وdanach …
في البداية: أين يقع الفعل؟`,`Zuerst、dann、danach……
放在句首：动词放在哪里？`],"Über gestern sprechen:\nPerfekt oder Präteritum?":[`Hablar de ayer:
¿Perfekt o Präteritum?`,`Talking about yesterday:
Perfekt or Präteritum?`,`Говорити про вчора:
Perfekt чи Präteritum?`,`Dün hakkında konuşmak:
Perfekt mi, Präteritum mu?`,`Govoriti o jučer:
Perfekt ili Präteritum?`,`الحديث عن الأمس:
Perfekt أم Präteritum؟`,`谈论昨天：
用 Perfekt 还是 Präteritum？`],"Perfekt:\neinkaufen · telefonieren":[`Perfekt:
einkaufen · telefonieren`,`Perfekt:
einkaufen · telefonieren`,`Perfekt:
einkaufen · telefonieren`,`Perfekt:
einkaufen · telefonieren`,`Perfekt:
einkaufen · telefonieren`,`Perfekt:
einkaufen · telefonieren`,`Perfekt：
einkaufen · telefonieren`],"Partizip II:\nmachen · einkaufen · telefonieren · bezahlen":[`Participio II:
machen · einkaufen · telefonieren · bezahlen`,`Partizip II:
machen · einkaufen · telefonieren · bezahlen`,`Partizip II:
machen · einkaufen · telefonieren · bezahlen`,`Partizip II:
machen · einkaufen · telefonieren · bezahlen`,`Partizip II:
machen · einkaufen · telefonieren · bezahlen`,`Partizip II:
machen · einkaufen · telefonieren · bezahlen`,`第二分词：
machen · einkaufen · telefonieren · bezahlen`],"es gibt + …?":["es gibt + ¿qué caso?","es gibt + which case?","es gibt + який відмінок?","es gibt + hangi hâl?","es gibt + koji padež?","es gibt + أي حالة؟","es gibt + 第几格？"],"Dativ:\nder · die · das · Plural":[`Dativo:
der · die · das · plural`,`Dative:
der · die · das · plural`,`Давальний відмінок:
der · die · das · множина`,`Dativ:
der · die · das · çoğul`,`Dativ:
der · die · das · množina`,`حالة الجر (Dativ):
der · die · das · الجمع`,`第三格：
der · die · das · 复数`],"zu + dem · zu + der":["zu + dem · zu + der","zu + dem · zu + der","zu + dem · zu + der","zu + dem · zu + der","zu + dem · zu + der","zu + dem · zu + der","zu + dem · zu + der"],"mit:\nBus · U-Bahn · Auto":[`mit:
Bus · U-Bahn · Auto`,`mit:
Bus · U-Bahn · Auto`,`mit:
Bus · U-Bahn · Auto`,`mit:
Bus · U-Bahn · Auto`,`mit:
Bus · U-Bahn · Auto`,`mit:
Bus · U-Bahn · Auto`,`mit：
Bus · U-Bahn · Auto`],"Wohin?\nin · auf · an …":[`¿Adónde?
in · auf · an …`,`Where to?
in · auf · an …`,`Куди?
in · auf · an …`,`Nereye?
in · auf · an …`,`Kamo?
in · auf · an …`,`إلى أين؟
in · auf · an …`,`去哪里？
in · auf · an …`],"Den Weg erklären":["Explicar el camino","Giving directions","Пояснити дорогу","Yol tarif etmek","Objasniti put","وصف الطريق","指路"],"nach · zu · in:\nGraz · Arzt · Kino":[`nach · zu · in:
Graz · Arzt · Kino`,`nach · zu · in:
Graz · Arzt · Kino`,`nach · zu · in:
Graz · Arzt · Kino`,`nach · zu · in:
Graz · Arzt · Kino`,`nach · zu · in:
Graz · Arzt · Kino`,`nach · zu · in:
Graz · Arzt · Kino`,`nach · zu · in：
Graz · Arzt · Kino`],"gefallen:\nWer steht im Dativ?":[`gefallen:
¿quién va en dativo?`,`gefallen:
who is in the dative?`,`gefallen:
хто в давальному?`,`gefallen:
Dativ'de kim var?`,`gefallen:
ko je u dativu?`,`gefallen:
من يكون في حالة الجر؟`,`gefallen：
谁用第三格？`],"Verben mit Dativ":["Verbos con dativo","Verbs with the dative","Дієслова з давальним відмінком","Dativ alan fiiller","Glagoli s dativom","أفعال مع حالة الجر","支配第三格的动词"],"dieser · diese · dieses":["dieser · diese · dieses","dieser · diese · dieses","dieser · diese · dieses","dieser · diese · dieses","dieser · diese · dieses","dieser · diese · dieses","dieser · diese · dieses"],"Pronomen im Dativ":["Pronombres en dativo","Pronouns in the dative","Займенники в давальному відмінку","Dativ'de zamirler","Zamjenice u dativu","الضمائر في حالة الجر","第三格代词"],"Wo?\nin · an · auf · unter …":[`¿Dónde?
in · an · auf · unter …`,`Where?
in · an · auf · unter …`,`Де?
in · an · auf · unter …`,`Nerede?
in · an · auf · unter …`,`Gdje?
in · an · auf · unter …`,`أين؟
in · an · auf · unter …`,`在哪里？
in · an · auf · unter …`],"auf oder über?\nan oder neben?":[`¿auf o über?
¿an o neben?`,`auf or über?
an or neben?`,`auf чи über?
an чи neben?`,`auf mu, über mi?
an mı, neben mi?`,`auf ili über?
an ili neben?`,`auf أم über؟
an أم neben؟`,`auf 还是 über？
an 还是 neben？`],"Adjektiv nach der, die, das":["Adjetivo después de der, die, das","Adjective after der, die, das","Прикметник після der, die, das","der, die, das'tan sonra sıfat","Pridjev iza der, die, das","الصفة بعد der وdie وdas","der、die、das 后的形容词"],"stellen oder stehen?":["¿stellen o stehen?","stellen or stehen?","stellen чи stehen?","stellen mi, stehen mi?","stellen ili stehen?","stellen أم stehen؟","stellen 还是 stehen？"],"zu teuer oder sehr teuer?":["¿zu teuer o sehr teuer?","zu teuer or sehr teuer?","zu teuer чи sehr teuer?","zu teuer mu, sehr teuer mi?","zu teuer ili sehr teuer?","zu teuer أم sehr teuer؟","zu teuer 还是 sehr teuer？"],"sollen im Präsens":["sollen en presente","sollen in the present tense","sollen у теперішньому часі","sollen şimdiki zamanda","sollen u prezentu","sollen في المضارع","sollen 的现在时"],"Imperativ:\nkommen · nehmen":[`Imperativo:
kommen · nehmen`,`Imperative:
kommen · nehmen`,`Наказовий спосіб:
kommen · nehmen`,`Emir kipi:
kommen · nehmen`,`Imperativ:
kommen · nehmen`,`صيغة الأمر:
kommen · nehmen`,`命令式：
kommen · nehmen`],"Imperativ:\nanrufen · sein":[`Imperativo:
anrufen · sein`,`Imperative:
anrufen · sein`,`Наказовий спосіб:
anrufen · sein`,`Emir kipi:
anrufen · sein`,`Imperativ:
anrufen · sein`,`صيغة الأمر:
anrufen · sein`,`命令式：
anrufen · sein`],"Der Kopf tut weh:\nWer steht im Dativ?":[`Der Kopf tut weh:
¿quién va en dativo?`,`Der Kopf tut weh:
who is in the dative?`,`Der Kopf tut weh:
хто в давальному?`,`Der Kopf tut weh:
Dativ'de kim var?`,`Der Kopf tut weh:
ko je u dativu?`,`Der Kopf tut weh:
من يكون في حالة الجر؟`,`Der Kopf tut weh：
谁用第三格？`],"Kopf + Schmerzen":["Kopf + Schmerzen","Kopf + Schmerzen","Kopf + Schmerzen","Kopf + Schmerzen","Kopf + Schmerzen","Kopf + Schmerzen","Kopf + Schmerzen"],"Zähne putzen:\nmich oder mir?":[`Zähne putzen:
¿mich o mir?`,`Zähne putzen:
mich or mir?`,`Zähne putzen:
mich чи mir?`,`Zähne putzen:
mich mi, mir mi?`,`Zähne putzen:
mich ili mir?`,`Zähne putzen:
mich أم mir؟`,`Zähne putzen：
mich 还是 mir？`],"Plural:\nAuge · Ohr · Hand · Fuß · Zahn":[`Plural:
Auge · Ohr · Hand · Fuß · Zahn`,`Plural:
Auge · Ohr · Hand · Fuß · Zahn`,`Множина:
Auge · Ohr · Hand · Fuß · Zahn`,`Çoğul:
Auge · Ohr · Hand · Fuß · Zahn`,`Množina:
Auge · Ohr · Hand · Fuß · Zahn`,`الجمع:
Auge · Ohr · Hand · Fuß · Zahn`,`复数：
Auge · Ohr · Hand · Fuß · Zahn`],"Einen Rat geben":["Dar un consejo","Giving advice","Дати пораду","Tavsiye vermek","Dati savjet","تقديم نصيحة","给建议"],"pf · kn · ps":["pf · kn · ps","pf · kn · ps","pf · kn · ps","pf · kn · ps","pf · kn · ps","pf · kn · ps","pf · kn · ps"],"müssen und dürfen\nim Präsens":[`müssen y dürfen
en presente`,`müssen and dürfen
in the present tense`,`müssen і dürfen
у теперішньому часі`,`müssen ve dürfen
şimdiki zamanda`,`müssen i dürfen
u prezentu`,`müssen وdürfen
في المضارع`,`müssen 和 dürfen
的现在时`],"nicht dürfen oder\nnicht müssen?":[`¿nicht dürfen o
nicht müssen?`,`nicht dürfen or
nicht müssen?`,`nicht dürfen чи
nicht müssen?`,`nicht dürfen mi,
nicht müssen mi?`,`nicht dürfen ili
nicht müssen?`,`nicht dürfen أم
nicht müssen؟`,`nicht dürfen 还是
nicht müssen？`],"vor · nach · in\n+ Zeit":[`vor · nach · in
+ tiempo`,`vor · nach · in
+ time`,`vor · nach · in
+ час`,`vor · nach · in
+ zaman`,`vor · nach · in
+ vrijeme`,`vor · nach · in
+ الزمن`,`vor · nach · in
+ 时间`],"ab und bis":["ab y bis","ab and bis","ab і bis","ab ve bis","ab i bis","ab وbis","ab 和 bis"],"Höflich bitten:\nkönnen · werden":[`Pedir con educación:
können · werden`,`Asking politely:
können · werden`,`Ввічливо попросити:
können · werden`,`Kibarca rica:
können · werden`,`Ljubazno zamoliti:
können · werden`,`الطلب بأدب:
können · werden`,`礼貌地请求：
können · werden`],"Indirekte Frage:\neine Ja/Nein-Frage":[`Pregunta indirecta:
de sí o no`,`Indirect question:
a yes/no question`,`Непряме питання:
так чи ні`,`Dolaylı soru:
evet/hayır sorusu`,`Indirektno pitanje:
da/ne pitanje`,`السؤال غير المباشر:
سؤال بنعم أو لا`,`间接疑问句：
一般疑问句`],"Indirekte Frage:\neine W-Frage":[`Pregunta indirecta:
con W-Wort`,`Indirect question:
a W-question`,`Непряме питання:
з W-словом`,`Dolaylı soru:
W-sorusu`,`Indirektno pitanje:
W-pitanje`,`السؤال غير المباشر:
بأداة استفهام W`,`间接疑问句：
特殊疑问句`],"Wem und was:\nWelche Reihenfolge?":[`A quién y qué:
¿en qué orden?`,`To whom and what:
in which order?`,`Кому і що:
у якому порядку?`,`Kime ve ne:
hangi sırayla?`,`Kome i šta:
kojim redom?`,`لمن وماذا:
بأي ترتيب؟`,`给谁和什么：
什么顺序？`],"-tion und -ung":["-tion y -ung","-tion and -ung","-tion та -ung","-tion ve -ung","-tion i -ung","-tion و-ung","-tion 和 -ung"],"welch- und dies-":["welch- y dies-","welch- and dies-","welch- і dies-","welch- ve dies-","welch- i dies-","welch- وdies-","welch- 和 dies-"],"Pronomen im Akkusativ":["Pronombres en acusativo","Pronouns in the accusative","Займенники в знахідному відмінку","Akkusativ'de zamirler","Zamjenice u akuzativu","الضمائر في حالة النصب","第四格代词"],"für · durch · gegen · ohne · um":["für · durch · gegen · ohne · um","für · durch · gegen · ohne · um","für · durch · gegen · ohne · um","für · durch · gegen · ohne · um","für · durch · gegen · ohne · um","für · durch · gegen · ohne · um","für · durch · gegen · ohne · um"],"gut · viel · gern:\nvergleichen":[`gut · viel · gern:
comparar`,`gut · viel · gern:
comparing`,`gut · viel · gern:
порівняння`,`gut · viel · gern:
karşılaştırma`,`gut · viel · gern:
poređenje`,`gut · viel · gern:
المقارنة`,`gut · viel · gern：
比较`],"alt · groß:\nvergleichen":[`alt · groß:
comparar`,`alt · groß:
comparing`,`alt · groß:
порівняння`,`alt · groß:
karşılaştırma`,`alt · groß:
poređenje`,`alt · groß:
المقارنة`,`alt · groß：
比较`],"Ordinalzahlen:\n1. · 4. · 8. · 20.":[`Números ordinales:
1. · 4. · 8. · 20.`,`Ordinal numbers:
1. · 4. · 8. · 20.`,`Порядкові числівники:
1. · 4. · 8. · 20.`,`Sıra sayıları:
1. · 4. · 8. · 20.`,`Redni brojevi:
1. · 4. · 8. · 20.`,`الأعداد الترتيبية:
1. · 4. · 8. · 20.`,`序数词：
1. · 4. · 8. · 20.`],"Adjektiv nach ein:\nMantel · Jacke · Hemd":[`Adjetivo después de ein:
Mantel · Jacke · Hemd`,`Adjective after ein:
Mantel · Jacke · Hemd`,`Прикметник після ein:
Mantel · Jacke · Hemd`,`ein'dan sonra sıfat:
Mantel · Jacke · Hemd`,`Pridjev iza ein:
Mantel · Jacke · Hemd`,`الصفة بعد ein:
Mantel · Jacke · Hemd`,`ein 后的形容词：
Mantel · Jacke · Hemd`],"Adjektiv nach einen\n(Akkusativ, der)":[`Adjetivo después de einen
(acusativo, der)`,`Adjective after einen
(accusative, der)`,`Прикметник після einen
(знахідний, der)`,`einen'dan sonra sıfat
(Akkusativ, der)`,`Pridjev iza einen
(akuzativ, der)`,`الصفة بعد einen
(حالة النصب، der)`,`einen 后的形容词
（第四格，der）`],"passen · stehen · gefallen":["passen · stehen · gefallen","passen · stehen · gefallen","passen · stehen · gefallen","passen · stehen · gefallen","passen · stehen · gefallen","passen · stehen · gefallen","passen · stehen · gefallen"],"würde\n(Konjunktiv II)":[`würde
(Konjunktiv II)`,`würde
(Konjunktiv II)`,`würde
(Konjunktiv II)`,`würde
(Konjunktiv II)`,`würde
(Konjunktiv II)`,`würde
(Konjunktiv II)`,`würde
（第二虚拟式）`],"würde + …:\nWo steht der Infinitiv?":[`würde + …:
¿dónde va el infinitivo?`,`würde + …:
where does the infinitive go?`,`würde + …:
де стоїть інфінітив?`,`würde + …:
mastar nerede durur?`,`würde + …:
gdje stoji infinitiv?`,`würde + …:
أين يقع المصدر؟`,`würde + ……：
不定式放在哪里？`],"nach + …":["nach + ¿qué caso?","nach + which case?","nach + який відмінок?","nach + hangi hâl?","nach + koji padež?","nach + أي حالة؟","nach + 第几格？"],"ans Meer oder am Meer?":["¿ans Meer o am Meer?","ans Meer or am Meer?","ans Meer чи am Meer?","ans Meer mi, am Meer mi?","ans Meer ili am Meer?","ans Meer أم am Meer؟","ans Meer 还是 am Meer？"],"Wohin? · Wo?\nBerge · Insel · Schweiz":[`¿Adónde? · ¿Dónde?
Berge · Insel · Schweiz`,`Where to? · Where?
Berge · Insel · Schweiz`,`Куди? · Де?
Berge · Insel · Schweiz`,`Nereye? · Nerede?
Berge · Insel · Schweiz`,`Kamo? · Gdje?
Berge · Insel · Schweiz`,`إلى أين؟ · أين؟
Berge · Insel · Schweiz`,`去哪里？· 在哪里？
Berge · Insel · Schweiz`],"Futur:\nwerden + …":[`Futuro:
werden + …`,`Future:
werden + …`,`Майбутній час:
werden + …`,`Gelecek zaman:
werden + …`,`Futur:
werden + …`,`المستقبل:
werden + …`,`将来时：
werden + ……`],"Infinitiv mit zu:\nnach welchen Verben?":[`Infinitivo con zu:
¿después de qué verbos?`,`Infinitive with zu:
after which verbs?`,`Інфінітив із zu:
після яких дієслів?`,`zu'lu mastar:
hangi fiillerden sonra?`,`Infinitiv sa zu:
iza kojih glagola?`,`المصدر مع zu:
بعد أي أفعال؟`,`带 zu 的不定式：
用在哪些动词后？`],"zu bei trennbaren Verben":["zu con verbos separables","zu with separable verbs","zu з відокремлюваними дієсловами","Ayrılabilen fiillerde zu","zu kod razdvojnih glagola","zu مع الأفعال المنفصلة","可分动词中的 zu"],"um … zu":["um … zu","um … zu","um … zu","um … zu","um … zu","um … zu","um … zu"],"mögen · möchten · wollen":["mögen · möchten · wollen","mögen · möchten · wollen","mögen · möchten · wollen","mögen · möchten · wollen","mögen · möchten · wollen","mögen · möchten · wollen","mögen · möchten · wollen"],"Akzent bei Fremdwörtern:\nHotel · Computer · Restaurant":[`Acento en palabras extranjeras:
Hotel · Computer · Restaurant`,`Stress in loanwords:
Hotel · Computer · Restaurant`,`Наголос у запозиченнях:
Hotel · Computer · Restaurant`,`Yabancı kelimelerde vurgu:
Hotel · Computer · Restaurant`,`Naglasak u stranim riječima:
Hotel · Computer · Restaurant`,`النبرة في الكلمات الأجنبية:
Hotel · Computer · Restaurant`,`外来词的重音：
Hotel · Computer · Restaurant`],"sein oder ihr?":["¿sein o ihr?","sein or ihr?","sein чи ihr?","sein mi, ihr mi?","sein ili ihr?","sein أم ihr؟","sein 还是 ihr？"],"sein / ihr im Akkusativ\nvor einem der-Wort":[`sein / ihr en acusativo
antes de una palabra der`,`sein / ihr in the accusative
before a der-word`,`sein / ihr у знахідному
перед словом роду der`,`Akkusativ'de sein / ihr
der'li bir kelimeden önce`,`sein / ihr u akuzativu
ispred riječi s der`,`sein / ihr في حالة النصب
قبل كلمة مع der`,`第四格的 sein / ihr
在 der 词前面`],"denn:\nWo steht das Verb?":[`denn:
¿dónde va el verbo?`,`denn:
where does the verb go?`,`denn:
де стоїть дієслово?`,`denn:
fiil nerede durur?`,`denn:
gdje stoji glagol?`,`denn:
أين يقع الفعل؟`,`denn：
动词放在哪里？`],"gratulieren · danken:\nWelcher Fall?":[`gratulieren · danken:
¿qué caso?`,`gratulieren · danken:
which case?`,`gratulieren · danken:
який відмінок?`,`gratulieren · danken:
hangi hâl?`,`gratulieren · danken:
koji padež?`,`gratulieren · danken:
أي حالة؟`,`gratulieren · danken：
用哪一格？`],"zu + Anlass":["zu + ocasión","zu + occasion","zu + нагода","zu + vesile","zu + povod","zu + المناسبة","zu + 场合"],"Etwas anbieten\nund annehmen":[`Ofrecer algo
y aceptarlo`,`Offering something
and accepting it`,`Запропонувати щось
і прийняти`,`Bir şey ikram etmek
ve kabul etmek`,`Ponuditi nešto
i prihvatiti`,`عرض شيء
وقبوله`,`提供东西
和接受`],"Nebensatz:\nWo steht das Verb?":[`Oración subordinada:
¿dónde va el verbo?`,`Subordinate clause:
where does the verb go?`,`Підрядне речення:
де стоїть дієслово?`,`Yan cümle:
fiil nerede durur?`,`Zavisna rečenica:
gdje stoji glagol?`,`الجملة التابعة:
أين يقع الفعل؟`,`从句：
动词放在哪里？`],"obwohl oder trotzdem?":["¿obwohl o trotzdem?","obwohl or trotzdem?","obwohl чи trotzdem?","obwohl mu, trotzdem mi?","obwohl ili trotzdem?","obwohl أم trotzdem؟","obwohl 还是 trotzdem？"],"Satzakzent:\nWelches Wort betont man?":[`Acento de la frase:
¿qué palabra se acentúa?`,`Sentence stress:
which word is stressed?`,`Фразовий наголос:
яке слово наголошене?`,`Cümle vurgusu:
hangi kelime vurgulanır?`,`Rečenični naglasak:
koja riječ se naglašava?`,`نبرة الجملة:
أي كلمة تُنبَر؟`,`句重音：
重读哪个词？`],"sein und haben\nim Präteritum":[`sein y haben
en Präteritum`,`sein and haben
in the Präteritum`,`sein і haben
у Präteritum`,`Präteritum'da
sein ve haben`,`sein i haben
u preteritu`,`sein وhaben
في الـPräteritum`,`sein 和 haben
的 Präteritum`],"Partizip II:\nmachen · sprechen · einkaufen\nverstehen · telefonieren":[`Participio II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`Partizip II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`Partizip II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`Partizip II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`Partizip II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`Partizip II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`第二分词：
machen · sprechen · einkaufen
verstehen · telefonieren`],"Perfekt mit sein:\nbleiben · sein · passieren":[`Perfekt con sein:
bleiben · sein · passieren`,`Perfekt with sein:
bleiben · sein · passieren`,`Perfekt із sein:
bleiben · sein · passieren`,`sein ile Perfekt:
bleiben · sein · passieren`,`Perfekt sa sein:
bleiben · sein · passieren`,`الـPerfekt مع sein:
bleiben · sein · passieren`,`用 sein 的 Perfekt：
bleiben · sein · passieren`],"Partizip ohne ge-:\nwelche Präfixe?":[`Participio sin ge-:
¿qué prefijos?`,`Participle without ge-:
which prefixes?`,`Дієприкметник без ge-:
які префікси?`,`ge-'siz Partizip:
hangi önekler?`,`Particip bez ge-:
koji prefiksi?`,`الـPartizip بدون ge-:
أي سوابق؟`,`不加 ge- 的分词：
哪些前缀？`],"un- und -los":["un- y -los","un- and -los","un- та -los","un- ve -los","un- i -los","un- و-los","un- 和 -los"],"sich freuen · Angst haben\nsich ärgern: welche Präposition?":[`sich freuen · Angst haben
sich ärgern: ¿qué preposición?`,`sich freuen · Angst haben
sich ärgern: which preposition?`,`sich freuen · Angst haben
sich ärgern: який прийменник?`,`sich freuen · Angst haben
sich ärgern: hangi edat?`,`sich freuen · Angst haben
sich ärgern: koji prijedlog?`,`sich freuen · Angst haben
sich ärgern: أي حرف جر؟`,`sich freuen · Angst haben
sich ärgern：用哪个介词？`],"sich gewöhnen · sich Sorgen machen:\nwelche Präposition?":[`sich gewöhnen · sich Sorgen machen:
¿qué preposición?`,`sich gewöhnen · sich Sorgen machen:
which preposition?`,`sich gewöhnen · sich Sorgen machen:
який прийменник?`,`sich gewöhnen · sich Sorgen machen:
hangi edat?`,`sich gewöhnen · sich Sorgen machen:
koji prijedlog?`,`sich gewöhnen · sich Sorgen machen:
أي حرف جر؟`,`sich gewöhnen · sich Sorgen machen：
用哪个介词？`],"Worüber? – Darüber.":["Worüber? – Darüber.","Worüber? – Darüber.","Worüber? – Darüber.","Worüber? – Darüber.","Worüber? – Darüber.","Worüber? – Darüber.","Worüber? – Darüber."],"als oder wenn?\nin der Vergangenheit":[`¿als o wenn?
en el pasado`,`als or wenn?
in the past`,`als чи wenn?
у минулому`,`als mı, wenn mi?
geçmişte`,`als ili wenn?
u prošlosti`,`als أم wenn؟
في الماضي`,`als 还是 wenn？
在过去`],"weil:\nWo steht das Verb?":[`weil:
¿dónde va el verbo?`,`weil:
where does the verb go?`,`weil:
де стоїть дієслово?`,`weil:
fiil nerede durur?`,`weil:
gdje stoji glagol?`,`weil:
أين يقع الفعل؟`,`weil：
动词放在哪里？`],"weil · denn · deshalb":["weil · denn · deshalb","weil · denn · deshalb","weil · denn · deshalb","weil · denn · deshalb","weil · denn · deshalb","weil · denn · deshalb","weil · denn · deshalb"],"Was für ein …?":["Was für ein …?","Was für ein …?","Was für ein …?","Was für ein …?","Was für ein …?","Was für ein …?","Was für ein ……？"],"Höflich einladen":["Invitar con educación","Inviting politely","Ввічливо запросити","Kibarca davet etmek","Ljubazno pozvati","الدعوة بأدب","礼貌地邀请"],"Nebensatz vorne:\nWas kommt danach?":[`Subordinada delante:
¿qué va después?`,`Subordinate clause first:
what comes next?`,`Підрядне спереду:
що йде далі?`,`Yan cümle başta:
ardından ne gelir?`,`Zavisna rečenica naprijed:
šta ide poslije?`,`الجملة التابعة في البداية:
ماذا يأتي بعدها؟`,`从句在前：
后面接什么？`],"mitbringen · schenken:\nwem und was?":[`mitbringen · schenken:
¿a quién y qué?`,`mitbringen · schenken:
to whom and what?`,`mitbringen · schenken:
кому і що?`,`mitbringen · schenken:
kime ve ne?`,`mitbringen · schenken:
kome i šta?`,`mitbringen · schenken:
لمن وماذا؟`,`mitbringen · schenken：
给谁，什么？`],"Im Restaurant bestellen":["Pedir en el restaurante","Ordering in a restaurant","Замовляти в ресторані","Restoranda sipariş vermek","Naručiti u restoranu","الطلب في المطعم","在餐厅点菜"],"man:\nWie macht man das?":[`man:
¿cómo se hace?`,`man:
how is it done?`,`man:
як це робиться?`,`man:
bu nasıl yapılır?`,`man:
kako se to radi?`,`man:
كيف يُفعل ذلك؟`,`man：
怎么做？`],"Das r":["La r","The r","Звук r","r sesi","Glas r","حرف r","r 的发音"],"für · über + Zeit":["für · über + tiempo","für · über + time","für · über + час","für · über + zaman","für · über + vrijeme","für · über + الزمن","für · über + 时间"],"seit · ab · zwischen":["seit · ab · zwischen","seit · ab · zwischen","seit · ab · zwischen","seit · ab · zwischen","seit · ab · zwischen","seit · ab · zwischen","seit · ab · zwischen"],"seit oder vor?":["¿seit o vor?","seit or vor?","seit чи vor?","seit mi, vor mu?","seit ili vor?","seit أم vor؟","seit 还是 vor？"],"wenn · als · wann":["wenn · als · wann","wenn · als · wann","wenn · als · wann","wenn · als · wann","wenn · als · wann","wenn · als · wann","wenn · als · wann"],"damit oder um … zu?":["¿damit o um … zu?","damit or um … zu?","damit чи um … zu?","damit mi, um … zu mu?","damit ili um … zu?","damit أم um … zu؟","damit 还是 um … zu？"],"Höflich im Büro":["Educación en la oficina","Politeness at the office","Ввічливість в офісі","Ofiste kibarlık","Ljubaznost u kancelariji","الأدب في المكتب","办公室里的礼貌用语"],"Genitiv:\nder Chef · die Firma":[`Genitivo:
der Chef · die Firma`,`Genitive:
der Chef · die Firma`,`Родовий відмінок:
der Chef · die Firma`,`Genitiv:
der Chef · die Firma`,`Genitiv:
der Chef · die Firma`,`حالة الإضافة (Genitiv):
der Chef · die Firma`,`第二格：
der Chef · die Firma`],"Passiv:\nwerden + …":[`Pasiva:
werden + …`,`Passive:
werden + …`,`Пасив:
werden + …`,`Edilgen:
werden + …`,`Pasiv:
werden + …`,`المبني للمجهول:
werden + …`,`被动态：
werden + ……`],"schnell · alt · groß\nteuer · hoch":[`schnell · alt · groß
teuer · hoch`,`schnell · alt · groß
teuer · hoch`,`schnell · alt · groß
teuer · hoch`,`schnell · alt · groß
teuer · hoch`,`schnell · alt · groß
teuer · hoch`,`schnell · alt · groß
teuer · hoch`,`schnell · alt · groß
teuer · hoch`],"als oder wie?":["¿als o wie?","als or wie?","als чи wie?","als mı, wie mi?","als ili wie?","als أم wie؟","als 还是 wie？"],"jemand · niemand\nim Akkusativ und Dativ":[`jemand · niemand
en acusativo y dativo`,`jemand · niemand
in the accusative and dative`,`jemand · niemand
у знахідному й давальному`,`Akkusativ ve Dativ'de
jemand · niemand`,`jemand · niemand
u akuzativu i dativu`,`jemand · niemand
في حالتي النصب والجر`,`第四格和第三格的
jemand · niemand`],"seit + …:\nWelche Zeitform?":[`seit + …:
¿qué tiempo verbal?`,`seit + …:
which tense?`,`seit + …:
який час?`,`seit + …:
hangi zaman?`,`seit + …:
koje vrijeme?`,`seit + …:
أي زمن؟`,`seit + ……：
用什么时态？`],"sich aufwärmen:\nWo steht was?":[`sich aufwärmen:
¿dónde va cada cosa?`,`sich aufwärmen:
what goes where?`,`sich aufwärmen:
що де стоїть?`,`sich aufwärmen:
ne nerede durur?`,`sich aufwärmen:
šta gdje stoji?`,`sich aufwärmen:
ما مكان كل جزء؟`,`sich aufwärmen：
各部分放在哪里？`],"sowohl … als auch\nentweder … oder\nweder … noch":[`sowohl … als auch
entweder … oder
weder … noch`,`sowohl … als auch
entweder … oder
weder … noch`,`sowohl … als auch
entweder … oder
weder … noch`,`sowohl … als auch
entweder … oder
weder … noch`,`sowohl … als auch
entweder … oder
weder … noch`,`sowohl … als auch
entweder … oder
weder … noch`,`sowohl … als auch
entweder … oder
weder … noch`],"Adjektiv ohne Artikel:\nSaft · Milch · Wasser":[`Adjetivo sin artículo:
Saft · Milch · Wasser`,`Adjective without an article:
Saft · Milch · Wasser`,`Прикметник без артикля:
Saft · Milch · Wasser`,`Artikelsiz sıfat:
Saft · Milch · Wasser`,`Pridjev bez člana:
Saft · Milch · Wasser`,`الصفة بدون أداة:
Saft · Milch · Wasser`,`无冠词的形容词：
Saft · Milch · Wasser`],"deswegen:\nWo steht das Verb?":[`deswegen:
¿dónde va el verbo?`,`deswegen:
where does the verb go?`,`deswegen:
де стоїть дієслово?`,`deswegen:
fiil nerede durur?`,`deswegen:
gdje stoji glagol?`,`deswegen:
أين يقع الفعل؟`,`deswegen：
动词放在哪里？`],"Drei Arten von Konnektoren":["Tres tipos de conectores","Three kinds of connectors","Три види сполучників","Üç tür bağlaç","Tri vrste veznika","ثلاثة أنواع من أدوات الربط","三种连接词"],"mein- im Dativ":["mein- en dativo","mein- in the dative","mein- у давальному відмінку","Dativ'de mein-","mein- u dativu","mein- في حالة الجر","第三格的 mein-"],"deshalb · darum · daher":["deshalb · darum · daher","deshalb · darum · daher","deshalb · darum · daher","deshalb · darum · daher","deshalb · darum · daher","deshalb · darum · daher","deshalb · darum · daher"],"weil oder deshalb?":["¿weil o deshalb?","weil or deshalb?","weil чи deshalb?","weil mi, deshalb mı?","weil ili deshalb?","weil أم deshalb؟","weil 还是 deshalb？"],"wenn:\nRegeln in der Schule":[`wenn:
normas en el colegio`,`wenn:
rules at school`,`wenn:
правила в школі`,`wenn:
okul kuralları`,`wenn:
pravila u školi`,`wenn:
قواعد المدرسة`,`wenn：
学校的规定`],"Modalverben im Präteritum":["Verbos modales en Präteritum","Modal verbs in the Präteritum","Модальні дієслова в Präteritum","Präteritum'da kip fiilleri","Modalni glagoli u preteritu","الأفعال المساعدة في الـPräteritum","情态动词的 Präteritum"],"der neue Lehrer\noder ein neuer Lehrer?":[`¿der neue Lehrer
o ein neuer Lehrer?`,`der neue Lehrer
or ein neuer Lehrer?`,`der neue Lehrer
чи ein neuer Lehrer?`,`der neue Lehrer mi,
ein neuer Lehrer mı?`,`der neue Lehrer
ili ein neuer Lehrer?`,`der neue Lehrer
أم ein neuer Lehrer؟`,`der neue Lehrer
还是 ein neuer Lehrer？`],"chs und x":["chs y x","chs and x","chs і x","chs ve x","chs i x","chs وx","chs 和 x"],"dass:\nWo steht das Verb?":[`dass:
¿dónde va el verbo?`,`dass:
where does the verb go?`,`dass:
де стоїть дієслово?`,`dass:
fiil nerede durur?`,`dass:
gdje stoji glagol?`,`dass:
أين يقع الفعل؟`,`dass：
动词放在哪里？`],"dass oder das?":["¿dass o das?","dass or das?","dass чи das?","dass mı, das mı?","dass ili das?","dass أم das؟","dass 还是 das？"],"trotzdem:\nWo steht das Verb?":[`trotzdem:
¿dónde va el verbo?`,`trotzdem:
where does the verb go?`,`trotzdem:
де стоїть дієслово?`,`trotzdem:
fiil nerede durur?`,`trotzdem:
gdje stoji glagol?`,`trotzdem:
أين يقع الفعل؟`,`trotzdem：
动词放在哪里？`],"obwohl · trotzdem · aber":["obwohl · trotzdem · aber","obwohl · trotzdem · aber","obwohl · trotzdem · aber","obwohl · trotzdem · aber","obwohl · trotzdem · aber","obwohl · trotzdem · aber","obwohl · trotzdem · aber"],"Die Meinung sagen":["Dar tu opinión","Giving your opinion","Висловити думку","Fikrini söylemek","Reći svoje mišljenje","إبداء الرأي","表达看法"],"Relativsatz:\nder Film, …":[`Oración de relativo:
der Film, …`,`Relative clause:
der Film, …`,`Означальне речення:
der Film, …`,`İlgi cümlesi:
der Film, …`,`Odnosna rečenica:
der Film, …`,`جملة الصلة:
der Film, …`,`关系从句：
der Film, ……`],"nicht nur … sondern auch":["nicht nur … sondern auch","nicht nur … sondern auch","nicht nur … sondern auch","nicht nur … sondern auch","nicht nur … sondern auch","nicht nur … sondern auch","nicht nur … sondern auch"],"aufhören zu · anfangen zu":["aufhören zu · anfangen zu","aufhören zu · anfangen zu","aufhören zu · anfangen zu","aufhören zu · anfangen zu","aufhören zu · anfangen zu","aufhören zu · anfangen zu","aufhören zu · anfangen zu"],"ei · ie · eu · äu · au":["ei · ie · eu · äu · au","ei · ie · eu · äu · au","ei · ie · eu · äu · au","ei · ie · eu · äu · au","ei · ie · eu · äu · au","ei · ie · eu · äu · au","ei · ie · eu · äu · au"],"Konjunktiv II:\nsein · haben · werden":[`Konjunktiv II:
sein · haben · werden`,`Konjunktiv II:
sein · haben · werden`,`Konjunktiv II:
sein · haben · werden`,`Konjunktiv II:
sein · haben · werden`,`Konjunktiv II:
sein · haben · werden`,`Konjunktiv II:
sein · haben · werden`,`第二虚拟式：
sein · haben · werden`],"würde + Infinitiv:\nWo steht was?":[`würde + infinitivo:
¿dónde va cada cosa?`,`würde + infinitive:
what goes where?`,`würde + інфінітив:
що де стоїть?`,`würde + mastar:
ne nerede durur?`,`würde + infinitiv:
šta gdje stoji?`,`würde + المصدر:
ما مكان كل جزء؟`,`würde + 不定式：
各部分放在哪里？`],"durch und entlang":["durch y entlang","durch and entlang","durch і entlang","durch ve entlang","durch i entlang","durch وentlang","durch 和 entlang"],"gegenüber · bis zu · an … vorbei":["gegenüber · bis zu · an … vorbei","gegenüber · bis zu · an … vorbei","gegenüber · bis zu · an … vorbei","gegenüber · bis zu · an … vorbei","gegenüber · bis zu · an … vorbei","gegenüber · bis zu · an … vorbei","gegenüber · bis zu · an … vorbei"],"Höflich fragen:\nKönnen Sie mir sagen, …?":[`Preguntar con educación:
Können Sie mir sagen, …?`,`Asking politely:
Können Sie mir sagen, …?`,`Ввічливо запитати:
Können Sie mir sagen, …?`,`Kibarca sormak:
Können Sie mir sagen, …?`,`Ljubazno pitati:
Können Sie mir sagen, …?`,`السؤال بأدب:
Können Sie mir sagen, …?`,`礼貌地询问：
Können Sie mir sagen, ……?`],"Zug · Auto · zu Fuß":["Zug · Auto · zu Fuß","Zug · Auto · zu Fuß","Zug · Auto · zu Fuß","Zug · Auto · zu Fuß","Zug · Auto · zu Fuß","Zug · Auto · zu Fuß","Zug · Auto · zu Fuß"],"Wenn …, dann …":["Wenn …, dann …","Wenn …, dann …","Wenn …, dann …","Wenn …, dann …","Wenn …, dann …","Wenn …, dann …","Wenn ……, dann ……"],"Sich höflich beschweren":["Quejarse con educación","Complaining politely","Ввічливо поскаржитися","Kibarca şikâyet etmek","Ljubazno se požaliti","الشكوى بأدب","礼貌地投诉"],"Wo?\noben · unten · vorn · hinten":[`¿Dónde?
oben · unten · vorn · hinten`,`Where?
oben · unten · vorn · hinten`,`Де?
oben · unten · vorn · hinten`,`Nerede?
oben · unten · vorn · hinten`,`Gdje?
oben · unten · vorn · hinten`,`أين؟
oben · unten · vorn · hinten`,`在哪里？
oben · unten · vorn · hinten`],"Wohin?\nrauf · runter · rein · raus · rüber":[`¿Adónde?
rauf · runter · rein · raus · rüber`,`Where to?
rauf · runter · rein · raus · rüber`,`Куди?
rauf · runter · rein · raus · rüber`,`Nereye?
rauf · runter · rein · raus · rüber`,`Kamo?
rauf · runter · rein · raus · rüber`,`إلى أين؟
rauf · runter · rein · raus · rüber`,`去哪里？
rauf · runter · rein · raus · rüber`],"oben oder rauf?\ndrinnen oder rein?":[`¿oben o rauf?
¿drinnen o rein?`,`oben or rauf?
drinnen or rein?`,`oben чи rauf?
drinnen чи rein?`,`oben mı, rauf mu?
drinnen mi, rein mi?`,`oben ili rauf?
drinnen ili rein?`,`oben أم rauf؟
drinnen أم rein؟`,`oben 还是 rauf？
drinnen 还是 rein？`],"aus · bei · mit · nach · von · zu":["aus · bei · mit · nach · von · zu","aus · bei · mit · nach · von · zu","aus · bei · mit · nach · von · zu","aus · bei · mit · nach · von · zu","aus · bei · mit · nach · von · zu","aus · bei · mit · nach · von · zu","aus · bei · mit · nach · von · zu"],"Wechselpräpositionen:\nwann Akkusativ, wann Dativ?":[`Preposiciones de doble régimen:
¿cuándo acusativo y cuándo dativo?`,`Two-way prepositions:
when accusative, when dative?`,`Прийменники з двома відмінками:
коли знахідний, а коли давальний?`,`Çift hâlli edatlar:
ne zaman Akkusativ, ne zaman Dativ?`,`Prijedlozi s dva padeža:
kad akuzativ, a kad dativ?`,`حروف الجر المزدوجة:
متى النصب ومتى الجر؟`,`双向介词：
什么时候第四格，什么时候第三格？`],"stellen · legen · hängen · setzen:\nund wo ist es dann?":[`stellen · legen · hängen · setzen:
¿y dónde está luego?`,`stellen · legen · hängen · setzen:
and where is it then?`,`stellen · legen · hängen · setzen:
і де воно потім?`,`stellen · legen · hängen · setzen:
sonra nerede durur?`,`stellen · legen · hängen · setzen:
i gdje je onda?`,`stellen · legen · hängen · setzen:
وأين يكون بعدها؟`,`stellen · legen · hängen · setzen：
然后它在哪里？`],"Imperativ:\nhalten · nehmen · hochheben":[`Imperativo:
halten · nehmen · hochheben`,`Imperative:
halten · nehmen · hochheben`,`Наказовий спосіб:
halten · nehmen · hochheben`,`Emir kipi:
halten · nehmen · hochheben`,`Imperativ:
halten · nehmen · hochheben`,`صيغة الأمر:
halten · nehmen · hochheben`,`命令式：
halten · nehmen · hochheben`],"etwas machen lassen":["etwas machen lassen","etwas machen lassen","etwas machen lassen","etwas machen lassen","etwas machen lassen","etwas machen lassen","etwas machen lassen"],"Indirekte Frage\nmit W-Wort":[`Pregunta indirecta
con W-Wort`,`Indirect question
with a W-word`,`Непряме питання
з W-словом`,`W-sözcüklü
dolaylı soru`,`Indirektno pitanje
sa W-riječju`,`السؤال غير المباشر
بأداة استفهام W`,`带疑问词的
间接疑问句`],"Indirekte Frage:\nzwei Verbteile":[`Pregunta indirecta:
dos partes del verbo`,`Indirect question:
two verb parts`,`Непряме питання:
дві частини дієслова`,`Dolaylı soru:
fiilin iki parçası`,`Indirektno pitanje:
dva dijela glagola`,`السؤال غير المباشر:
جزءان من الفعل`,`间接疑问句：
动词的两个部分`],"Modalverb im Präteritum:\nWo steht der Infinitiv?":[`Verbo modal en Präteritum:
¿dónde va el infinitivo?`,`Modal verb in the Präteritum:
where does the infinitive go?`,`Модальне дієслово в Präteritum:
де стоїть інфінітив?`,`Präteritum'da kip fiili:
mastar nerede durur?`,`Modalni glagol u preteritu:
gdje stoji infinitiv?`,`الفعل المساعد في الـPräteritum:
أين يقع المصدر؟`,`Präteritum 的情态动词：
不定式放在哪里？`],"Hast du eine Leiter?\nHast du einen Hammer?":[`Hast du eine Leiter?
Hast du einen Hammer?`,`Hast du eine Leiter?
Hast du einen Hammer?`,`Hast du eine Leiter?
Hast du einen Hammer?`,`Hast du eine Leiter?
Hast du einen Hammer?`,`Hast du eine Leiter?
Hast du einen Hammer?`,`Hast du eine Leiter?
Hast du einen Hammer?`,`Hast du eine Leiter?
Hast du einen Hammer?`],"einer · eine · eins:\nverneint":[`einer · eine · eins:
en negativo`,`einer · eine · eins:
in the negative`,`einer · eine · eins:
із запереченням`,`einer · eine · eins:
olumsuz hâli`,`einer · eine · eins:
u negaciji`,`einer · eine · eins:
في النفي`,`einer · eine · eins：
否定形式`],"Hilfe anbieten":["Ofrecer ayuda","Offering help","Запропонувати допомогу","Yardım teklif etmek","Ponuditi pomoć","عرض المساعدة","主动帮忙"],"ja, nein oder doch?\nKommst du nicht?":[`¿ja, nein o doch?
Kommst du nicht?`,`ja, nein or doch?
Kommst du nicht?`,`ja, nein чи doch?
Kommst du nicht?`,`ja, nein mi, doch mu?
Kommst du nicht?`,`ja, nein ili doch?
Kommst du nicht?`,`ja أم nein أم doch؟
Kommst du nicht?`,`ja、nein 还是 doch？
Kommst du nicht?`],einander:["einander","einander","einander","einander","einander","einander","einander"],"Es ist verboten, …":["Es ist verboten, …","Es ist verboten, …","Es ist verboten, …","Es ist verboten, …","Es ist verboten, …","Es ist verboten, …","Es ist verboten, ……"],"warten · achten · sich kümmern\ndenken: welche Präposition?":[`warten · achten · sich kümmern
denken: ¿qué preposición?`,`warten · achten · sich kümmern
denken: which preposition?`,`warten · achten · sich kümmern
denken: який прийменник?`,`warten · achten · sich kümmern
denken: hangi edat?`,`warten · achten · sich kümmern
denken: koji prijedlog?`,`warten · achten · sich kümmern
denken: أي حرف جر؟`,`warten · achten · sich kümmern
denken：用哪个介词？`],"leiden · sich erholen · teilnehmen\nAngst haben: welche Präposition?":[`leiden · sich erholen · teilnehmen
Angst haben: ¿qué preposición?`,`leiden · sich erholen · teilnehmen
Angst haben: which preposition?`,`leiden · sich erholen · teilnehmen
Angst haben: який прийменник?`,`leiden · sich erholen · teilnehmen
Angst haben: hangi edat?`,`leiden · sich erholen · teilnehmen
Angst haben: koji prijedlog?`,`leiden · sich erholen · teilnehmen
Angst haben: أي حرف جر؟`,`leiden · sich erholen · teilnehmen
Angst haben：用哪个介词？`],"Worauf? oder Auf wen?":["¿Worauf? o ¿Auf wen?","Worauf? or Auf wen?","Worauf? чи Auf wen?","Worauf? mu, Auf wen? mi?","Worauf? ili Auf wen?","Worauf? أم Auf wen?","Worauf? 还是 Auf wen?"],"darauf oder auf ihn?":["¿darauf o auf ihn?","darauf or auf ihn?","darauf чи auf ihn?","darauf mu, auf ihn mi?","darauf ili auf ihn?","darauf أم auf ihn؟","darauf 还是 auf ihn？"],"behandeln · untersuchen · sich erholen\n→ Nomen":[`behandeln · untersuchen · sich erholen
→ sustantivo`,`behandeln · untersuchen · sich erholen
→ noun`,`behandeln · untersuchen · sich erholen
→ іменник`,`behandeln · untersuchen · sich erholen
→ isim`,`behandeln · untersuchen · sich erholen
→ imenica`,`behandeln · untersuchen · sich erholen
→ اسم`,`behandeln · untersuchen · sich erholen
→ 名词`],"Einen Termin ändern":["Cambiar una cita","Changing an appointment","Перенести зустріч","Randevuyu değiştirmek","Promijeniti termin","تغيير موعد","更改预约"],"Hoffnung ausdrücken":["Expresar esperanza","Expressing hope","Висловити надію","Umut ifade etmek","Izraziti nadu","التعبير عن الأمل","表达希望"],"Eine Bitte weitergeben":["Transmitir un recado","Passing on a request","Передати прохання","Bir ricayı iletmek","Prenijeti molbu","نقل طلب","转达请求"],"könnte\n(Konjunktiv II)":[`könnte
(Konjunktiv II)`,`könnte
(Konjunktiv II)`,`könnte
(Konjunktiv II)`,`könnte
(Konjunktiv II)`,`könnte
(Konjunktiv II)`,`könnte
(Konjunktiv II)`,`könnte
（第二虚拟式）`],"Einen Vorschlag machen":["Hacer una propuesta","Making a suggestion","Зробити пропозицію","Öneride bulunmak","Dati prijedlog","تقديم اقتراح","提出建议"],"könnte:\nWo steht der Infinitiv?":[`könnte:
¿dónde va el infinitivo?`,`könnte:
where does the infinitive go?`,`könnte:
де стоїть інфінітив?`,`könnte:
mastar nerede durur?`,`könnte:
gdje stoji infinitiv?`,`könnte:
أين يقع المصدر؟`,`könnte：
不定式放在哪里？`],"sich interessieren · sich bewerben\nsich erkundigen":[`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren · sich bewerben
sich erkundigen`],"Wo steht sich?":["¿Dónde va sich?","Where does sich go?","Де стоїть sich?","sich nerede durur?","Gdje stoji sich?","أين يقع sich؟","sich 放在哪里？"],"fahren · pflegen · beraten\n→ Person":[`fahren · pflegen · beraten
→ persona`,`fahren · pflegen · beraten
→ person`,`fahren · pflegen · beraten
→ людина`,`fahren · pflegen · beraten
→ kişi`,`fahren · pflegen · beraten
→ osoba`,`fahren · pflegen · beraten
→ الشخص`,`fahren · pflegen · beraten
→ 人`],"Was ich gut kann":["Lo que sé hacer bien","What I'm good at","Що я вмію добре","İyi yaptığım şeyler","Šta dobro znam","ما أجيده","我擅长的事"],"Zeit im Lebenslauf":["Fechas en el currículum","Dates in a CV","Час у резюме","Özgeçmişte zaman","Vrijeme u biografiji","التواريخ في السيرة الذاتية","简历中的时间"],"Adjektiv im Dativ\nnach dem · der · den":[`Adjetivo en dativo
después de dem · der · den`,`Adjective in the dative
after dem · der · den`,`Прикметник у давальному
після dem · der · den`,`Dativ'de sıfat
dem · der · den'den sonra`,`Pridjev u dativu
iza dem · der · den`,`الصفة في حالة الجر
بعد dem · der · den`,`第三格形容词
在 dem · der · den 后`],"Adjektiv nach dieser, jeder,\nwelcher, alle":[`Adjetivo después de dieser, jeder,
welcher, alle`,`Adjective after dieser, jeder,
welcher, alle`,`Прикметник після dieser, jeder,
welcher, alle`,`dieser, jeder, welcher, alle'den
sonra sıfat`,`Pridjev iza dieser, jeder,
welcher, alle`,`الصفة بعد dieser وjeder
وwelcher وalle`,`dieser、jeder、welcher、alle
后的形容词`],"Superlativ vor dem Nomen:\nschön · hoch · gut":[`Superlativo delante del sustantivo:
schön · hoch · gut`,`Superlative before the noun:
schön · hoch · gut`,`Найвищий ступінь перед іменником:
schön · hoch · gut`,`İsimden önce üstünlük derecesi:
schön · hoch · gut`,`Superlativ ispred imenice:
schön · hoch · gut`,`صيغة التفضيل قبل الاسم:
schön · hoch · gut`,`名词前的最高级：
schön · hoch · gut`],"Wien · Salzburg · Graz\nals Adjektiv":[`Wien · Salzburg · Graz
como adjetivo`,`Wien · Salzburg · Graz
as an adjective`,`Wien · Salzburg · Graz
як прикметник`,`Sıfat olarak
Wien · Salzburg · Graz`,`Wien · Salzburg · Graz
kao pridjev`,`Wien · Salzburg · Graz
كصفة`,`Wien · Salzburg · Graz
作形容词`],"Himmelsrichtungen:\nwo? wohin? woher?":[`Puntos cardinales:
¿wo? ¿wohin? ¿woher?`,`Points of the compass:
wo? wohin? woher?`,`Сторони світу:
wo? wohin? woher?`,`Yönler:
wo? wohin? woher?`,`Strane svijeta:
wo? wohin? woher?`,`الجهات الأربع:
wo? wohin? woher?`,`方位：
wo? wohin? woher?`],"Einen Plan vorschlagen":["Proponer un plan","Suggesting a plan","Запропонувати план","Bir plan önermek","Predložiti plan","اقتراح خطة","提议计划"],Bedauern:["Lamentar algo","Expressing regret","Висловити жаль","Üzüntü bildirmek","Izraziti žaljenje","التعبير عن الأسف","表示遗憾"],"sollen:\nDas habe ich gehört":[`sollen:
lo he oído`,`sollen:
I've heard that`,`sollen:
я це чув`,`sollen:
bunu duydum`,`sollen:
to sam čuo`,`sollen:
سمعت ذلك`,`sollen：
我听说的`],"Relativpronomen\nim Akkusativ":[`Pronombres relativos
en acusativo`,`Relative pronouns
in the accusative`,`Відносні займенники
у знахідному відмінку`,`Akkusativ'de
ilgi zamirleri`,`Odnosne zamjenice
u akuzativu`,`الأسماء الموصولة
في حالة النصب`,`第四格的
关系代词`],"Relativpronomen\nim Dativ":[`Pronombres relativos
en dativo`,`Relative pronouns
in the dative`,`Відносні займенники
у давальному відмінку`,`Dativ'de
ilgi zamirleri`,`Odnosne zamjenice
u dativu`,`الأسماء الموصولة
في حالة الجر`,`第三格的
关系代词`],"Relativsatz mit Präposition":["Oración de relativo con preposición","Relative clause with a preposition","Означальне речення з прийменником","Edatlı ilgi cümlesi","Odnosna rečenica s prijedlogom","جملة الصلة مع حرف جر","带介词的关系从句"],"Komparativ vor dem Nomen":["Comparativo delante del sustantivo","Comparative before the noun","Вищий ступінь перед іменником","İsimden önce karşılaştırma derecesi","Komparativ ispred imenice","صيغة المقارنة قبل الاسم","名词前的比较级"],"Passiv mit Modalverb":["Pasiva con verbo modal","Passive with a modal verb","Пасив із модальним дієсловом","Kip fiiliyle edilgen","Pasiv s modalnim glagolom","المبني للمجهول مع فعل مساعد","带情态动词的被动态"],"waschbar · faltbar · essbar":["waschbar · faltbar · essbar","waschbar · faltbar · essbar","waschbar · faltbar · essbar","waschbar · faltbar · essbar","waschbar · faltbar · essbar","waschbar · faltbar · essbar","waschbar · faltbar · essbar"],"der Kunde, der Kollege, der Herr:\nim Akkusativ und Dativ":[`der Kunde, der Kollege, der Herr:
en acusativo y dativo`,`der Kunde, der Kollege, der Herr:
in the accusative and dative`,`der Kunde, der Kollege, der Herr:
у знахідному й давальному`,`der Kunde, der Kollege, der Herr:
Akkusativ ve Dativ'de`,`der Kunde, der Kollege, der Herr:
u akuzativu i dativu`,`der Kunde, der Kollege, der Herr:
في حالتي النصب والجر`,`der Kunde, der Kollege, der Herr：
第四格和第三格`],"Material:\nHolz · Gold · Glas":[`Material:
Holz · Gold · Glas`,`Material:
Holz · Gold · Glas`,`Матеріал:
Holz · Gold · Glas`,`Malzeme:
Holz · Gold · Glas`,`Materijal:
Holz · Gold · Glas`,`المادة:
Holz · Gold · Glas`,`材料：
Holz · Gold · Glas`],"Passiv im Präteritum":["Pasiva en Präteritum","Passive in the Präteritum","Пасив у Präteritum","Präteritum'da edilgen","Pasiv u preteritu","المبني للمجهول في الـPräteritum","Präteritum 的被动态"],"Der Brief wird frankiert.\nDer Brief ist frankiert.":[`Der Brief wird frankiert.
Der Brief ist frankiert.`,`Der Brief wird frankiert.
Der Brief ist frankiert.`,`Der Brief wird frankiert.
Der Brief ist frankiert.`,`Der Brief wird frankiert.
Der Brief ist frankiert.`,`Der Brief wird frankiert.
Der Brief ist frankiert.`,`Der Brief wird frankiert.
Der Brief ist frankiert.`,`Der Brief wird frankiert.
Der Brief ist frankiert.`],"bevor:\nWo steht das Verb?":[`bevor:
¿dónde va el verbo?`,`bevor:
where does the verb go?`,`bevor:
де стоїть дієслово?`,`bevor:
fiil nerede durur?`,`bevor:
gdje stoji glagol?`,`bevor:
أين يقع الفعل؟`,`bevor：
动词放在哪里？`],"bis · seit(dem)\nals Konjunktion":[`bis · seit(dem)
como conjunción`,`bis · seit(dem)
as a conjunction`,`bis · seit(dem)
як сполучник`,`Bağlaç olarak
bis · seit(dem)`,`bis · seit(dem)
kao veznik`,`bis · seit(dem)
كأداة ربط`,`bis · seit(dem)
作连词`],während:["während","während","während","während","während","während","während"],"wegen · trotz\ninnerhalb · außerhalb":[`wegen · trotz
innerhalb · außerhalb`,`wegen · trotz
innerhalb · außerhalb`,`wegen · trotz
innerhalb · außerhalb`,`wegen · trotz
innerhalb · außerhalb`,`wegen · trotz
innerhalb · außerhalb`,`wegen · trotz
innerhalb · außerhalb`,`wegen · trotz
innerhalb · außerhalb`],"nicht müssen\n= nicht brauchen zu":[`nicht müssen
= nicht brauchen zu`,`nicht müssen
= nicht brauchen zu`,`nicht müssen
= nicht brauchen zu`,`nicht müssen
= nicht brauchen zu`,`nicht müssen
= nicht brauchen zu`,`nicht müssen
= nicht brauchen zu`,`nicht müssen
= nicht brauchen zu`],Anleitungen:["Instrucciones","Instructions","Інструкції","Talimatlar","Uputstva","التعليمات","使用说明"],Plusquamperfekt:["Pluscuamperfecto","Past perfect (Plusquamperfekt)","Давноминулий час (Plusquamperfekt)","Geçmişin geçmişi (Plusquamperfekt)","Pluskvamperfekt","الماضي التام (Plusquamperfekt)","过去完成时"],"nachdem:\nwelche Zeitformen?":[`nachdem:
¿qué tiempos verbales?`,`nachdem:
which tenses?`,`nachdem:
які часи?`,`nachdem:
hangi zamanlar?`,`nachdem:
koja vremena?`,`nachdem:
أي أزمنة؟`,`nachdem：
用什么时态？`],"sobald und solange":["sobald y solange","sobald and solange","sobald і solange","sobald ve solange","sobald i solange","sobald وsolange","sobald 和 solange"],"als oder immer wenn?\nin der Vergangenheit":[`¿als o immer wenn?
en el pasado`,`als or immer wenn?
in the past`,`als чи immer wenn?
у минулому`,`als mı, immer wenn mi?
geçmişte`,`als ili immer wenn?
u prošlosti`,`als أم immer wenn؟
في الماضي`,`als 还是 immer wenn？
在过去`],"früher · damals\ninzwischen · heutzutage":[`früher · damals
inzwischen · heutzutage`,`früher · damals
inzwischen · heutzutage`,`früher · damals
inzwischen · heutzutage`,`früher · damals
inzwischen · heutzutage`,`früher · damals
inzwischen · heutzutage`,`früher · damals
inzwischen · heutzutage`,`früher · damals
inzwischen · heutzutage`],"Zeit ohne Präposition":["Tiempo sin preposición","Time without a preposition","Час без прийменника","Edatsız zaman","Vrijeme bez prijedloga","الزمن بدون حرف جر","不带介词的时间"],"Jahreszahlen:\n1990 · 2024":[`Años:
1990 · 2024`,`Years:
1990 · 2024`,`Роки:
1990 · 2024`,`Yıllar:
1990 · 2024`,`Godine:
1990 · 2024`,`السنوات:
1990 · 2024`,`年份：
1990 · 2024`],Glückwünsche:["Felicitaciones","Congratulations and wishes","Привітання й побажання","Tebrikler ve dilekler","Čestitke","التهاني","祝贺"],"Beträge und Zahlen:\n4,90 € · 2,5 % · 3/4":[`Importes y cifras:
4,90 € · 2,5 % · 3/4`,`Amounts and figures:
4,90 € · 2,5 % · 3/4`,`Суми й числа:
4,90 € · 2,5 % · 3/4`,`Tutarlar ve sayılar:
4,90 € · 2,5 % · 3/4`,`Iznosi i brojevi:
4,90 € · 2,5 % · 3/4`,`المبالغ والأرقام:
4,90 € · 2,5 % · 3/4`,`金额和数字：
4,90 € · 2,5 % · 3/4`],"falls oder wenn?":["¿falls o wenn?","falls or wenn?","falls чи wenn?","falls mı, wenn mi?","falls ili wenn?","falls أم wenn؟","falls 还是 wenn？"],"ohne … zu · statt … zu":["ohne … zu · statt … zu","ohne … zu · statt … zu","ohne … zu · statt … zu","ohne … zu · statt … zu","ohne … zu · statt … zu","ohne … zu · statt … zu","ohne … zu · statt … zu"],"Verb als Nomen:\nbeim … · zum …":[`Verbo como sustantivo:
beim … · zum …`,`Verb as a noun:
beim … · zum …`,`Дієслово як іменник:
beim … · zum …`,`İsim olarak fiil:
beim … · zum …`,`Glagol kao imenica:
beim … · zum …`,`الفعل كاسم:
beim … · zum …`,`动词名词化：
beim …… · zum ……`],"der Angestellte\nein Angestellter":[`der Angestellte
ein Angestellter`,`der Angestellte
ein Angestellter`,`der Angestellte
ein Angestellter`,`der Angestellte
ein Angestellter`,`der Angestellte
ein Angestellter`,`der Angestellte
ein Angestellter`,`der Angestellte
ein Angestellter`],"leihen · sich leihen · schulden":["leihen · sich leihen · schulden","leihen · sich leihen · schulden","leihen · sich leihen · schulden","leihen · sich leihen · schulden","leihen · sich leihen · schulden","leihen · sich leihen · schulden","leihen · sich leihen · schulden"],"mal · denn · ja · eben":["mal · denn · ja · eben","mal · denn · ja · eben","mal · denn · ja · eben","mal · denn · ja · eben","mal · denn · ja · eben","mal · denn · ja · eben","mal · denn · ja · eben"],"irgend-":["irgend-","irgend-","irgend-","irgend-","irgend-","irgend-","irgend-"]};function le(a,t=G()){var l;const s=he.indexOf(t);return s>=0&&((l=de[a])==null?void 0:l[s])||a}const L={"kb-a11-start":[[`Nomen:
groß oder klein?`,`immer groß:
der Tisch · das Buch · die Zeit`,"Der Hund schläft im Garten."],["du oder Sie?",`du: Freunde, Familie, Kinder
Sie: Fremde, Amt, Arbeit
Sie schreibt man immer groß`,"Wie heißen Sie, bitte?"],[`Zahlen ab 21:
21 · 35 · 99`,`einundzwanzig
fünfunddreißig
neunundneunzig`,"Ich bin einunddreißig Jahre alt."],["ei oder ie?",`ei klingt «ai»: Wein, mein, drei
ie ist ein langes i: Bier, Wien, vier`,"Mein Freund wohnt in Wien."],[`der, die, das:
und im Plural?`,`im Plural immer die:
das Kind → die Kinder
der Tisch → die Tische`,"Die Kinder spielen im Park."],[`Verbendungen:
wohnen`,"Endungen: -e · -st · -t · -en · -t · -en","Ich wohne in Wien.",{cab:["","wohnen"],filas:[["ich","wohne"],["du","wohnst"],["er / sie / es","wohnt"],["wir","wohnen"],["ihr","wohnt"],["sie / Sie","wohnen"]]}],[`Adjektiv nach sein:
mit Endung?`,`nie:
das Auto ist neu
die Häuser sind neu`,"Die Wohnung ist klein, aber schön."],[`Wo steht das Verb?
Aussage · W-Frage · Ja/Nein-Frage`,`Aussage: Position 2
W-Frage: Position 2
Ja/Nein-Frage: Position 1`,"Wohnst du hier?"],[`Wortakzent:
Wo liegt er meistens?`,`auf der ersten Silbe: ARbeiten, LEHrerin
aber: verSTEhen, StuDENT, AUFstehen`,"Ich verstehe das nicht."],[`Vokal lang oder kurz?
Boot · Name · Mutter · Stadt`,`lang: Boot, Tee, Uhr, Name
kurz vor zwei Konsonanten:
Mutter, kommen, Stadt`,"Die Stadt ist sehr schön."],[`b, d, g am Wortende:
Hund · Tag · halb`,`klingen wie p, t, k:
«Hunt», «Tak», «halp»
aber: die Hunde, die Tage`,"Der Hund ist groß."],[`Satzmelodie:
Aussage · Ja/Nein-Frage · W-Frage`,`Aussage ↘
Ja/Nein-Frage ↗
W-Frage ↘`,"Woher kommst du?"]],"kb-a11-l1":[["aus oder in?",`aus: woher du kommst
in: wo du wohnst`,"Ich komme aus Spanien und wohne in Wien."],["Personalpronomen",`ich · du · er / sie / es
wir · ihr · sie / Sie`,"Wie heißen Sie?",{cab:["","Singular","Plural"],filas:[["1. Person","ich","wir"],["2. Person","du","ihr"],["3. Person","er / sie / es","sie"],["höflich","Sie","Sie"]]}],["sein im Präsens",`ganz unregelmäßig:
bin · bist · ist · sind · seid · sind`,"Wir sind aus Syrien.",{cab:["","sein"],filas:[["ich","bin"],["du","bist"],["er / sie / es","ist"],["wir","sind"],["ihr","seid"],["sie / Sie","sind"]]}],[`heißen:
du … · er …`,`du heißt · er heißt
nur -t, kein -st`,"Er heißt Samir."],[`W-Frage:
Wo steht das Verb?`,`auf Position 2:
Wo wohnst du? · Woher kommst du?`,"Woher kommt Zofia?"],["wo · woher · wohin",`wo? → in Wien
woher? → aus Spanien
wohin? → nach Graz`,"Wohin fährst du?"],[`ch:
ich · Buch · sechs`,`nach i, e, ä, ö, ü: weich (ich, mich)
nach a, o, u, au: hart (Buch, acht)
chs = «ks»: sechs`,"Ich spreche nicht viel Deutsch."],["Länder mit Artikel",`die Schweiz · die Türkei · die Ukraine
der Iran · die USA
aus der Schweiz · in der Türkei`,"Meine Mutter kommt aus der Türkei."],[`Land · Sprache · Person:
Spanien`,`Spanien · Spanisch
der Spanier · die Spanierin`,"Ich komme aus Polen und spreche Polnisch."]],"kb-a11-l2":[[`wir und ihr:
welche Endung?`,`wir wohnen: -en
ihr wohnt: -t`,"Woher kommt ihr?"],[`Ja/Nein-Frage:
Wo steht das Verb?`,`auf Position 1:
Sprichst du Deutsch? – Ja. / Nein.`,"Wohnen Sie auch da?"],[`sprechen:
du … · er …`,`du sprichst · er spricht
e → i`,"Er spricht Türkisch und Deutsch."],["haben im Präsens","du hast · er hat: ohne b!","Ich habe eine Tochter.",{cab:["","haben"],filas:[["ich","habe"],["du","hast"],["er / sie / es","hat"],["wir","haben"],["ihr","habt"],["sie / Sie","haben"]]}],["sch · sp · st",`sch klingt wie in «Show»
am Wortanfang: sp = «schp», st = «scht»
sprechen · Stadt`,"Die Straße ist in der Stadt."],[`Die Adresse:
Straße und Stock`,`in der … Straße / Gasse
im dritten Stock
mit Nummer ohne Präposition: Ungargasse 12`,"Wir wohnen im vierten Stock."],[`Ordinalzahlen:
1. · 3. · 7. · 20.`,`der erste · der dritte
der siebte · der zwanzigste`,"Sie wohnt im ersten Stock."],["Höflich bitten",`Können Sie das bitte wiederholen?
Kannst du bitte langsamer sprechen?
der Infinitiv am Ende`,"Können Sie das bitte buchstabieren?"],["-e und -en am Wortende",`-e ist schwach: Name, bitte
bei -en hört man das e kaum: haben`,"Wie ist Ihr Name, bitte?"],[`haben und sein:
Präsens und Präteritum`,`Präteritum = Vergangenheit:
ich war · ich hatte`,"Gestern war ich krank und hatte Fieber.",{cab:["","sein","Prät.","haben","Prät."],filas:[["ich","bin","war","habe","hatte"],["du","bist","warst","hast","hattest"],["er / sie / es","ist","war","hat","hatte"],["wir","sind","waren","haben","hatten"],["ihr","seid","wart","habt","hattet"],["sie / Sie","sind","waren","haben","hatten"]],color:!0}]],"kb-a11-l3":[[`der, die oder das?
-ung · -heit · -keit · -ion`,`die:
die Wohnung · die Freiheit
die Information`,"Die Wohnung ist neu."],[`der, die oder das?
-chen · -lein`,`das:
das Mädchen · das Brötchen`,"Das Brötchen ist frisch."],[`der, die oder das?
Tage · Monate · Jahreszeiten`,`der:
der Montag · der Mai · der Sommer`,"Der Montag ist immer lang."],[`Pronomen für Sachen:
der Schlüssel · die Brille · das Handy`,`er · sie · es
im Plural: sie`,"Wo ist die Brille? – Sie ist da."],[`arbeiten:
du … · er …`,`du arbeitest · er arbeitet
nach t und d ein -e-`,"Du arbeitest in einem Büro."],[`Beruf, weiblich:
Lehrer · Arzt · Koch`,`die Lehrerin · die Ärztin · die Köchin
Plural: -innen`,"Meine Mutter ist Ärztin."],[`als + Beruf:
mit Artikel?`,"nein, ohne Artikel","Ich arbeite als Kellner."],[`Wo arbeitest du?
bei …`,`bei + Firma oder Person:
bei Siemens · bei meinem Onkel`,"Sie arbeitet bei Siemens."],[`nicht:
Wo steht es?`,`am Ende
oder vor dem, was man verneint`,"Das ist nicht mein Kuli."],["z · s · ß",`z = «ts»: Zeit
s vor Vokal ist weich: Sonne
ß ist scharf: Straße`,"Die Sonne scheint."]],"kb-a11-l4":[[`Wessen Bruder?
Maria + Bruder`,`Marias Bruder
nur -s, ohne Apostroph`,"Das ist Ahmets Familie."],[`Possessivartikel:
ich · du · er · sie`,"vor die und im Plural mit -e: meine","Das ist mein Bruder und meine Schwester.",{cab:["","der / das","die / Plural"],filas:[["ich","mein","meine"],["du","dein","deine"],["er / es","sein","seine"],["sie","ihr","ihre"]]}],[`Possessivartikel:
wir · ihr · sie / Sie`,"vor die und im Plural mit -e","Ist das eure Wohnung?",{cab:["","der / das","die / Plural"],filas:[["wir","unser","unsere"],["ihr","euer","eure"],["sie","ihr","ihre"],["Sie","Ihr","Ihre"]]}],["ein oder eine?","im Plural gibt es kein «ein»","Ich habe eine Schwester.",{cab:["","bestimmt","unbestimmt","verneint"],filas:[["der","der Bruder","ein Bruder","kein Bruder"],["die","die Schwester","eine Schwester","keine Schwester"],["das","das Kind","ein Kind","kein Kind"],["Plural","die Kinder","– Kinder","keine Kinder"]]}],["kein oder nicht?",`kein vor einem Nomen: kein Problem
nicht beim Verb: Ich arbeite nicht.`,"Ich habe keine Geschwister."],[`und · oder · aber · denn · sondern:
Wo steht das Verb?`,`wie immer, auf Position 2:
…, denn ich bin krank.`,"Kommst du heute oder morgen?"],["ä · ö · ü",`ä wie e: spät
ö: Lippen wie bei o, sag e: schön
ü: Lippen wie bei u, sag i: müde`,"Die Wohnung ist schön."],["Wessen …? im Alltag",`von + Dativ:
der Mann von meiner Schwester
die Tochter von Thomas`,"Das ist der Mann von meiner Schwester."],[`Das Alter:
sein oder haben?`,`sein:
Ich bin 32 (Jahre alt).
Wie alt bist du?`,"Mein Opa ist achtzig Jahre alt."]],"kb-a11-l6":[[`essen und nehmen:
du … · er …`,`du isst · er isst
du nimmst · er nimmt`,"Was nimmst du? – Ich nehme die Suppe."],["mögen und möchte","ich und er: gleich, ohne -t","Ich möchte einen Kaffee, bitte.",{cab:["","mögen","möchte"],filas:[["ich","mag","möchte"],["du","magst","möchtest"],["er / sie / es","mag","möchte"],["wir","mögen","möchten"],["ihr","mögt","möchtet"],["sie / Sie","mögen","möchten"]]}],[`Akkusativ:
Was ändert sich?`,"nur bei der ändert sich etwas","Ich möchte einen Apfel.",{cab:["","Nominativ","Akkusativ"],filas:[["der","der · ein Apfel","den · einen Apfel"],["die","die · eine Suppe","die · eine Suppe"],["das","das · ein Brot","das · ein Brot"],["Plural","die Äpfel","die Äpfel"]]}],["kein im Akkusativ","wie ein, im Plural: keine","Ich esse keinen Fisch.",{cab:["","Nominativ","Akkusativ"],filas:[["der","kein Fisch","keinen Fisch"],["die","keine Suppe","keine Suppe"],["das","kein Brot","kein Brot"],["Plural","keine Äpfel","keine Äpfel"]]}],[`Komposita:
Welcher Artikel?`,`der Artikel des letzten Wortes:
der Apfel + der Saft = der Apfelsaft
das Haus + die Tür = die Haustür`,"Ich trinke gern Apfelsaft."],[`mit und ohne:
Welcher Fall?`,`mit + Dativ
ohne + Akkusativ`,"Einen Kaffee mit Milch, bitte."],["eu · äu · au",`eu und äu klingen «oi»: neu, Häuser, Deutsch
au klingt «au»: Haus`,"Neun Leute sind heute hier."],[`Mengen:
2 kg Erdäpfel · 3 Stück Kuchen`,`zwei Kilo Erdäpfel · drei Stück Kuchen
die Menge im Singular, ohne «von»`,"Ich hätte gern zwei Kilo Erdäpfel."],[`Lebensmittel allgemein:
mit Artikel?`,`nein: Ich kaufe Brot. Ich trinke Kaffee.
mit Menge: ein Glas Wasser`,"Ich trinke morgens Kaffee."]],"kb-a11-l5":[["um · am · im · von … bis","","Am Freitag um 18 Uhr habe ich Zeit.",{cab:["","für","Beispiel"],filas:[["um","die Uhrzeit","um 8 Uhr"],["am","Tage, Tageszeiten","am Montag · am Abend"],["im","Monate, Jahreszeiten","im Mai · im Winter"],["von … bis","von wann bis wann","von 9 bis 17 Uhr"]]}],[`Die Zeit am Satzanfang:
Wo steht das Verb?`,`auf Position 2, das Subjekt danach:
Um 7 Uhr stehe ich auf.`,"Um 7 Uhr stehe ich auf."],[`Trennbare Verben:
aufstehen · einkaufen`,`das Präfix geht ans Ende:
Ich stehe um 7 Uhr auf.
Wir kaufen am Samstag ein.`,"Wann stehst du auf?"],[`schlafen · fahren · sehen:
du … · er …`,`du schläfst · er schläft
du fährst · er fährt
du siehst · er sieht`,"Er sieht am Abend fern."],[`zuerst, dann, nachher
am Satzanfang`,`das Verb gleich danach:
Zuerst frühstücke ich, dann fahre ich zur Arbeit.`,"Zuerst frühstücke ich."],["v und w",`w klingt wie das v in «Video»: Wien, Wasser
v klingt wie f: Vater, vier`,"Mein Vater trinkt Wasser."],[`14:30
offiziell und im Alltag`,`vierzehn Uhr dreißig
halb drei`,"Wir treffen uns um halb drei."],[`halb drei · Viertel nach zwei
Viertel vor drei`,"im Alltag sagt man:","Der Kurs beginnt um Viertel nach neun.",{cab:["","im Alltag"],filas:[["2:05","fünf nach zwei"],["2:15","Viertel nach zwei"],["2:30","halb drei"],["2:45","Viertel vor drei"],["2:55","fünf vor drei"]]}],[`Zeit und Ort:
Was kommt zuerst?`,`zuerst die Zeit, dann der Ort:
Ich fahre morgen nach Graz.`,"Wir treffen uns um acht im Café."],["Über die Zukunft sprechen",`meistens Präsens + eine Zeitangabe:
Nächste Woche habe ich frei.`,"Im Sommer fahren wir ans Meer."]],"kb-a11-l8":[[`können und wollen
im Präsens`,`ich und er: gleich, ohne -t
wir und sie: wie der Infinitiv`,"Willst du mitkommen?",{cab:["","können","wollen"],filas:[["ich","kann","will"],["du","kannst","willst"],["er / sie / es","kann","will"],["wir","können","wollen"],["ihr","könnt","wollt"],["sie / Sie","können","wollen"]]}],[`Satzklammer:
Modalverb und Infinitiv`,`das Modalverb auf Position 2
der Infinitiv ganz am Ende`,"Ich kann am Wochenende Fußball spielen."],[`jeder · jede · jedes:
Tag · Woche · Jahr`,`jeder Tag · jede Woche · jedes Jahr
im Akkusativ: jeden Tag`,"Ich gehe jeden Tag laufen."],["-er und -ig am Wortende",`-er klingt wie ein schwaches a: Vater, Mutter
-ig klingt «ich» (oft «ik»): wichtig`,"Das ist sehr wichtig."],["gern · lieber · am liebsten",`Ich spiele gern Fußball.
Ich schwimme lieber.
Am liebsten tanze ich.`,"Im Winter gehe ich lieber schwimmen."],[`Fußball · Rad · Ski · Yoga:
welches Verb?`,`Fußball spielen
Rad fahren · Ski fahren
Yoga machen`,"Im Winter fahre ich gern Ski."],[`können:
zwei Bedeutungen`,`etwas können: Ich kann schwimmen.
möglich sein: Heute kann ich nicht.`,"Heute kann ich leider nicht mitkommen."],[`immer, oft, manchmal, nie:
Wo stehen sie?`,`gleich nach dem Verb:
Ich gehe immer am Montag ins Training.`,"Sie spielt selten Tennis."],[`Wie oft?
von «immer» bis «nie»`,`immer · meistens · oft
manchmal · selten · nie`,"Ich gehe oft ins Kino."]],"kb-a11-l7":[[`Plural:
Frau · Tag · Kind · Handy · Vater`,"fünf typische Endungen","Die Kinder spielen im Schnee.",{cab:["","Singular","Plural"],filas:[["-en","die Frau","die Frauen"],["-e","der Tag","die Tage"],["-er","das Kind","die Kinder"],["-s","das Handy","die Handys"],["Umlaut","der Vater","die Väter"]]}],[`Monate und Jahreszeiten:
welche Präposition?`,`im:
im Sommer · im Jänner`,"Im Sommer ist es heiß."],[`man:
welche Verbform?`,`wie bei er / sie / es:
man spricht · man trägt`,"Hier spricht man Deutsch."],[`h:
Haus · gehen · Uhr`,`am Wortanfang hört man es: Haus
nach einem Vokal nicht, der Vokal wird lang: gehen, Uhr`,"Der Hund ist im Haus."],[`Wetter:
Welches Subjekt?`,`immer es:
es regnet · es schneit · es ist kalt`,"Heute regnet es den ganzen Tag."],[`wenn (Bedingung):
Wo steht das Verb?`,`am Ende:
…, wenn das Wetter schön ist.
vorne: Wenn es regnet, bleiben wir zu Hause.`,"Wenn es regnet, bleiben wir zu Hause."],[`warm, kalt:
vergleichen`,"-er und am …-sten, oft mit Umlaut","Heute ist es wärmer als gestern.",{cab:["","Komparativ","Superlativ"],filas:[["warm","wärmer","am wärmsten"],["kalt","kälter","am kältesten"],["schön","schöner","am schönsten"],["groß","größer","am größten"]]}],["ng und nk",`ng ist ein Laut, ohne g: Wohnung
bei nk hört man das k: danke, trinken`,"Die Wohnung ist im Frühling sehr hell."]],"kb-a12-l9":[["sein im Präteritum","ich und er: gleich, ohne -t","Gestern war ich sehr müde.",{cab:["","sein","Präteritum"],filas:[["ich","bin","war"],["du","bist","warst"],["er / sie / es","ist","war"],["wir","sind","waren"],["ihr","seid","wart"],["sie / Sie","sind","waren"]],color:!0}],["haben im Präteritum","ich und er: gleich, ohne -t","Wir hatten keine Zeit.",{cab:["","haben","Präteritum"],filas:[["ich","habe","hatte"],["du","hast","hattest"],["er / sie / es","hat","hatte"],["wir","haben","hatten"],["ihr","habt","hattet"],["sie / Sie","haben","hatten"]],color:!0}],[`Perfekt mit sein:
welche Verben?`,`gehen, fahren, kommen, fliegen
aufstehen, einschlafen
sein, bleiben, passieren`,"Ich bin nach Wien gefahren."],[`Perfekt:
gehen · fahren · aufstehen · bleiben`,"alle mit sein:","Wir sind um sechs Uhr aufgestanden.",{cab:["","Perfekt"],filas:[["gehen","ist gegangen"],["fahren","ist gefahren"],["aufstehen","ist aufgestanden"],["bleiben","ist geblieben"]]}],[`Perfekt:
Wo stehen die zwei Verben?`,`haben / sein auf Position 2
das Partizip am Ende`,"Am Montag habe ich meine Familie besucht."],[`Partizip II regelmäßig:
machen · arbeiten · kaufen`,`ge- … -t
gemacht · gearbeitet · gekauft`,"Gestern habe ich viel gearbeitet."],[`Partizip II unregelmäßig:
sehen · schreiben · gehen`,`ge- … -en
gesehen · geschrieben · gegangen`,"Am Abend habe ich einen Film gesehen."],[`Partizip II:
telefonieren · studieren`,`ohne ge-
telefoniert · studiert`,"Ich habe mit dem Chef telefoniert."],[`letzt- / nächst-:
Monat · Woche · Jahr`,"ohne Präposition, im Akkusativ","Nächste Woche habe ich Urlaub.",{cab:["","letzt-","nächst-"],filas:[["der Monat","letzten Monat","nächsten Monat"],["die Woche","letzte Woche","nächste Woche"],["das Jahr","letztes Jahr","nächstes Jahr"]]}],[`Reflexivpronomen
im Akkusativ`,"nur bei er / sie / es und sie / Sie: sich","Ich dusche mich jeden Morgen.",{cab:["","Reflexivpronomen"],filas:[["ich","mich"],["du","dich"],["er / sie / es","sich"],["wir","uns"],["ihr","euch"],["sie / Sie","sich"]]}],[`Zuerst, dann, danach …
am Satzanfang: Wo steht das Verb?`,`gleich danach, auf Position 2:
Dann bin ich nach Hause gegangen.`,"Zuerst habe ich gefrühstückt."],[`Über gestern sprechen:
Perfekt oder Präteritum?`,`meistens Perfekt: ich habe gearbeitet
sein, haben, Modalverben im Präteritum:
ich war · ich hatte · ich musste`,"Ich war den ganzen Tag müde."]],"kb-a12-l10":[[`Perfekt:
einkaufen · telefonieren`,`eingekauft: ge- in der Mitte
telefoniert: ohne ge-`,"Ich habe im Supermarkt eingekauft."],[`Partizip II:
machen · einkaufen · telefonieren · bezahlen`,`gemacht · eingekauft
telefoniert · bezahlt`,"Er hat mit dem Amt telefoniert."],["es gibt + …?",`Akkusativ:
es gibt einen Markt · eine Apotheke`,"Gibt es hier eine Apotheke?"],[`Dativ:
der · die · das · Plural`,"im Plural noch ein -n am Nomen","Ich fahre mit dem Bus.",{cab:["","Nominativ","Dativ"],filas:[["der","der · ein Bus","dem · einem Bus"],["die","die · eine Frau","der · einer Frau"],["das","das · ein Kind","dem · einem Kind"],["Plural","die Kinder","den Kindern"]]}],["zu + dem · zu + der",`zum Arzt · zum Bahnhof
zur Post · zur Arbeit`,"Wie komme ich zum Bahnhof?"],[`mit:
Bus · U-Bahn · Auto`,`Dativ:
mit dem Bus · mit der U-Bahn · mit dem Auto`,"Ich fahre mit der U-Bahn."],[`Wohin?
in · auf · an …`,`Akkusativ:
in die Stadt · auf den Tisch`,"Stell die Tasche bitte auf den Tisch."],["Den Weg erklären",`Gehen Sie geradeaus.
Biegen Sie rechts ab.
Verb + Sie, das Präfix am Ende`,"Biegen Sie an der Kreuzung rechts ab."],[`nach · zu · in:
Graz · Arzt · Kino`,"","Am Freitag fahre ich nach Graz.",{cab:["","wohin?","Beispiel"],filas:[["nach","Städte, Länder, Hause","nach Graz · nach Hause"],["zu","Personen, Orte","zum Arzt · zur Post"],["in","Gebäude, Räume","ins Kino · in die Stadt"]]}]],"kb-a12-l11":[[`gefallen:
Wer steht im Dativ?`,`die Person:
Das Zimmer gefällt mir.
Die Möbel gefallen mir.`,"Gefällt dir das Zimmer?"],["Verben mit Dativ",`helfen · danken · gefallen
gehören · schmecken · passen`,"Das Buch gehört meiner Schwester."],["dieser · diese · dieses","Endungen wie der / die / das","Dieses Sofa ist sehr bequem.",{cab:["","Nom.","Akk.","Dat."],filas:[["der","dieser","diesen","diesem"],["die","diese","diese","dieser"],["das","dieses","dieses","diesem"],["Plural","diese","diese","diesen"]]}],["Pronomen im Dativ","","Das gefällt uns gut.",{cab:["","Nominativ","Dativ"],filas:[["ich","mir"],["du","dir"],["er","ihm"],["sie","ihr"],["es","ihm"],["wir","uns"],["ihr","euch"],["sie / Sie","ihnen / Ihnen"]]}],[`Wo?
in · an · auf · unter …`,`Dativ:
im Zimmer · auf dem Tisch
unter dem Bett`,"Die Lampe hängt über dem Tisch."],[`auf oder über?
an oder neben?`,`auf: liegt darauf · über: darüber, ohne Kontakt
an: berührt (am Fenster) · neben: daneben`,"Das Bild hängt an der Wand."],["Adjektiv nach der, die, das","nach der, die, das: -e oder -en","Die neue Küche gefällt mir sehr.",{cab:["","Nom.","Akk.","Dat."],filas:[["der","der große","den großen","dem großen"],["die","die neue","die neue","der neuen"],["das","das alte","das alte","dem alten"],["Plural","die neuen","die neuen","den neuen"]]}],["stellen oder stehen?",`stellen: wohin? + Akkusativ
stehen: wo? + Dativ
Ich stelle die Lampe auf den Tisch.`,"Die Lampe steht auf dem Tisch."],["zu teuer oder sehr teuer?",`zu teuer: zu viel, ein Problem
sehr teuer: nur «sehr»`,"Die Wohnung ist leider zu teuer."]],"kb-a12-l13":[["sollen im Präsens","ich und er: gleich, ohne -t","Du sollst viel trinken, sagt der Arzt.",{cab:["","sollen"],filas:[["ich","soll"],["du","sollst"],["er / sie / es","soll"],["wir","sollen"],["ihr","sollt"],["sie / Sie","sollen"]]}],[`Imperativ:
kommen · nehmen`,"du: ohne -st · ihr: wie im Präsens · Sie: Verb + Sie","Nimm die Tabletten dreimal am Tag!",{cab:["","du","ihr","Sie"],filas:[["kommen","Komm!","Kommt!","Kommen Sie!"],["nehmen","Nimm!","Nehmt!","Nehmen Sie!"],["fahren","Fahr!","Fahrt!","Fahren Sie!"]]}],[`Imperativ:
anrufen · sein`,"das Präfix am Ende · sein ist unregelmäßig","Bleiben Sie bitte im Bett!",{cab:["","du","ihr","Sie"],filas:[["anrufen","Ruf an!","Ruft an!","Rufen Sie an!"],["sein","Sei!","Seid!","Seien Sie!"],["haben","Hab!","Habt!","Haben Sie!"]]}],[`Der Kopf tut weh:
Wer steht im Dativ?`,`die Person:
Mir tut der Kopf weh.
Mir tun die Füße weh.`,"Tut dir der Hals weh?"],["Kopf + Schmerzen",`Ich habe Kopfschmerzen.
immer Plural, mit haben`,"Ich habe seit gestern Kopfschmerzen."],[`Zähne putzen:
mich oder mir?`,`mir, weil «die Zähne» schon das Objekt ist:
Ich putze mir die Zähne.`,"Er hat sich den Arm gebrochen."],[`Plural:
Auge · Ohr · Hand · Fuß · Zahn`,`die Augen · die Ohren · die Hände
die Füße · die Zähne`,"Meine Augen sind müde."],["Einen Rat geben",`sollte:
Du solltest mehr schlafen.
Sie sollten zu Hause bleiben.`,"Du solltest mehr schlafen."],["pf · kn · ps",`beide Buchstaben sprechen:
Pflaster · Knie · Psychologe`,"Mein Knie tut beim Laufen weh."]],"kb-a12-l12":[[`müssen und dürfen
im Präsens`,`ich und er: gleich, ohne -t
wir und sie: wie der Infinitiv`,"Ich muss das Formular ausfüllen.",{cab:["","müssen","dürfen"],filas:[["ich","muss","darf"],["du","musst","darfst"],["er / sie / es","muss","darf"],["wir","müssen","dürfen"],["ihr","müsst","dürft"],["sie / Sie","müssen","dürfen"]]}],[`nicht dürfen oder
nicht müssen?`,`nicht dürfen: verboten
nicht müssen: nicht nötig`,"Hier dürfen Sie nicht parken."],[`vor · nach · in
+ Zeit`,`vor zwei Tagen (vorbei)
nach der Arbeit
in einer Woche (Zukunft)
immer Dativ`,"In einer Woche habe ich den Termin."],["ab und bis",`ab Montag: von Montag an
bis 15 Uhr: nicht länger`,"Ab Montag bin ich wieder im Büro."],[`Höflich bitten:
können · werden`,`Könnten Sie mir helfen?
Würden Sie das bitte unterschreiben?`,"Könnten Sie mir bitte helfen?"],[`Indirekte Frage:
eine Ja/Nein-Frage`,`mit ob, das Verb am Ende:
Ich weiß nicht, ob das Amt offen ist.`,"Ich weiß nicht, ob das Amt heute offen ist."],[`Indirekte Frage:
eine W-Frage`,`mit dem W-Wort, das Verb am Ende:
…, wann das Amt öffnet.`,"Können Sie mir sagen, wann der Termin ist?"],[`Wem und was:
Welche Reihenfolge?`,`zuerst Dativ (wem), dann Akkusativ (was)
aber ein Pronomen zuerst: Ich gebe es ihm.`,"Ich gebe dem Beamten das Formular."],["-tion und -ung",`-tion klingt «tsion», mit Akzent: Information
-ung ohne Akzent: Anmeldung`,"Die Bestätigung kommt per Post."]],"kb-a12-l14":[["welch- und dies-",`Welche Jacke nimmst du? – Diese hier.
wie der / die / das`,"Welchen Pullover meinst du?"],["Pronomen im Akkusativ","","Der Mantel? Ich nehme ihn.",{cab:["","Nominativ","Akkusativ"],filas:[["ich","mich"],["du","dich"],["er","ihn"],["sie","sie"],["es","es"],["wir","uns"],["ihr","euch"],["sie / Sie","sie / Sie"]]}],["für · durch · gegen · ohne · um",`immer Akkusativ:
für meinen Bruder · ohne meinen Mann`,"Das Geschenk ist für dich."],[`gut · viel · gern:
vergleichen`,"ganz unregelmäßig:","Diese Jacke gefällt mir besser.",{cab:["","Komparativ","Superlativ"],filas:[["gut","besser","am besten"],["viel","mehr","am meisten"],["gern","lieber","am liebsten"]]}],[`alt · groß:
vergleichen`,"-er und am …-sten, mit Umlaut","Mein Bruder ist älter als ich.",{cab:["","Komparativ","Superlativ"],filas:[["alt","älter","am ältesten"],["groß","größer","am größten"],["jung","jünger","am jüngsten"],["lang","länger","am längsten"]]}],[`Ordinalzahlen:
1. · 4. · 8. · 20.`,`der erste · der vierte
der achte · der zwanzigste`,"Heute ist der fünfte Mai."],[`Adjektiv nach ein:
Mantel · Jacke · Hemd`,"nach ein zeigt das Adjektiv das Genus","Das ist eine schöne Jacke.",{cab:["","Nom.","Akk.","Dat."],filas:[["der","ein blauer","einen blauen","einem blauen"],["die","eine blaue","eine blaue","einer blauen"],["das","ein blaues","ein blaues","einem blauen"]]}],[`Adjektiv nach einen
(Akkusativ, der)`,"einen blauen Mantel","Ich suche einen blauen Mantel."],["passen · stehen · gefallen",`passt mir: die Größe stimmt
steht mir: sieht an mir gut aus
gefällt mir: finde ich schön`,"Blau steht dir wirklich gut."]],"kb-a12-l15":[[`würde
(Konjunktiv II)`,"würde + Infinitiv am Ende","Ich würde gern nach Italien fahren.",{cab:["","würde"],filas:[["ich","würde"],["du","würdest"],["er / sie / es","würde"],["wir","würden"],["ihr","würdet"],["sie / Sie","würden"]]}],[`würde + …:
Wo steht der Infinitiv?`,`am Ende:
Würdest du mir bitte helfen?`,"Würdest du mir bitte helfen?"],["nach + …",`Städte und Länder ohne Artikel:
nach Wien · nach Spanien`,"Wir fliegen nach Spanien."],["ans Meer oder am Meer?",`wohin? → ans Meer (Akkusativ)
wo? → am Meer (Dativ)`,"Ich fahre ans Meer."],[`Wohin? · Wo?
Berge · Insel · Schweiz`,"wohin? Akkusativ · wo? Dativ","Im Sommer fahren wir in die Schweiz.",{cab:["","wohin?","wo?"],filas:[["die Berge","in die Berge","in den Bergen"],["eine Insel","auf eine Insel","auf einer Insel"],["die Schweiz","in die Schweiz","in der Schweiz"],["das Meer","ans Meer","am Meer"]]}],[`Futur:
werden + …`,`werden + Infinitiv am Ende
für Versprechen und Prognosen`,"Ich werde dir aus dem Urlaub schreiben."],[`Infinitiv mit zu:
nach welchen Verben?`,`versuchen · vergessen · anfangen
Lust haben · Zeit haben
nie nach Modalverben`,"Ich habe vergessen, das Hotel zu buchen."],["zu bei trennbaren Verben",`zwischen Präfix und Verb:
mitzukommen · anzurufen`,"Hast du Lust, mitzukommen?"],["um … zu",`wozu?, mit demselben Subjekt:
Ich lerne Deutsch, um hier zu arbeiten.`,"Wir fahren früher los, um den Zug zu erreichen."],["mögen · möchten · wollen",`mag: das gefällt mir allgemein
möchte: jetzt, höflich
will: stark, direkt`,"Ich möchte ein Zimmer für zwei Nächte."],[`Akzent bei Fremdwörtern:
Hotel · Computer · Restaurant`,`HoTEL · ComPUter
RestauRANT · MuSIK`,"Das Hotel liegt direkt am Bahnhof."]],"kb-a12-l16":[["sein oder ihr?",`sein: von ihm
ihr: von ihr`,"Das ist seine Schwester."],[`sein / ihr im Akkusativ
vor einem der-Wort`,`vor einem Wort mit der (maskulin):
seinen Bruder · ihren Chef`,"Sie lädt ihren Chef ein."],[`denn:
Wo steht das Verb?`,`normal, auf Position 2:
…, denn ich muss noch arbeiten.`,"Ich nehme ein Taxi, denn es regnet."],[`gratulieren · danken:
Welcher Fall?`,`Dativ:
Ich gratuliere dir.
Wir danken Ihnen.`,"Ich gratuliere dir zum Geburtstag!"],["zu + Anlass",`zum Geburtstag · zur Hochzeit
zu Weihnachten · zu Ostern`,"Alles Gute zum Geburtstag!"],[`Etwas anbieten
und annehmen`,`Möchten Sie …? · Nehmen Sie …?
Ja, gern. · Ja, bitte.
nur «Danke» heißt nein`,"Möchten Sie noch ein Stück Kuchen?"],[`Nebensatz:
Wo steht das Verb?`,`am Ende; bei zwei Verben das konjugierte ganz hinten:
…, weil ich nicht kommen kann.`,"Schade, dass du nicht kommen kannst."],["obwohl oder trotzdem?",`Obwohl es spät war, sind wir geblieben.
Es war spät, trotzdem sind wir geblieben.`,"Er ist gekommen, obwohl er krank war."],[`Satzakzent:
Welches Wort betont man?`,`das neue, wichtige Wort:
ICH komme morgen. · Ich komme MORGEN.`,"Ich komme morgen, nicht heute."]],"kb-a21-l1":[[`sein und haben
im Präteritum`,"ich und er: gleich, ohne -t","Am Anfang war ich sehr aufgeregt.",{cab:["","sein","haben"],filas:[["ich","war","hatte"],["du","warst","hattest"],["er / sie / es","war","hatte"],["wir","waren","hatten"],["ihr","wart","hattet"],["sie / Sie","waren","hatten"]],color:!0}],[`Partizip II:
machen · sprechen · einkaufen
verstehen · telefonieren`,`gemacht · gesprochen · eingekauft
verstanden · telefoniert`,"Wir haben viel Deutsch gelernt."],[`Perfekt mit sein:
bleiben · sein · passieren`,`ist geblieben · ist gewesen
ist passiert`,"Was ist denn passiert?"],[`Partizip ohne ge-:
welche Präfixe?`,`be- · er- · ge- · ver- · ent- · emp- · zer-
bekommen · erlebt · verstanden`,"Hast du die Frage verstanden?"],["un- und -los",`un- = nicht: unzufrieden, unsicher
-los = ohne: arbeitslos, problemlos`,"Er ist seit einem Jahr arbeitslos."],[`sich freuen · Angst haben
sich ärgern: welche Präposition?`,"","Ich freue mich über deinen Besuch.",{cab:["","Präposition","Kasus"],filas:[["sich freuen","über","Akkusativ"],["Angst haben","vor","Dativ"],["sich ärgern","über","Akkusativ"]]}],[`sich gewöhnen · sich Sorgen machen:
welche Präposition?`,"","Ich habe mich an das Wetter gewöhnt.",{cab:["","Präposition","Kasus"],filas:[["sich gewöhnen","an","Akkusativ"],["sich Sorgen machen","um","Akkusativ"]]}],["Worüber? – Darüber.",`bei Sachen: wo(r)- / da(r)- + Präposition
worüber? · darüber · woran? · daran
bei Personen: über wen?`,"Worüber freust du dich?"],[`als oder wenn?
in der Vergangenheit`,`als: ein Mal
wenn: immer wieder`,"Als ich nach Wien kam, war alles fremd."]],"kb-a21-l2":[[`weil:
Wo steht das Verb?`,`am Ende:
…, weil ich arbeiten muss.`,"Weil es regnet, bleiben wir zu Hause."],["weil · denn · deshalb",`weil: Verb am Ende
denn: normal
deshalb: Verb gleich danach`,"Es regnet, deshalb bleibe ich zu Hause."],["Was für ein …?",`fragt nach der Art
ein- wie im Satz: einen, eine, ein`,"Was für einen Wein möchtest du?"],["Höflich einladen",`Hättest du Lust, …?
Wäre Samstag okay?
Könntest du …?`,"Hättest du Lust, am Samstag zu kommen?"],[`Nebensatz vorne:
Was kommt danach?`,`gleich das Verb:
Wenn du Zeit hast, komm vorbei.
Weil ich arbeite, komme ich später.`,"Wenn du Zeit hast, komm doch vorbei."],[`mitbringen · schenken:
wem und was?`,`wem = Dativ, was = Akkusativ
Ich bringe dir einen Kuchen mit.`,"Was sollen wir den Gastgebern schenken?"],["Im Restaurant bestellen",`Ich hätte gern …
Ich nehme … · Für mich bitte …
nicht: Ich will …`,"Ich hätte gern die Suppe, bitte."],[`man:
Wie macht man das?`,"man + Verb wie bei er / sie / es","In Spanien isst man später als hier."],["Das r",`am Silbenanfang im Hals: Reis, Brot
am Wortende fast ein a: Bier, Vater`,"Ein Bier und ein Wasser, bitte."]],"kb-a21-l4":[["für · über + Zeit",`für zwei Wochen: so lange ist geplant
über das Wochenende: die ganze Zeit
beide + Akkusativ`,"Ich bin für ein Jahr in dieser Abteilung."],["seit · ab · zwischen",`seit einem Monat: und es geht weiter
ab Montag: von Montag an
zwischen 12 und 13 Uhr
alle + Dativ`,"Ich arbeite seit einem Monat in dieser Firma."],["seit oder vor?",`seit einem Jahr: es dauert noch
vor einem Jahr: es ist vorbei`,"Vor einem Jahr habe ich hier angefangen."],["wenn · als · wann",`wenn: immer wieder, Zukunft, Bedingung
als: ein Mal in der Vergangenheit
wann: Frage`,"Ruf mich an, wenn du Fragen hast."],["damit oder um … zu?",`gleiches Subjekt: um … zu
anderes Subjekt: damit`,"Ich erkläre es noch einmal, damit alle es verstehen."],["Höflich im Büro",`Könnten Sie …? · Dürfte ich …?
Ich hätte eine Frage.
Ich würde vorschlagen …`,"Dürfte ich kurz stören?"],[`Genitiv:
der Chef · die Firma`,"der und das: des … -(e)s","Das ist das Büro des Chefs.",{cab:["","Nominativ","Genitiv"],filas:[["der","der Chef","des Chefs"],["die","die Firma","der Firma"],["das","das Kind","des Kindes"],["Plural","die Kinder","der Kinder"]]}],[`Passiv:
werden + …`,`werden + Partizip II am Ende:
Die Unterlagen werden geprüft.`,"Das Büro wird um achtzehn Uhr geschlossen."]],"kb-a21-l3":[[`gut · viel · gern:
vergleichen`,"ganz unregelmäßig:","Am liebsten gehe ich klettern.",{cab:["","Komparativ","Superlativ"],filas:[["gut","besser","am besten"],["viel","mehr","am meisten"],["gern","lieber","am liebsten"]]}],[`schnell · alt · groß
teuer · hoch`,"-er und am …-sten","Von allen läuft Zofia am schnellsten.",{cab:["","Komparativ","Superlativ"],filas:[["schnell","schneller","am schnellsten"],["alt","älter","am ältesten"],["teuer","teurer","am teuersten"],["hoch","höher","am höchsten"]]}],["als oder wie?",`als: anders (schneller als)
wie: gleich (so schnell wie)`,"Schwimmen ist gesünder als Autofahren."],[`jemand · niemand
im Akkusativ und Dativ`,`jemanden · niemanden
jemandem · niemandem`,"Kennst du jemanden im Verein?"],[`seit + …:
Welche Zeitform?`,`Präsens:
Ich laufe seit zwei Jahren.`,"Seit dem Winter trainiert sie im Studio."],[`sich aufwärmen:
Wo steht was?`,`das Pronomen nach dem Verb
das Präfix am Ende:
Ich wärme mich zehn Minuten auf.`,"Nach dem Training ruhe ich mich aus."],[`sowohl … als auch
entweder … oder
weder … noch`,"beides · eins von zwei · keins","Ich spiele sowohl Tennis als auch Fußball."],[`Adjektiv ohne Artikel:
Saft · Milch · Wasser`,"ohne Artikel zeigt das Adjektiv den Fall","Frische Luft tut immer gut.",{cab:["","Nom.","Akk.","Dat."],filas:[["der","frischer Saft","frischen Saft","frischem Saft"],["die","kalte Milch","kalte Milch","kalter Milch"],["das","kaltes Wasser","kaltes Wasser","kaltem Wasser"]]}]],"kb-a21-l5":[[`deswegen:
Wo steht das Verb?`,`gleich danach:
…, deswegen war er nicht in der Schule.`,"Ich habe den Bus verpasst. Deswegen komme ich zu spät."],["Drei Arten von Konnektoren",`und, aber, denn …: nichts ändert sich
deshalb, trotzdem, dann: Verb gleich danach
weil, dass, wenn, obwohl: Verb am Ende`,"Er ist krank, deshalb fehlt er."],["mein- im Dativ","im Plural noch ein -n am Nomen","Ich helfe meiner Tochter bei den Hausaufgaben.",{cab:["","Nominativ","Dativ"],filas:[["der","mein Sohn","meinem Sohn"],["die","meine Tochter","meiner Tochter"],["das","mein Kind","meinem Kind"],["Plural","meine Kinder","meinen Kindern"]]}],["deshalb · darum · daher",`gleiche Bedeutung, gleiche Stellung:
das Verb gleich danach`,"Sie hat viel geübt, darum war die Schularbeit leicht."],["weil oder deshalb?",`Er fehlt, weil er krank ist.
Er ist krank, deshalb fehlt er.`,"Er fehlt, weil er krank ist."],[`wenn:
Regeln in der Schule`,`das Verb am Ende:
Wenn du krank bist, brauchst du eine Entschuldigung.`,"Wenn die Note schlecht ist, gibt es eine Nachprüfung."],["Modalverben im Präteritum","ohne Umlaut · ich und er: gleich","Wir mussten die Schularbeit wiederholen.",{cab:["","ich / er","wir / sie"],filas:[["können","konnte","konnten"],["müssen","musste","mussten"],["dürfen","durfte","durften"],["wollen","wollte","wollten"],["sollen","sollte","sollten"],["mögen","mochte","mochten"]]}],[`der neue Lehrer
oder ein neuer Lehrer?`,`der zeigt das Genus: der neue
ein zeigt es nicht: ein neuer`,"Ein neuer Lehrer kommt nach den Ferien."],["chs und x",`klingen beide «ks»:
sechs · wachsen · Taxi`,"Der Unterricht beginnt um sechs."]],"kb-a21-l6":[[`dass:
Wo steht das Verb?`,`am Ende:
Ich glaube, dass der Film spannend ist.`,"Er sagt, dass er lieber Dokus schaut."],["dass oder das?",`dass: Konjunktion (Ich weiß, dass …)
das: Artikel, Pronomen, Relativpronomen`,"Ich weiß, dass er kommt."],[`trotzdem:
Wo steht das Verb?`,`gleich danach:
Der Film war lang. Trotzdem hat er mir gefallen.`,"Ich bin müde, trotzdem schaue ich noch eine Folge."],["obwohl · trotzdem · aber",`obwohl: Verb am Ende
trotzdem: Verb gleich danach
aber: normal`,"Obwohl es spät war, blieben wir."],["Die Meinung sagen",`Ich finde, … · Ich glaube, …
Meiner Meinung nach ist das …
(danach gleich das Verb)`,"Meiner Meinung nach ist das übertrieben."],[`Relativsatz:
der Film, …`,`der Film, der …
die Serie, die …
das Buch, das …
das Verb am Ende`,"Das ist die Serie, die alle schauen."],["nicht nur … sondern auch",`beides ist wichtig:
nicht nur Serien, sondern auch Dokus`,"Ich schaue nicht nur Serien, sondern auch Dokus."],["aufhören zu · anfangen zu",`das zweite Verb mit zu am Ende
bei trennbaren Verben in der Mitte: fernzusehen`,"Ich habe aufgehört, abends fernzusehen."],["ei · ie · eu · äu · au",`ei «ai»: nein · ie langes i: Liebe
eu und äu «oi»: heute, Häuser · au: Haus`,"Heute Abend bleibe ich zu Hause."]],"kb-a21-l8":[[`Konjunktiv II:
sein · haben · werden`,"mit Umlaut: wäre, hätte, würde","Hätten Sie noch ein Doppelzimmer frei?",{cab:["","sein","haben","werden"],filas:[["ich","wäre","hätte","würde"],["du","wärst","hättest","würdest"],["er / sie / es","wäre","hätte","würde"],["wir","wären","hätten","würden"],["ihr","wärt","hättet","würdet"],["sie / Sie","wären","hätten","würden"]]}],[`würde + Infinitiv:
Wo steht was?`,`Aussage: würde auf 2, Infinitiv am Ende
Frage: würde auf 1
Nebensatz: … kommen würde`,"Ich würde gern einen Sitzplatz reservieren."],["durch und entlang",`durch steht vor dem Nomen: durch den Park
entlang steht danach: die Straße entlang
beide + Akkusativ`,"Gehen Sie die Straße entlang bis zur Ampel."],["gegenüber · bis zu · an … vorbei",`gegenüber dem Bahnhof
bis zur Ampel
an der Kirche vorbei
alle + Dativ`,"Das Hotel ist gegenüber dem Bahnhof."],[`Höflich fragen:
Können Sie mir sagen, …?`,`das Verb danach ans Ende:
…, wann der Zug fährt?`,"Wissen Sie, ob das Frühstück inklusive ist?"],["Zug · Auto · zu Fuß",`mit dem Zug · mit dem Auto
(mit + Dativ)
aber: zu Fuß`,"Zum Bahnhof gehe ich zu Fuß."],["Wenn …, dann …",`nach dann gleich das Verb:
Wenn der Zug ausfällt, dann nehmen wir den Bus.`,"Wenn wir früh ankommen, dann gehen wir noch essen."],["Sich höflich beschweren",`Ich hätte gern …
Könnten Sie …?
Wäre es möglich, …?`,"Ich hätte gern ein ruhigeres Zimmer."]],"kb-a21-l7":[[`Wo?
oben · unten · vorn · hinten`,`eine Position, ohne Bewegung:
Die Kartons sind oben.`,"Der Wäschekorb ist hinten im Bad."],[`Wohin?
rauf · runter · rein · raus · rüber`,`eine Bewegung:
Trag die Schachtel rauf!
Komm rein!`,"Komm rein, die Tür ist offen."],[`oben oder rauf?
drinnen oder rein?`,`oben, drinnen: wo?
rauf, rein: wohin?`,"Trag die Schachtel bitte rauf!"],["aus · bei · mit · nach · von · zu",`immer Dativ:
bei meiner Schwester · zum Vermieter`,"Ich wohne vorübergehend bei meiner Schwester."],[`Wechselpräpositionen:
wann Akkusativ, wann Dativ?`,`wohin? → Akkusativ: an die Wand
wo? → Dativ: an der Wand`,"Ich hänge das Bild an die Wand."],[`stellen · legen · hängen · setzen:
und wo ist es dann?`,"stehen · liegen · hängen · sitzen","Ich lege das Kissen auf das Sofa."],[`Imperativ:
halten · nehmen · hochheben`,`du: Halt! · Nimm! · Heb … hoch!
ihr: Haltet! · Nehmt!`,"Halt den Tisch bitte gut fest!"],["etwas machen lassen",`ein anderer macht es für dich:
Ich lasse die Küche einbauen.`,"Wir lassen die Wohnung streichen."]],"kb-a22-l9":[[`Indirekte Frage
mit W-Wort`,`das W-Wort vorne, das Verb am Ende:
Wissen Sie, wann der Hausmeister kommt?`,"Kannst du mir sagen, wo die Mülltonnen stehen?"],[`Indirekte Frage:
zwei Verbteile`,`beide ans Ende, das konjugierte zuletzt:
…, wann ich zahlen muss.
…, wer angerufen hat.`,"Ich weiß nicht, wer die Tür offen gelassen hat."],[`Modalverb im Präteritum:
Wo steht der Infinitiv?`,`am Ende:
Gestern konnte ich nicht schlafen.`,"Wir mussten den Sperrmüll selbst wegbringen."],[`Hast du eine Leiter?
Hast du einen Hammer?`,`Ja, ich habe eine.
Ja, ich habe einen.
im Plural: welche`,"Brauchst du einen Schraubenzieher? – Danke, ich habe schon einen."],[`einer · eine · eins:
verneint`,"","Hast du ein Messer? – Nein, ich habe keins.",{cab:["","Nom.","Akk.","verneint"],filas:[["der","einer","einen","keiner / keinen"],["die","eine","eine","keine"],["das","eins","eins","keins"],["Plural","welche","welche","keine"]]}],["Hilfe anbieten",`Soll ich …? (Willst du, dass ich …?)
Kann ich …?
Darf ich …? (sehr höflich)`,"Soll ich Ihnen die Einkäufe hochtragen?"],[`ja, nein oder doch?
Kommst du nicht?`,`Doch! = ja, ich komme
Nein. = ich komme nicht`,"Hast du keinen Schlüssel? – Doch, ich habe einen."],["einander",`Wir helfen uns. = Wir helfen einander.
miteinander · voneinander`,"Im Haus grüßen sich alle freundlich."],["Es ist verboten, …",`… zu + Infinitiv am Ende:
Es ist verboten, im Treppenhaus zu rauchen.`,"Es ist nicht erlaubt, Kinderwagen im Gang abzustellen."]],"kb-a22-l11":[[`warten · achten · sich kümmern
denken: welche Präposition?`,`warten auf · achten auf
sich kümmern um · denken an
alle + Akkusativ`,"Ich warte schon seit einer Stunde auf den Arzt."],[`leiden · sich erholen · teilnehmen
Angst haben: welche Präposition?`,`leiden unter / an · sich erholen von
teilnehmen an · Angst haben vor
alle + Dativ`,"Von der Grippe habe ich mich gut erholt."],["Worauf? oder Auf wen?",`Sache: worauf? woran? wovon?
Person: auf wen? an wen? von wem?`,"Worauf wartest du? – Auf den Befund."],["darauf oder auf ihn?",`Sache: darauf, daran, damit
Person: auf ihn, an sie, mit ihm`,"Kümmerst du dich um deinen Vater? – Ja, ich kümmere mich um ihn."],[`behandeln · untersuchen · sich erholen
→ Nomen`,`die Behandlung · die Untersuchung
die Erholung
auf -ung immer die`,"Die Behandlung dauert drei Wochen."],["Einen Termin ändern",`vereinbaren / ausmachen
verschieben auf · vorverlegen · absagen`,"Kann ich meinen Termin auf nächste Woche verschieben?"],["Hoffnung ausdrücken",`Hoffentlich ist es nichts Schlimmes.
Ich hoffe, dass du bald gesund bist.
Ich hoffe, bald fit zu sein.`,"Hoffentlich ist der Befund in Ordnung!"],["Eine Bitte weitergeben",`mit sollen:
«Rufen Sie zurück!» → Sie sollen zurückrufen.`,"Frau Doktor Lang sagt, Sie sollen bitte morgen anrufen."]],"kb-a22-l10":[[`könnte
(Konjunktiv II)`,"ich und er: gleich, ohne -t","Ich könnte ab nächstem Monat anfangen.",{cab:["","könnte"],filas:[["ich","könnte"],["du","könntest"],["er / sie / es","könnte"],["wir","könnten"],["ihr","könntet"],["sie / Sie","könnten"]]}],["Einen Vorschlag machen",`Du könntest …
sanfter als «Ruf an!» oder «Du solltest …»`,"Du könntest dich auch bei der Stadt bewerben."],[`könnte:
Wo steht der Infinitiv?`,`am Ende:
Wann könnten Sie anfangen?
im Nebensatz: … bekommen könnte`,"Ich könnte nächste Woche zum Probetag kommen."],[`sich interessieren · sich bewerben
sich erkundigen`,`sich interessieren für + Akkusativ
sich bewerben um + Akk. / bei + Dat.
sich erkundigen nach + Dativ`,"Ich bewerbe mich um die Stelle als Pflegerin."],["Wo steht sich?",`gleich nach dem konjugierten Verb:
Ich habe mich beworben.
im Nebensatz nach dem Subjekt:
…, weil ich mich bewerbe.`,"Gestern habe ich mich bei drei Firmen beworben."],[`fahren · pflegen · beraten
→ Person`,`der Fahrer · die Fahrerin
der Pfleger · die Pflegerin
der Berater · die Beraterin`,"Meine Schwester ist Erzieherin in einem Kindergarten."],["Was ich gut kann",`gut in Mathe · Erfahrung mit Kunden
Kenntnisse in Excel
alle + Dativ`,"Ich habe drei Jahre Erfahrung mit Kunden."],["Zeit im Lebenslauf",`2019 oder im Jahr 2019 (nicht «in 2019»)
von 2015 bis 2018 · seit 2020
nach der Ausbildung`,"Von 2018 bis 2021 war ich Verkäuferin in Madrid."]],"kb-a22-l12":[[`Adjektiv im Dativ
nach dem · der · den`,`immer -en:
mit dem neuen Rad · in der alten Burg
mit den müden Kindern`,"Wir fahren mit dem neuen Leihrad zum Badesee."],[`Adjektiv nach dieser, jeder,
welcher, alle`,`wie nach der, die, das:
dieser alte Dom · alle jungen Leute`,"Dieser alte Dom ist über 800 Jahre alt."],[`Superlativ vor dem Nomen:
schön · hoch · gut`,`die schönste Aussicht
der höchste Gipfel · das beste Gasthaus`,"Der Großglockner ist der höchste Berg Österreichs."],[`Wien · Salzburg · Graz
als Adjektiv`,`Wiener · Salzburger · Grazer
immer groß, ohne Endung`,"Die Salzburger Festspiele sind weltbekannt."],[`Himmelsrichtungen:
wo? wohin? woher?`,`im Norden · nördlich von
nach Norden · in den Süden
aus dem Westen`,"Linz liegt im Norden Österreichs."],["Einen Plan vorschlagen",`Hast du Lust auf ein Picknick?
Hast du Lust, mitzukommen?
Wie wäre es mit einer Radtour?`,"Hast du Lust auf einen Ausflug zum Badesee?"],["Bedauern",`leider · schade
Schade, dass du nicht kommst.
Es tut mir leid, dass …`,"Schade, dass das Fest wegen Regen ausfällt."],[`sollen:
Das habe ich gehört`,`Morgen soll es regnen. = laut Wetterbericht
Der Film soll gut sein. = man sagt es`,"Laut Wetterbericht soll es am Samstag sonnig werden."]],"kb-a22-l13":[[`Relativpronomen
im Akkusativ`,"nur der ändert sich: den","Der Mixer, den ich gestern gekauft habe, ist schon kaputt.",{cab:["","Nom.","Akk.","Dat."],filas:[["der","der","den","dem"],["die","die","die","der"],["das","das","das","dem"],["Plural","die","die","denen"]]}],[`Relativpronomen
im Dativ`,"im Plural: denen","Der Mann, dem die Tasche gehört, wartet am Kundendienst.",{cab:["","Nom.","Akk.","Dat."],filas:[["der","der","den","dem"],["die","die","die","der"],["das","das","das","dem"],["Plural","die","die","denen"]]}],["Relativsatz mit Präposition",`die Präposition vor das Pronomen:
das Ding, mit dem man Dosen öffnet
die Firma, für die ich arbeite`,"Das ist der Laden, in dem ich meine Kaffeemaschine gekauft habe."],["Komparativ vor dem Nomen",`-er + die normale Endung:
ein günstigeres Modell
einen leiseren Föhn`,"Haben Sie auch ein günstigeres Modell?"],["Passiv mit Modalverb",`Modalverb … Partizip + werden:
Das darf nicht gewaschen werden.
Das kann repariert werden.`,"Die Seidenbluse darf nur von Hand gewaschen werden."],["waschbar · faltbar · essbar",`Verb + -bar = man kann es …
unbrauchbar: man kann es nicht brauchen`,"Der Bezug ist abnehmbar und waschbar."],[`der Kunde, der Kollege, der Herr:
im Akkusativ und Dativ`,`den / dem Kunden
den / dem Kollegen
den / dem Herrn`,"Die Verkäuferin berät gerade einen Kunden."],[`Material:
Holz · Gold · Glas`,`aus Holz · der Holzlöffel · hölzern
aus Gold · der Goldring · golden`,"Ich suche eine Tasche aus echtem Leder."]],"kb-a22-l14":[["Passiv im Präteritum",`wurde + Partizip II am Ende:
Das Paket wurde gestern zugestellt.`,"Die Briefmarken wurden falsch aufgeklebt."],[`Der Brief wird frankiert.
Der Brief ist frankiert.`,`wird: die Handlung, jetzt
ist: das Ergebnis, schon fertig`,"Der Schalter ist leider schon geschlossen."],[`bevor:
Wo steht das Verb?`,`am Ende:
Bevor du das Paket zuklebst, leg die Rechnung hinein.`,"Ich mache immer ein Backup, bevor ich ein Update installiere."],[`bis · seit(dem)
als Konjunktion`,`bis: bis zu dem Moment, in dem …
seit(dem): von dem Moment an, in dem …
das Verb am Ende`,"Seit ich das neue Handy habe, mache ich viel mehr Fotos."],["während",`zwei Dinge zur gleichen Zeit:
Während das Update läuft, …
mit Genitiv: während der Arbeit`,"Während ich in der Schlange warte, lese ich meine Nachrichten."],[`wegen · trotz
innerhalb · außerhalb`,`mit Genitiv:
wegen des Streiks · trotz der Garantie
innerhalb einer Woche`,"Wegen des Streiks kommt die Post heute später."],[`nicht müssen
= nicht brauchen zu`,`Du brauchst nicht anzurufen.
Du brauchst nur zu klicken.`,"Sie brauchen nicht zu unterschreiben."],["Anleitungen",`oft nur der Infinitiv am Ende:
Taste drücken. · Gerät neu starten.`,"Zuerst die SIM-Karte einlegen, dann das Handy einschalten."]],"kb-a22-l16":[["Plusquamperfekt",`hatte / war + Partizip II:
was vor einem anderen Moment schon passiert war`,"Als wir ankamen, hatte die Feier schon begonnen."],[`nachdem:
welche Zeitformen?`,`Nachdem wir gegessen hatten, tanzten wir.
Nebensatz: Plusquamperfekt
Hauptsatz: Präteritum oder Perfekt`,"Nachdem die Gäste gegangen waren, räumten wir auf."],["sobald und solange",`sobald = gleich wenn
solange = die ganze Zeit, während
das Verb am Ende`,"Ruf mich an, sobald das Baby da ist!"],[`als oder immer wenn?
in der Vergangenheit`,`als: ein Mal, eine Zeit (Als ich klein war, …)
immer wenn: jedes Mal`,"Immer wenn Oma kam, backten wir Plätzchen."],[`früher · damals
inzwischen · heutzutage`,`früher: vor langer Zeit, allgemein
damals: zu dieser Zeit
inzwischen: bis jetzt · heutzutage: heute`,"Früher haben wir Weihnachten immer bei Oma gefeiert."],["Zeit ohne Präposition",`Akkusativ: letzten Sommer, nächstes Jahr
den ganzen Abend
Genitiv: eines Tages`,"Letzten Sommer haben wir geheiratet."],[`Jahreszahlen:
1990 · 2024`,`neunzehnhundertneunzig
zweitausendvierundzwanzig
1990 oder im Jahr 1990, nicht «in 1990»`,"Meine Eltern haben 1985 geheiratet."],["Glückwünsche",`Ich wünsche dir einen schönen Tag!
Frohe Weihnachten! · Einen guten Rutsch!
Alles Gute zum Geburtstag!`,"Ich wünsche dir einen schönen Geburtstag!"]],"kb-a22-l15":[[`Beträge und Zahlen:
4,90 € · 2,5 % · 3/4`,`vier Euro neunzig
zwei Komma fünf Prozent
drei Viertel`,"Das Girokonto kostet 3,90 € im Monat."],["falls oder wenn?",`falls: nur vielleicht, für den Fall
wenn: Bedingung oder Zeit
beide: Verb am Ende`,"Falls Sie Fragen haben, rufen Sie uns einfach an."],["ohne … zu · statt … zu",`ohne zu fragen
statt bar zu zahlen
mit Präfix: ohne nachzudenken`,"Statt bar zu zahlen, zahle ich fast immer mit dem Handy."],[`Verb als Nomen:
beim … · zum …`,`das Sparen · beim Bezahlen
zum Unterschreiben
immer groß und das`,"Beim Bezahlen hat die Karte nicht funktioniert."],[`der Angestellte
ein Angestellter`,`wie ein Adjektiv:
der Angestellte · ein Angestellter
die Angestellten`,"Mein Bruder ist Angestellter bei einer Versicherung."],["leihen · sich leihen · schulden",`jemandem etwas leihen: geben
sich etwas leihen: bekommen
jemandem etwas schulden`,"Kannst du mir bis Freitag zwanzig Euro leihen?"],["mal · denn · ja · eben",`mal: macht eine Bitte weicher
denn: Interesse in der Frage
ja: Überraschung · eben: es ist so`,"Was kostet das denn?"],["irgend-",`irgendwo · irgendwann · irgendwie
irgendwer · irgendwas`,"Meine Karte muss irgendwo in der Wohnung sein."]]},J="gram:tarjetas",D=()=>Z.get(J,{});function ue(a){const t=D();return{si:a.filter(s=>t[s.id]===!0).length,no:a.filter(s=>t[s.id]===!1)}}function R(a){return(L[a==null?void 0:a.id]||[]).map(([t,s,l,i],u)=>({id:`${a.id}:${u}`,delante:t,detras:s,ejemplo:l,tabla:i}))}const x=a=>"practica:tarjeta:"+a.id,oe=a=>a.filter(t=>te(x(t)));function ve(a=10){const t=D(),s=Object.keys(L).flatMap(i=>{const u=ie(i.replace(/^kb-/,""));return R({id:i}).map(v=>({...v,leccion:u?re(u):""}))}),l=i=>[...i].sort(()=>Math.random()-.5);return[...l(s.filter(i=>t[i.id]!==!0)),...l(s.filter(i=>t[i.id]===!0))].slice(0,a)}function ze({topic:a,cartasFijas:t=null,soloFalladas:s=!1,soloMarcadas:l=!1,contexto:i,onExit:u,onFinish:v}){const f=m.useMemo(()=>{if(t)return t;const r=R(a);return l?oe(r):s?ue(r).no:r},[a,t,s,l]),[d,U]=m.useState(0),[z,K]=m.useState(!1),[F,H]=m.useState(!1),p=m.useRef([]),j=m.useRef(0),M=m.useRef(null),P=m.useRef(Date.now()),n=f[d],g=()=>{K(r=>!r),H(!0)},k=n?le(n.delante):"",B=k===(n==null?void 0:n.delante)?"de":G();m.useEffect(()=>{if(!n)return;const r=Y(),h=o=>String(o||"").replace(/…/g,"").replace(/\n/g," ").trim();return z?r.leerRespuesta?T([h(n.detras),n.ejemplo].filter(Boolean)):void 0:r.leerEnunciado&&k===n.delante?T(h(n.delante)):void 0},[d,z]);const N={ArrowLeft:()=>E(),ArrowRight:()=>S()};if(Q(F?{1:()=>w(!1),2:()=>w(!0)," ":g,Enter:g,Escape:u,...N}:{" ":g,Enter:g,Escape:u,...N},f.length>0),!n)return e.jsxs("div",{className:"card center stack",children:[e.jsx("p",{children:I("No hay tarjetas que repasar en esta lección.","There are no cards to review in this lesson.")}),e.jsx("button",{className:"btn-ghost",onClick:u,children:b("back")})]});function w(r){Z.set(J,{...D(),[n.id]:r});const h=!!p.current[d];if(p.current[d]={cur:n,ok:r},!h){const o=X(r);o.seguidas>j.current&&(j.current=o.seguidas),M.current=o}S()}function V(r){K(!1),H(!1),U(r)}function E(){d>0&&V(d-1)}function S(){d+1<f.length?V(d+1):C()}function C(){const r=Math.max(1,Math.round((Date.now()-P.current)/1e3)),h=p.current.filter(Boolean),o=h.filter(c=>c.ok).length,W=h.length,y=h.reduce((c,O)=>c+(O.ok?6:1),0);ae();const q=_(y,Date.now()-P.current);v({rachaMax:j.current,rachaRecord:M.current,deck:{id:i==null?void 0:i.id,name:i==null?void 0:i.nombre,emoji:i==null?void 0:i.emoji},mode:"flashcards",correct:o,total:W,seconds:r,xp:y,streak:q,monedas:0,soloFlashcards:!0,missed:h.filter(c=>!c.ok).map(c=>({de:c.cur.delante.replace(/\n/g," "),es:c.cur.detras.replace(/\n/g," · ")}))})}return e.jsxs("div",{className:"vocab-session",children:[e.jsxs("div",{className:"progress-top",children:[e.jsx("button",{className:"btn-ghost ses-salir",onClick:u,title:b("back"),children:"✕"}),e.jsx("div",{className:"bar",children:e.jsx("span",{style:{width:d/f.length*100+"%"}})}),d>0&&e.jsx("button",{className:"btn-ghost ses-atras ses-icon-btn",onClick:E,title:b("ses.prev"),children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),e.jsx("button",{className:"btn-ghost ses-siguiente ses-icon-btn",onClick:S,title:b("ses.next"),children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})}),e.jsxs("span",{className:"timer",children:[d+1,"/",f.length]})]}),e.jsxs("div",{className:"ctx-fila",children:[e.jsxs("span",{className:"row ctx-pills-left",style:{gap:8,minWidth:0,flexWrap:"wrap"},children:[(i==null?void 0:i.nombre)&&e.jsxs("span",{className:"pill ctx-tema",children:[e.jsx($,{emoji:i.emoji}),i.nombre]}),e.jsx(ee,{mode:"flashcards"})]}),e.jsxs("span",{className:"row",style:{gap:8},children:[e.jsx(se,{item:{id:x(n),juego:"tarjeta",dato:{id:n.id}}}),e.jsx(ne,{desde:P.current})]})]}),e.jsx("div",{className:"question-swap",children:e.jsxs("div",{className:"fc-wrap",children:[e.jsx("div",{className:"flashcard gram-tarjeta"+(n.tabla?" con-tabla":"")+(z?" flipped":""),onClick:g,children:e.jsxs("div",{className:"fc-inner",children:[e.jsxs("div",{className:"fc-face fc-front",children:[n.leccion&&e.jsx("div",{className:"gt-leccion",children:n.leccion}),e.jsx("div",{className:"gt-delante",lang:B,children:k}),e.jsx("div",{className:"fc-hint",children:I("Dilo en voz alta y gira la tarjeta","Say it out loud and flip the card")})]}),e.jsxs("div",{className:"fc-face fc-back",children:[e.jsx("div",{className:"gt-mini",lang:B,children:k}),n.detras&&e.jsx("div",{className:"gt-detras",lang:"de",children:n.detras}),n.tabla&&e.jsxs("table",{className:"gt-tabla"+(n.tabla.color?" colores":""),lang:"de",children:[e.jsx("thead",{children:e.jsx("tr",{children:n.tabla.cab.map((r,h)=>e.jsx("th",{children:r},h))})}),e.jsx("tbody",{children:n.tabla.filas.map((r,h)=>e.jsx("tr",{children:r.map((o,W)=>e.jsx("td",{children:o},W))},h))})]}),n.ejemplo&&e.jsx("div",{className:"gt-ejemplo",lang:"de",children:n.ejemplo})]})]})}),F?e.jsxs("div",{className:"judge-row fc-rate",children:[e.jsxs("button",{className:"judge-btn no",onClick:()=>w(!1),children:[A()&&e.jsx("span",{className:"op-tecla",children:"1"})," ",b("vs.didNotKnow")]}),e.jsxs("button",{className:"judge-btn yes",onClick:()=>w(!0),children:[b("vs.knewIt")," ",A()&&e.jsx("span",{className:"op-tecla",children:"2"})]})]}):e.jsxs("button",{className:"btn-ghost fc-reveal",onClick:g,children:[I("Ver la respuesta","Show the answer")," ",A()&&e.jsx("span",{className:"op-tecla",style:{marginLeft:6},children:"␣"})]})]})},d)]})}export{ze as default,x as idEstrella,oe as marcadas,ue as sabidas,ve as tarjetasAlAzar,R as tarjetasDeLeccion};
