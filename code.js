document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audioPlayer');
    var lyrics = [
        { time: 2, text: "Ok amor" },
        { time: 4, text: "sabes lo mucho que te quiero" },
        { time: 6, text: "asi que, aqui vamos" },
        { time: 7, text: "3..." },
        { time: 8, text: "2..." },
        { time: 9, text: "1.." },

        { time: 10, text: "Oh, maybe I came on too strong" },
        { time: 15, text: "Maybe I waited too long" },
        { time: 20, text: "Maybe I played my cards wrong" },
        { time: 23, text: "Oh, just a little bit wrong" },
        { time: 26, text: "Oh, baby I apologize for it" },
        { time: 32, text: "I could fall, or I could fly" },
        { time: 34, text: "Here in your aeroplane" },
        { time: 37, text: "And I could live, I could die" },
        { time: 39, text: "Hanging on the words you say" },
        { time: 43, text: "And I've been known to give my all" },
        { time: 45, text: "And jumping in harder than" },
        { time: 47, text: "Ten thousand rocks on the lake" },
        { time: 51, text: "So don't call me baby" },
        { time: 57, text: "Unless you mean it" },
        { time: 62, text: "Don't tell me you need me" },
        { time: 68, text: "If you don't believe it" },
        { time: 71, text: "So let me know the truth" },
        { time: 74, text: "Before I dive right into you" },
        { time: 79, text: "You're a mystery" },
        { time: 82, text: "I have traveled the world, there's no other girl like you" },
        { time: 89, text: "No one, what's your history? (what's your history?)" },
        { time: 92, text: "Do you have a tendency to lead some people on?" },
        { time: 97, text: "'Cause I heard you do, mhm" },
        { time: 101, text: "I could fall, or I could fly" },
        { time: 103, text: "Here in your aeroplane" },
        { time: 106, text: "And I could live, I could die" },
        { time: 109, text: "Hanging on the words you say" },
        { time: 112, text: "And I've been known to give my all" },
        { time: 114, text: "And lie awake, everyday don't know how much I can take" },
        { time: 120, text: "So don't call me baby" },
        { time: 126, text: "Unless you mean it" },
        { time: 131, text: "And don't tell me you need me" },
        { time: 137, text: "If you don't believe it" },
        { time: 140, text: "So let me know the truth" },
        { time: 143, text: "Before I dive right into you" },
        
        { time: 147, text: "espacio publicitario.. :D" },
        { time: 150, text: "okno, aprovecho el instrumental para decir que..." },

        { time: 153, text: "estaba pensando en hacer un cover yo xd" },
        { time: 156, text: "pero no queria deleitarte con mi voz :D" },
        { time: 159, text: "okno, me falta talento :V" },
        { time: 162, text: "asi que mejor, a alguien que si sabe cantar" },
        { time: 165, text: "yo ya torture a lo vecinos tratando de cantarla" },
        { time: 168, text: "ahora si sigue disfrutando de la cancion <3" },


        { time: 170, text: "I could fall, or I could fly" },
        { time: 173, text: "Here in your aeroplane" },
        { time: 175, text: "And I could live, I could die" },
        { time: 177, text: "Hanging on the words you say" },
        { time: 181, text: "And I've been known to give my all" },
        { time: 183, text: "Sitting back, looking at every mess that I made" },
        { time: 191, text: "So don't call me baby" },
        { time: 197, text: "Unless you mean it" },
        { time: 201, text: "Don't tell me you need me" },
        { time: 207, text: "If you don't believe it" },
        { time: 211, text: "Let me know the truth" },
        { time: 214, text: "Before I dive right into you" },
        { time: 219, text: "Before I dive right into you" },
        { time: 224, text: "Before I dive right into you" },
        { time: 225, text: "♥" }
        

            
    ];
    var lyricsTranslation = [
        { time: 2, text: "Ok amor" },
        { time: 4, text: "sabes lo mucho que te quiero" },
        { time: 6, text: "asi que, aqui vamos" },
        { time: 7, text: "3..." },
        { time: 8, text: "2..." },
        { time: 9, text: "1.." },
        { time: 10, text: "Oh, tal vez fui demasiado directo" },
        { time: 15, text: "Tal vez esperé demasiado tiempo" },
        { time: 20, text: "Tal vez jugué mal mis cartas" },
        { time: 23, text: "Oh, solo un poco mal" },
        { time: 26, text: "Oh, cariño, te pido disculpas por ello" },
        { time: 32, text: "Podría caer, o podría volar" },
        { time: 34, text: "Aquí en tu avión" },
        { time: 37, text: "Y podría vivir, podría morir" },
        { time: 39, text: "Colgando de las palabras que dices" },
        { time: 43, text: "Y tengo fama de entregarme por completo" },
        { time: 45, text: "Y saltar de cabeza con más fuerza" },
        { time: 47, text: "Que diez mil rocas en el lago" },
        { time: 51, text: "Así que no me llames cariño" },
        { time: 57, text: "A no ser que de verdad lo sientas así" },
        { time: 62, text: "No me digas que me necesitas" },
        { time: 68, text: "Si no te lo crees" },
        { time: 71, text: "Así que dejame saber la verdad" },
        { time: 74, text: "Antes de que me sumerja en ti" },
        { time: 79, text: "Eres un misterio" },
        { time: 82, text: "He viajado por el mundo, no hay ninguna chica como tú" },
        { time: 89, text: "Nadie, ¿cúal es tu historia?" },
        { time: 92, text: "¿Tienes tendencia a dar falsas esperanzas a la gente?" },
        { time: 97, text: "'Porque me han dicho que sí, mhm" },
        { time: 101, text: "Podría caer o podría volar" },
        { time: 103, text: "Aquí en tu avión" },
        { time: 106, text: "Y podría vivir, podría morir" },
        { time: 109, text: "Colgando de las palabras que dices" },
        { time: 112, text: "Y tengo fama de entregarme por completo" },
        { time: 114, text: "Y quedarme despierto, todos los días, no sé cuánto más puedo aguantar" },
        { time: 120, text: "Así que no me llames cariño" },
        { time: 126, text: "A no ser que de verdad lo sientas así" },
        { time: 131, text: "No me digas que me necesitas" },
        { time: 137, text: "Si no te lo crees" },
        { time: 140, text: "Así que déjame saber la verdad" },
        { time: 143, text: "Antes de que me sumerja en ti" },

        { time: 147, text: "espacio publicitario.. :D" },
        { time: 150, text: "okno, aprovecho el instrumental para decir que..." },

        { time: 153, text: "estaba pensando en hacer un cover yo xd" },
        { time: 156, text: "pero no queria deleitarte con mi voz :D" },
        { time: 159, text: "okno, me falta talento :V" },
        { time: 162, text: "asi que mejor, a alguien que si sabe cantar" },
        { time: 165, text: "yo ya torture a lo vecinos tratando de cantarla" },
        { time: 168, text: "ahora si sigue disfrutando de la cancion <3" },



        { time: 170, text: "Podría caer o podría volar" },
        { time: 173, text: "Aquí en tu avión" },
        { time: 175, text: "Y podría vivir, podría morir" },
        { time: 177, text: "Colgando de las palabras que dices" },
        { time: 181, text: "Y tengo fama de entregarme por completo" },
        { time: 183, text: "Recostado, mirando cada lío que he provocado" },
        { time: 191, text: "Así que no me llames cariño" },
        { time: 197, text: "A no ser que de verdad lo sientas así" },
        { time: 201, text: "No me digas que me necesitas" },
        { time: 207, text: "Si no te lo crees" },
        { time: 211, text: "Así que déjame saber la verdad" },
        { time: 214, text: "Antes de que me sumerja en ti" },
        { time: 219, text: "Antes de que me sumerja en ti" },
        { time: 224, text: "Antes de que me sumerja en ti" },
        { time: 225, text: "♥" }

      
    ];

    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;

        for (var i = 0; i < lyrics.length; i++) {
            if (lyrics[i].time <= currentTime && (i == lyrics.length - 1 || lyrics[i + 1].time > currentTime)) {
                document.getElementById('lyrics').innerText = lyrics[i].text;
                document.getElementById('translatedLyrics').innerText = lyricsTranslation[i].text;
                break;
            }
        }
    });

    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });
});
