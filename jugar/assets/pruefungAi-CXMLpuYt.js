import{a as r,t as e,br as c,b as u}from"./index-Bj1MkrOz.js";import{p as s,r as i}from"./ai-BJjry5JI.js";const o=()=>c(u()),d=`Nivel A2 (Goethe-Zertifikat A2 / ÖSD Zertifikat A2). Alemán de Austria cuando encaje
(Jänner, Ordination, Erdäpfel, Sackerl, sich ausmachen), pero comprensible para cualquiera.`,p={"lesen:rf":`Escribe un texto cotidiano en alemán (un correo, un mensaje de móvil o una entrada de blog)
de 60-90 palabras y 5 preguntas sobre él.
Las 3 primeras son afirmaciones con "optionen": ["richtig", "falsch"].
Las 2 últimas son de opción múltiple con 3 opciones (horas, lugares, motivos).`,"lesen:matching":`Tarea de emparejamiento. En "material" pon 6 anuncios breves (Kleinanzeigen: cursos,
pisos, objetos de segunda mano, servicios) con ids "a" … "f".
En "aufgaben" pon 5 personas: la "frage" describe en alemán lo que busca cada persona
(con DOS O TRES condiciones a la vez, p. ej. barato + por la tarde + de alemán),
y "optionen" son SIEMPRE los 6 ids más "X (kein Angebot passt)" como última opción.
Una de las 5 personas NO debe tener ningún anuncio válido: su solución es la "X".
"text" y "skript" van a null.`,"lesen:schilder":`Tarea de carteles y avisos. En "material" pon 5 carteles o notas muy breves del espacio
público (estación, tienda, portal, oficina) con ids "a" … "e".
En "aufgaben" pon 5 afirmaciones sobre ellos con "optionen": ["richtig", "falsch"].
Cada afirmación debe indicar de qué cartel habla. Al menos dos deben depender de una negación
o de una fecha ("ab dem 3. März wieder geöffnet" ≠ "está abierto ahora").
"text" y "skript" van a null.`,"lesen:forum":`Tarea de foro. En "text" escribe 4 comentarios cortos (40-60 palabras cada uno) de
4 personas con nombre sobre un mismo tema cotidiano, con opiniones DISTINTAS entre sí.
En "aufgaben" pon 5 preguntas del tipo "Wer …?" y las "optionen" son los nombres de las 4 personas.
"skript" y "material" van a null / [].`,"hoeren:ansagen":`Tarea de escucha con avisos cortos. En "skript" escribe 3 avisos independientes
(megafonía de estación, mensaje de voz, anuncio de supermercado), separados por una línea con "---".
Cada aviso, 2-3 frases. En "aufgaben" pon 4 preguntas de opción múltiple con 3 opciones
(horas, andenes, precios, motivos). "text" y "material" van a null / [].`,"hoeren:monolog":`Tarea de escucha con un monólogo. En "skript" escribe un mensaje de contestador o un
fragmento de radio de 80-110 palabras con VARIOS datos concretos (hora, día, lugar, precio, teléfono).
En "aufgaben" pon 5 preguntas: 2 con ["richtig", "falsch"] y 3 de opción múltiple con 3 opciones.
"text" y "material" van a null / [].`,"hoeren:gespraech":`Tarea de escucha con una conversación. En "skript" escribe un diálogo natural entre dos
personas con nombre (quedar, comprar, resolver algo), 12-16 intervenciones, con el formato
"NOMBRE: lo que dice" en líneas separadas. Que cambien de idea a mitad (primero proponen una cosa
y acaban en otra: ahí está el distractor).
En "aufgaben" pon 5 preguntas de opción múltiple con 3 opciones sobre lo que ACABAN decidiendo.
"text" y "material" van a null / [].`,"hoeren:interview":`Tarea de escucha con una entrevista. En "skript" escribe una entrevista de 110-140 palabras
a alguien sobre su trabajo, su ciudad o su hobby, con el formato "NOMBRE: …" por líneas.
En "aufgaben" pon 6 afirmaciones con "optionen": ["richtig", "falsch"], todas parafraseando lo dicho.
"text" y "material" van a null / [].`};async function g({teil:a,typ:n}){if(!r())throw new Error(e("err.aiExam"));const t=`${a}:${n}`;throw p[t]?(s(await i()),new Error(e("err.taskFailed"))):new Error(e("err.taskNotYet"))}async function f({typ:a}){throw r()?(s(await i()),new Error(e("err.taskFailed"))):new Error(e("err.aiTask"))}async function h({aufgabe:a,text:n}){throw r()?n!=null&&n.trim()?(`${d}${a.anweisung}`,a.stimulus&&""+a.stimulus,`${a.punkte.map((t,l)=>`${l+1}. ${t}`).join(`
`)}${n.trim()}${o()}${o()}${o()}${o()}`,s(await i()),new Error(e("err.readCorrection"))):new Error(e("err.writeAnswer")):new Error(e("err.aiCorrect"))}async function E({typ:a}){throw r()?{vorstellen:`Teil 1: presentarse. Da 6 preguntas personales que le hará el examinador
(nombre, origen, dónde vive, trabajo/estudios, idiomas, familia, tiempo libre).
"karten" va a []. En "musterdialog" pon una presentación modelo de 6-8 frases del alumno.`,karten:`Teil 2: tarjetas. Elige un tema cotidiano (Einkaufen, Wohnen, Freizeit, Reisen, Essen…)
y pon 6 palabras clave en "karten". Para cada tarjeta, en "musterdialog" pon un par
pregunta-respuesta modelo (el alumno pregunta, la pareja responde).`,planen:`Teil 3: planear algo juntos (una fiesta de despedida, una excursión, un regalo).
En "karten" pon los 4-5 puntos que hay que acordar (cuándo, dónde, qué llevar, cómo ir…).
En "musterdialog" pon un intercambio modelo de 10-12 turnos donde se proponga, se rechace
con alternativa y se llegue a un acuerdo.`}[a]?(s(await i()),new Error(e("err.taskFailed"))):new Error(e("err.taskUnknown")):new Error(e("err.aiTask"))}export{f as a,E as b,h as c,g};
