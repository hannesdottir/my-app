import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Citat: FC = ({}) => {
  const { t } = useTranslation();
  
  return (
    <div className='my-11 md:mb-60 mx-5 md:mx-40 md:w-3/5 '>
      <h1 className='text-primaryTextColor pb-10 md:mt-40 font-extrabold text-lg lg:text-2xl'>Användarvillkor</h1>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>1. Introduktion</h2>
            <p> 
                Genom att använda Krokads tjänster bekräftar du att du har läst och förstått dessa villkor och samtycker till att 
                vara bunden av dem. Om du inte godkänner dessa villkor, ska du inte komma åt eller använda tjänsterna.
            </p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>2. Registrering och konto</h2>
            <p> 
            För att använda tjänsterna måste du registrera dig. Du samtycker till att Krokad får använda din användardata för 
            att tillhandahålla tjänster.
            </p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>3. App- och webbplatsinnehåll</h2>
            <p> 
                <span className='font-bold'>Ägarskap:</span> Allt innehåll på appen och webbplatsen, inklusive text, bilder och grafik, 
                ägs av Krokad och skyddas av upphovsrättslagar. 
                Krokad kan ändra innehållet när som helst, till exempel genom att lägga till eller ta bort funktioner.
                <span className='font-bold'>Icke-kommersiell användning:</span> Du får endast använda och ladda ner innehåll från 
                Krokad för personligt, icke-kommersiellt bruk.
                <span className='font-bold'>Ingen modifiering:</span> Du får inte ändra, reproducera, distribuera eller visa innehållet
                 utan vårt skriftliga samtycke.
            </p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>4. Användarens riktlinjer</h2>
            <p>
                <span>Förbjudna aktiviteter:</span>Du samtycker till att inte använda appen eller webbplatsen för något olagligt eller 
                obehörigt ändamål, såsom att störa, negativt påverka, skada, inaktivera eller försämra funktionen hos tjänsterna.
            </p>
        </div>
        <div className='mb-4'>
            <h2 className='text-base font-bold'>5. Kontaktinformation</h2>
            <p>Om du har några frågor om dessa villkor, appen eller webbplatsen, vänligen kontakta oss på krokad@krokad.se</p>
        </div>
    </div>
  );
};

export default Citat;