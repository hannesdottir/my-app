import React, { FC } from 'react';


const HeroImage: FC = ({}) => {
 
  return (
    <div className="bg-pic bg-cover flex flex-col bg-center lg:bg-cover lg:bg-fixed lg:bg-no-repeat">
      <div className="flex flex-col items-center pt-44 lg:pt-96 pb-96 lg:mb-44 lg:mt-44">
        <h1 className="text-5xl">Krokad</h1>
        <p>NÖJDA ANVÄNDARE ★★★★★</p>
        <div>
          <button className="bg-white text-black p-3 font-bold mr-1 my-2">
           Ladda ner appen
          </button>
          <button className="bg-white text-black p-3 font-bold ml-1">
            Ladda ner appen
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;