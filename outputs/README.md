# EnglishDeUna

App independiente para practicar ingles A2 sin tokens ni llamadas a APIs de IA.

## Alcance

- Funciona como PWA instalable en Android.
- Cachea todos sus archivos para abrir despues sin internet.
- Usa `speechSynthesis` del telefono para hablar.
- Usa `SpeechRecognition` del navegador/dispositivo para escuchar.
- Corrige gramatica con reglas locales.
- Puntua pronunciacion comparando lo que Android entendio contra la frase objetivo.

## Nota tecnica

La app no envia audio ni texto a un servidor. En Android, el reconocimiento de voz depende del motor instalado en el telefono. Para uso sin datos, conviene instalar el paquete de idioma ingles offline en los ajustes de voz del dispositivo cuando este disponible. Si el telefono no ofrece reconocimiento offline, la app mantiene el modo escrito.
