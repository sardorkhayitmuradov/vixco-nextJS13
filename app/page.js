// 'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Button from '@/components/UI/button';
import about from '../public/assets/images/about.svg';
import bulb from '../public/assets/images/light-bulb.svg';
import proccess from '../public/assets/images/proccess.svg';
import dgMarketingVixpay from '../public/assets/images/dg-marketing-vixco.svg';
import vixpayApp from '../public/assets/images/vixco-app.png';
import googlePlay from '../public/assets/images/play-market.svg';
import appStore from '../public/assets/images/app-store.svg';
import number from '../public/assets/images/number.svg';
import vixcoPos from '../public/assets/images/vixco-b-pos.svg';
import dgSystem from '../public/assets/images/dg-system.svg';
import vixpaySystem from '../public/assets/images/vixo-payment-system.png';
import erp from '../public/assets/images/ethereum.svg';
import bloackChainVixco from '../public/assets/images/vixco-token.svg';
import tokenDiagram from '../public/assets/images/vixco-token-diagram.svg';
import gl33 from '../public/assets/images/GL1.svg';

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
      <section className='pt-[60px] pb-[150px]'>
        <div className='max-w-xl mx-auto w-full bg-[url("../public/assets/images/vixpay-app.svg")] bg-cover bg-no-repeat h-[575px] pt-[70px] flex items-start justify-between px-[100px]'>
          <div>
            <h3 className='text-4xl-bold font-PoppinsBold text-white'>
              Vixpay app
            </h3>
            <hr className='inline-block bg-white p-[1px] w-[13%] mb-[70px]' />
            <Image
              src={vixpayApp}
              alt='vixpayApp'
              className='absolute ml-[50px]'
            />
          </div>
          <div className='max-w-[522px] w-full'>
            <h5 className='text-lg-medium font-PoppinsMedium text-white text-right mb-[84px]'>
              FOR YOUR BUSINESS
            </h5>
            <p className='text-md-regular text-white mb-12 font-PoppinsRegular'>
              VIXPAY is a blockchain platform that connects merchants and
              consumers. It can be easily used at merchants nationwide without
              complicated sign-up or charging procedures, while supporting the
              rewards and payment functions of Vixpay. In particular, focusing
              on the convenience of consumers and merchants, you can use it
              simply by presenting a QR code and entering a password.
            </p>
            <div className='flex items-center'>
              <Button
                className={
                  'rounded-[46px] border-[2px] border-white py-[13px] hover:scale-[1.05] duration-150 px-[42px] flex items-center text-lg-medium text-white'
                }
              >
                <Image
                  src={googlePlay}
                  alt='google play'
                  className='mr-[10px]'
                />
                Google play
              </Button>
              <Button
                className={
                  'rounded-[46px] border-[2px] border-white py-[13px] hover:scale-[1.05] duration-150 px-[42px] flex items-center ml-[26px] text-lg-medium text-white'
                }
              >
                <Image src={appStore} alt='google play' className='mr-[10px]' />
                App Store
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[50px] pb-[118px] bg-[url("../public/assets/images/VIXCO-solution-background.svg")] bg-no-repeat bg-cover bg-center'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='mb-[55px]'>
            <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800'>
              <span className='linear-txt-1'>VIXCO</span> Solution
            </h3>
            <hr className='inline-block bg-black p-[2px] w-[3.2%] mb-5' />
          </div>
          <ul className='flex flex-col gap-[70px]'>
            <li className='flex items-center' data-aos='fade-up-right'>
              <div className='flex items-start max-w-[522px] w-full mx-auto'>
                <div className='relative flex items-center justify-center'>
                  <Image src={number} alt='numbers' width={30} height={30} />
                  <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                    1
                  </p>
                </div>
                <div className='ml-[15px] max-w-[478px] w-full'>
                  <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                    VIXCO Blockchain POS Terminal
                  </p>
                  <p className='text-tonal-500 text-md-regular font-PoppinsRegular'>
                    Blockchain POS and kiosk terminals connected to VIXCO
                    Working Node are the core infrastructure of the VIXCO
                    platform. These terminals come equipped with wallets,
                    allowing users to earn or pay with VIXCO Point tokens and
                    serving as a connection point between customers and stores.
                  </p>
                </div>
              </div>
              <Image src={vixcoPos} alt='vixco terminal' />
            </li>
            <li className='flex flex-row-reverse items-center fade-up-left'>
              <div className='flex items-start max-w-[549px] w-full mx-auto'>
                <div className='relative flex items-center justify-center'>
                  <Image src={number} alt='numbers' width={30} height={30} />
                  <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                    2
                  </p>
                </div>
                <div className='ml-[15px] max-w-[505px] w-full'>
                  <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                    Digital Marketing System
                  </p>
                  <p className='text-tonal-500 text-md-regular font-PoppinsRegular'>
                    The digital marketing system using blockchain POS and kiosk
                    terminals, and cloud-based POS systems is a powerful tool
                    for providing efficient and differentiated marketing
                    strategies to stores. Hyperlocal digital marketing system
                    can be used as an advertising platform for companies that
                    want to advertise in the area. Stores can receive fees from
                    companies and post advertisements on kiosk terminals.
                  </p>
                </div>
              </div>
              <Image src={dgSystem} alt='vixco terminal' />
            </li>
            <li className='flex items-center'>
              <div className='flex items-start max-w-[522px] w-full mx-auto'>
                <div className='relative flex items-center justify-center'>
                  <Image src={number} alt='numbers' width={30} height={30} />
                  <p className='text-base-regular absolute font-PoppinsMedium text-white'>
                    3
                  </p>
                </div>
                <div className='ml-[15px] max-w-[478px] w-full'>
                  <p className='text-2lg-bold font-PoppinsBold text-tonal-800 max-w-[250px] w-full mb-[31px]'>
                    VIXPAY Payment System
                  </p>
                  <p className='text-tonal-500 text-md-regular font-PoppinsRegular'>
                    VIXPAY is a blockchain-based payment system that provides a
                    convenient solution for customers to accumulate and pay with
                    VIXCO Point tokens using a mobile app. Combined with
                    blockchain POS and kiosk terminals, it creates an
                    environment where customers can easily and quickly
                    accumulate and use points.
                  </p>
                </div>
              </div>
              <Image src={vixpaySystem} alt='vixco terminal' />
            </li>
          </ul>
        </div>
      </section>
      <section className='pt-[90px] pb-[47px]'>
        <div className='max-w-xl mx-auto w-full'>
          <div className='flex items-center justify-between mb-[50px]'>
            <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800'>
              <span className='linear-txt-1'>VIXCO</span> Token
            </h3>
            <div className='flex items-center'>
              <Image src={erp} alt='erp' />
              <p className='text-2lg-bold font-PoppinsBold text-primary-50 ml-[10px]'>
                ERC - 20
              </p>
            </div>
          </div>
          <p className='text-md-regular font-PoppinsRegular text-tonal-800 mb-5'>
            VIXCO is an ERC20 token issued on the Ethereum blockchain network,
            and it is a utility token that can be exchanged with Point tokens
            used on the VIXCO platform. The VIXCO platform provides payment,
            digital marketing, CRM services, and additional services to
            merchants and customers based on a Staking-based token economy. To
            operate a Working Node, a certain amount of VIXCO tokens must be
            staked, which allows partners to recruit VIXCO merchants and
            customers.{' '}
          </p>
          <p className='text-md-regular font-PoppinsRegular text-tonal-800 mb-[41px]'>
            The commission revenue generated on the VIXCO platform is
            distributed according to the proportion of VIXCO staked in the
            Working Node, which increases the demand and value of the VIXCO
            token.
          </p>
          <Image
            src={bloackChainVixco}
            className='mx-auto'
            alt='VIXCO Private Blockchain(Working Node)'
          />
        </div>
      </section>
      <section className='bg-[url("../public/assets/images/token-information-form.svg")] bg-no-repeat bg-[center_left] bg-contain'>
        <div className='max-w-xl mx-auto w-full flex items-center justify-between'>
          <Image src={tokenDiagram} alt='diagram' className='mx-auto' />
          <div className='mb-5 max-w-[573px] w-full'>
            <hr className='inline-block linear-bg-3 p-[2px] w-[15%] mb-5' />
            <h3 className='text-4xl-bold font-PoppinsBold text-tonal-800 mb-5'>
              VIXCO Token Information
            </h3>
            <div className='py-[15px] px-[25px] flex items-center justify-between shadow-shadow-1 rounded-[17px] mb-[30px]'>
              <div>
                <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                  Token Name :
                </h4>
                <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                  VIXCO (Ticker : VIX)
                </p>
              </div>
              <div>
                <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                  Token Name :
                </h4>
                <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                  VIXCO (Ticker : VIX)
                </p>
              </div>
              <div>
                <h4 className='mb-[4px] font-PoppinsBold text-base-bold text-primary-50'>
                  Token Name :
                </h4>
                <p className='text-base-medium text-secondary-10 font-PoppinsMedium'>
                  VIXCO (Ticker : VIX)
                </p>
              </div>
            </div>
            <ul>
              <li className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image src={gl33} alt='gl33' />
                  <p className='text-sm-medium text-tonal-800'>33% Payment Reserve</p>
                </div>
                660,000,000 VIX
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
