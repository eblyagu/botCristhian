const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')



const flowVolver = addKeyword(['5'])
  .addAnswer('👉 *_Volviendo al menú inicial_*')
  .addAction(async (ctx, { gotoFlow }) => {
    await gotoFlow(flowPrincipal);
  });


const flowRegistro = addKeyword('4').addAnswer(
  [
  '_Perfecto, Pasos a seguir para comenzar a trabajar._',
  '',
'📌 *_1er Paso:_*',
'_Descargar la app *SALSA* en tu Smartphone_ 📲',
'',
'🔥*_Link:_*👇',
  
'https://salsa-live.web.app/download/',

'',
'• _Si no te envia a la pagina, cierra todas las ventanas abiertas de tu navegador e intenta nuevamente_',
'',
'*⚠ _POR FAVOR LEER BIEN_⚠*',

'📌 *_2do  Paso:_*',
'',
'_Crea tu perfil en *SALSA.*_', 
'',
'• _NO DEBES PONER TU NOMBRE REAL_ ❌',
'',
'• _Nuestra prioridad es resguardar tu identidad_ 🗳',
'',
'• _Buscamos mantener anonimato en la App_ 🔐',
'',
'• _Tu nombre Artístico debe llevar la 🔥 por delante ejemplo 🔥Sofía Hernández  (obligatorio y no cambiarlo y siempre uno falso)_', 
'',
'',
'📌 *_3er Paso:_*',
 '_Enviame por este medio:  Capture del perfil realizado (debe ser captura) de tu ID de la app, son los números que se encuentran en la app, entrando al perfil._', 
'',
'',
'📌 *_4to Paso:_*',
 '_Automáticamente enviar Nombre y apellido REAL y País donde te encuentras, esos datos son solamente para *NOSOTROS* como agencia_', 
'',
'',
' _• La activacion es de 24 a 48 horas_',

  ],{
    media: 'https://i.imgur.com/OhKyOuq.jpeg',
  }
)
  .addAnswer([
    '⚠️ *IMPORTANTE* ⚠️',
    '_Una vez registrada escribe la palabra (*REGISTRO*) y un asesor te atenderá en seguida._',
    '',
    '👉5️⃣ *_¡Volver¡_*',
  ],
  {
    capture: true,
     }, async (ctx, { gotoFlow,fallBack}) => {
    console.log(ctx.body);
    if (ctx.body === 'Registro','registro','REGISTRO') {
      await gotoFlow(flowNoti);
    } else if (ctx.body === '5') {
      await gotoFlow(flowVolver);
    }else {
      return fallBack('No elegiste una opción correcta');
    }
  });
  
  const flowRedes = addKeyword(['6'])
  .addAnswer(
    [
    '📸 INSTAGRAM 📸',
    'https://instagram.com/pandora_agencia_oficial?igshid=MzRlODBiNWFlZA',
  ],
  {
    media: 'https://i.imgur.com/DO86TjE.jpeg',
  }
  )
  .addAnswer(
    [
      '📹 *TIKTOK*📹',
      'https://www.tiktok.com/@pandoraagencia_oficiall?_t=8dh4EBaJuDu&_r=1',
    ],
    {
      media: 'https://i.imgur.com/2GNP1rz.jpeg',
    }
    )
  .addAnswer(
    [
      '👉5️⃣ *_¡Volver¡_*',
      
    ],{
  capture: true,
   }, async (ctx, { gotoFlow,fallBack}) => {
  console.log(ctx.body);
   if (ctx.body === '5','5️⃣') {
    await gotoFlow(flowVolver);
  } else {
    return fallBack('No elegiste una opción correcta');
  }
});



const flowApp = addKeyword(['1'])
.addAnswer(
  [
  '*_CONOCE NUESTRA APLICACIÓN_*',
'',
  '_Trabajamos con la mejor App del mercado su nombre es salsa App, hemos preparado una pagina explicado todos los puntos importantes como:_💕',
  '',
  '🫴 *_Uso de la aplicación._*',
  '🫰 *_Métodos de pagos._*',
  '',
  '*_Ingresa al Link y revisa toda la información:_*',
  
  'https://pandoraagenciaoficial.my.canva.site/salsa-app',
],
  {
    media: 'https://i.imgur.com/PeR8Rh6.jpeg',

  }
) 
  .addAnswer(
    [
      '‼ *_A continuación escribe el numero de la opción que más te interesa:_*‼',
      '',
      '👉 4️⃣*_¡Me quiero registrar!_*',
      '👉5️⃣ *_¡Volver¡_*',
      
    ],{
  capture: true,
   }, async (ctx, { gotoFlow,fallBack}) => {
  console.log(ctx.body);
  if (ctx.body === '4','4️⃣') {
    await gotoFlow(flowRegistro);
  }
  else if (ctx.body === '5','5️⃣') {
    await gotoFlow(flowVolver);
  } else {
    return fallBack('No elegiste una opción correcta');
  }
});

const flowAgencia = addKeyword(['2'])
.addAnswer([
  '_Nuestra empresa cuenta con una amplia experiencia._✨',
'',
  '_A lo largo de los años hemos trabajado con numerosas Streamers, logrando resultados exitosos. _ 💸',
  '',
  '*_Nos enorgullece decir que nuestra trayectoria habla por si sola y que somos una empresa confiable._*',
  
]) 
.addAnswer([
    '*_Visita nuestras redes sociales:_* ',
     '👉 6️⃣ *_Visita nuestras redes sociales:_*',
    '👉 5️⃣ *_¡Volver!_*',
  ], {
    capture: true,
  }, async (ctx, { gotoFlow,fallBack }) => {
    console.log(ctx.body); 
    if (ctx.body === '6','6️⃣') {
      await gotoFlow(flowRedes);
    } 
    else if (ctx.body === '5') {
      await gotoFlow(flowVolver);
    }else {
      return fallBack('No elegiste una opción correcta');
    }
  });
      
  const flowPrincipal = addKeyword('Hola','hola','Ole','ola','Ola','ole','Buenas','buenas,'Vi')
  .addAnswer(
    [
      '*_Bienvenida a Pandora Agencia_* 💸',
      '',
      '_Mi nombre es 💃 Karolina, seré tu asistente virtual._',
      '_Ten presente que el tiempo es muy valioso y es por eso que hemos organizado una información completa y muy fácil de comprender._',
      '',
      '✨ *_Te invito a elegir una de las opciones para que obtengas más información_*👇',
    ],
    {
      media: 'https://i.imgur.com/aAZ6lXE.jpeg',
    }
  )
  .addAnswer(
    [
      '👉 1️⃣ *_¡Información de la Aplicación!_*',
      '👉 2️⃣ *_¡Quiero conocer la agencia!_*',
      '👉 *_Asesor ¡Quiero hablar con un asesor!_*',
    ],
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
      console.log(ctx.body);
      if (ctx.body === '1' || ctx.body === '1️⃣') {
        await gotoFlow(flowApp);
      } else if (ctx.body === '2' || ctx.body === '2️⃣') {
        await gotoFlow(flowAgencia);
      } else if (ctx.body === 'Asesor' || ctx.body === 'asesor') {
        await gotoFlow(flowNotificacion);
      } 
      else {
        return fallBack('No elegiste una opción correcta');
      }
    }
  );

  const flowNoti = addKeyword('REGISTRO','registro','Registro')
  .addAction(async (ctx, { provider }) => {
    Nombre = ctx.pushName;
    Telefono = ctx.from;
    id = "593993955087@s.whatsapp.net";

    const refProvider = await provider.getInstance();
    await refProvider.sendMessage(id, {
      text: `Hola *Asesor*, este usuario *${Nombre}* se quiere registrar. Escribele a este número ${Telefono}.`,
    });
  })
  .addAnswer('*_Un asesor se pondrá en contacto contigo pronto_*');

  const flowNotificacion = addKeyword('Asesor')
  .addAction(async (ctx, { provider }) => {
    Nombre = ctx.pushName;
    Telefono = ctx.from;
    id = "593993955087@s.whatsapp.net";

    const refProvider = await provider.getInstance();
    await refProvider.sendMessage(id, {
      text: `Hola *Asesor*, este usuario *${Nombre}* necesita tu atención. Escribele a este número ${Telefono}.`,
    });
  })
  .addAnswer('*_Un asesor se pondrá en contacto contigo pronto_*');
 
  
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowRegistro,flowRedes,flowVolver,flowNotificacion,flowNoti])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
