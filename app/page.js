/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Button from '@/components/UI/button';
import about from '../public/assets/images/about.svg';
import bulb from '../public/assets/images/light-bulb.svg';
import proccess from '../public/assets/images/proccess.svg';
import dgMarketingVixpay from '../public/assets/images/dg-marketing-vixco.svg';
import vixpayApp from '../public/assets/images/vixco-app.png'

export default function Home() {
  return (
    <main className='h-full'>
      <section className='pb-[160px] shadow-hero-shadow pt-[116px] bg-[url("../public/assets/images/hero-bg.svg")] bg-cover bg-no-repeat relative'>
        <div className='bg-[url("../public/assets/images/vixco-hero.svg")] bg-no-repeat bg-[top_30px_right_100px] bg-[length:676px_449px]'>
          <div className='max-w-xl w-full mx-auto pt-[63px] pb-12'>
            <h1 className='text-7xl-bold font-PoppinsBold linear-txt-1'>
              VIXCO
            </h1>
            <p className='text-5xl-bold font-PoppinsBold linear-txt-2 max-w-[649px] w-full mb-[35px]'>
              Bridging Stores, Customers, and Communities in Digital
            </p>
            <p className='text-base-regular text-tonal-800 font-PoppinsRegular max-w-[514px] w-full mb-[35px]'>
              VIXCO is a digital marketing platform that connects contactless
              ordering & payment with VIXCO token.
            </p>
            <Button
              className={
                'font-PoppinsMedium text-lg-medium rounded-30 bg-white p-[16px_40px] hover:text-white hover:bg-transparent hover:border-white hover:shadow-shadow-button duration-150'
              }
            >
              WHITEPAPER
            </Button>
          </div>
        </div>
        <div className='max-w-[1000px] hover:scale-105 duration-300 mx-auto w-full p-5 rounded-20 shadow-shadow-1 absolute bg-white -bottom-20 text-center left-1/2 transform -translate-x-1/2 cursor-pointer'>
          <h3 className='text-2lg-bold font-PoppinsBold linear-txt-3 mb-[15px] text-center'>
            VIXCO x VIXPAY
          </h3>
          <p className='text-lg-regular font-PoppinsRegular text-tonal-800 max-w-[900px] w-full text-center mx-auto'>
            As an essential tool for the VIXCO token ecosystem, VIXPAY
            streamlines payments and ensures a seamless experience for both
            customers and kiosk owners. With VIXPAY, you can quickly and easily
            make purchases and payments.
          </p>
        </div>
      </section>
      <section className='pt-32 pb-[57px]'>
        <div className='max-w-xl w-full mx-auto flex items-center justify-between'>
          <Image src={about} alt='about' />
          <div className='max-w-[581px] w-full'>
            <div className='w-fit'>
              <h3 className='mb-1 text-tonal-800 text-4xl-bold font-PoppinsBold'>
                About
              </h3>
              <hr className='mb-[34px] inline-block bg-black p-[2px] w-[45%]' />
            </div>
            <p className='text-tonal-500 font-PoppinsRegular text-md-regular mb-[45px]'>
              The VIXCO project was initiated to address the problems in the
              South Korean card payment market, such as the "tri-party system"
              which prevents merchants from choosing a card company during the
              transaction process and the difficulties in managing funds due to
              the delayed receipt of sales proceeds. To resolve these issues,
              the blockchain-based POS terminal and VIXPAY service were
              developed.
            </p>
            <div className='flex items-center mb-[17px]'>
              <Image src={bulb} alt='bulb' />
              <p className='ml-[10px] font-PoppinsBold text-2lg-bold text-primary-50'>
                The goal
              </p>
            </div>
            <p className='text-tonal-500 text-lg-medium font-PoppinsMedium'>
              The goal of the VIXCO project is to maintain and strengthen
              connections between stores and local communities while promoting
              efficient store operations.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className='pt-[57px] pb-[150px] bg-[url("../public/assets/images/advantages-form.svg")] bg-no-repeat bg-cover bg-center'>
        <div className='max-w-xl w-full mx-auto mb-[52px]'>
          <div className='max-w-[772px] w-full mb-[51px]'>
            <hr className='inline-block linear-bg-3 p-[2px] w-[10%]' />
            <h2 className='text-tonal-800 text-4xl-bold font-PoppinsBold'>
              The advantages of VIXCO's global network configuration include:
            </h2>
          </div>

          <div className='flex items-center'>
            <Image src={proccess} alt='proccess' className='h-full' />
            <ul className='h-full flex flex-col justify-between'>
              <li className='flex items-center h-[112px] px-[25px] shadow-shadow-2 bg-white mb-[23px] rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Providing consistent services to users and merchants: By
                consistently providing services such as cross-border point
                payments, digital marketing, and membership services, both users
                and merchants experience convenience.
              </li>
              <li className='flex items-center h-[112px] px-[25px] shadow-shadow-2 bg-white mb-[23px] rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Opportunities for cross-border cooperation and expansion: By
                linking Super Nodes and Working Nodes in each country, VIXCO
                fosters international cooperation and provides business
                expansion opportunities in the global market.
              </li>
              <li className='flex items-center h-[112px] px-[25px] shadow-shadow-2 bg-white mb-[23px] rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Offering global reward point memberships: Users can enjoy global
                reward point memberships through the VIXCO platform, making
                cross-border transactions smoother.
              </li>
              <li className='flex items-center h-[112px] px-[25px] shadow-shadow-2 bg-white rounded-[18px] max-w-[820px] w-full ml-[11px] text-base-regular hover:bg-primary-50 hover:shadow-shadow-2 hover:text-white cursor-pointer duration-300 hover:ml-[41px]'>
                Stable transaction environment: VIXCO Tokens staked in Super
                Nodes and Working Nodes ensure transaction stability and provide
                a high level of service quality.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='pt-[66px] pb-[60px]'>
        <div className='max-w-xl w-full mx-auto'>
          <hr className='inline-block linear-bg-3 p-[2px] w-[6.2%] mb-5' />
          <div className='w-full flex justify-between'>
            <div>
              <div className='mb-[73px]'>
                <h2 className='text-tonal-800 text-4xl-bold font-PoppinsBold max-w-[510px]'>
                  Digital marketing based on <span>VIXPAY</span> data{' '}
                </h2>
              </div>
              <Image src={dgMarketingVixpay} alt='dg-marketing-vixpay' />
            </div>
            <div className='max-w-[506px] w-full'>
              <p className='mb-[52px] text-md-regular font-PoppinsRegular text-tonal-800'>
                VIXCO provides various services on its platform using
                Ethereum-based tokens, creating value for merchants and
                customers through integrated solutions for payment, digital
                marketing, and CRM services. This forms the foundation for the
                continuous activation and growth of the VIXCO ecosystem,
                allowing it to develop as an innovative blockchain-based payment
                and marketing platform.{' '}
              </p>
              <p className='text-md-regular font-PoppinsRegular text-tonal-800'>
                Customer information and payment data obtained through the
                VIXPAY service become valuable digital marketing assets. Using
                this information, merchants can analyze customer purchase
                patterns, preferences, and behaviors to establish effective
                marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-xl mx-auto w-full bg-[url("../public/assets/images/vixpay-app.svg")] bg-cover bg-no-repeat h-[575px] pt-[70px] flex items-start justify-between px-[100px]'>
          <div className=''>
            <h3 className='text-4xl-bold font-PoppinsBold text-white'>Vixpay app</h3>
            <hr className='inline-block bg-white p-[1px] w-[13%] mb-[70px]' />
            <Image src={vixpayApp} alt='vixpayApp'  className='absolute ml-[50px]' />
          </div>
          <div className='max-w-[522px] w-full'>
            <h5 className='text-lg-medium font-PoppinsMedium text-white text-right'>FOR YOUR BUSINESS</h5>
            <p>VIXPAY is a blockchain platform that connects merchants and consumers. It can be easily used at merchants nationwide without complicated sign-up or charging procedures, while supporting the rewards and payment functions of Vixpay. In particular, focusing on the convenience of consumers and merchants, you can use it simply by presenting a QR code and entering a password.</p>
            <div>
              <Button>
              Google play
              </Button>
              <Button>
                App Store
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
