import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ContactIcon from '../images/ContactIcon.png'
import InstagramIcon from '../images/InstagramIcon.png'
import FacebookIcon from '../images/FacebookIcon.png'
import LinkedInIcon from '../images/LinkedInIcon.png'

const Footer: FC = ({}) => {
    const { t } = useTranslation();

  return (
    <div className='bg-darkBackground text-white flex flex-col'>
        <div className='my-11 ml-5 mr-5 md:ml-14 md:mr-14'>
            <div className='md:flex md:flex-row md:justify-between'>
                <h1 className='text text-2xl text-white font-zenTokyoZoo'>KROKAD</h1>
                <div className='flex flex-row mt-7 md:mt-0  border-white border-2 w-32 pl-2'>
                    <img src={ContactIcon} alt="MailIcon"/>
                    <p className='pl-2'>{t('footer.language')}</p>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:my-14 lg:ml-24 lg:mr-24">
                <div className='flex flex-col mt-7'>
                    <p className='text-lg font-medium'>{t('footer.news')}</p>
                    <div className='flex flex-row mt-1'>
                        <input type="email" className="py-1.5 pl-2 lg:pl-4 border-0.5 border-black dropshadow lg:w-72 lg:h-11 lg:text-lg" placeholder={t('footer.placeholder')}/>
                        <button className='border-2 rounded-2xl border-white px-3 ml-5 text-lg'>{t('footer.send')}</button>
                    </div>
                </div>
                <div className='mt-7 justify-self-center'>
                    <p className='text-lg font-medium'>{t('footer.follow')}</p>
                    <div className='flex flex-row mt-1'>
                        <img src={FacebookIcon} alt="MailIcon"/>
                        <img src={InstagramIcon} className="ml-2" alt="MailIcon"/>
                        <img src={LinkedInIcon} className="ml-2" alt="MailIcon"/>
                    </div>
                </div>
                <div className='flex flex-col mt-7 justify-self-end'>
                    <p className='text-lg font-medium'>{t('footer.contact')}</p>
                    <div className='flex flex-row'>
                        <img src={ContactIcon} alt="MailIcon"/>
                        <p className='underline pl-2 text-lg'>krokad@krokad.se</p>
                    </div>
                </div>
            </div>
        </div>
            <div className='flex flex-row justify-center font-light mb-6 mt-6 md:mt-0'>
                <p>© 2024</p>
                <hr className='bg-white h-6 w-0.5 mx-2'/>
                <p>Krokad</p>
            </div>
    </div>
  );
};

export default Footer;