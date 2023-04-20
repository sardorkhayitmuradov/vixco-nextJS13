import Button from '@/components/UI/button';

export default function Home() {
  return (
    <main className='h-full bg-[url("../public/assets/images/hero-bg.svg")] bg-cover bg-no-repeat pt-[116px]'>
      <section className='pt-[30px] pb-[160px] bg-[url("../public/assets/images/vixco-hero.svg")] bg-[top_50px_right_100px] bg-[length:676px_449px] bg-no-repeat relative'>
        <div className='max-w-xl w-full mx-auto py-12'>
          <h1 className='text-7xl-bold font-PoppinsBold linear-txt-1'>VIXCO</h1>
          <p className='text-5xl-bold font-PoppinsBold linear-txt-2 max-w-[649px] w-full mb-[35px]'>
            Bridging Stores, Customers, and Communities in Digital
          </p>
          <p className='text-base-regular text-tonal-800 font-PoppinsRegular max-w-[514px] w-full mb-[35px]'>
            VIXCO is a digital marketing platform that connects contactless
            ordering & payment with VIXCO token.
          </p>
          <Button
            className={
              'font-PoppinsMedium text-lg-medium rounded-30 bg-white p-[16px_40px]'
            }
          >
            WHITEPAPER
          </Button>
        </div>
        <div className='max-w-[1000px] mx-auto w-full p-5 rounded-20 shadow-shadow-1 absolute bg-white -bottom-20 text-center left-1/2 transform -translate-x-1/2'>
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
    </main>
  );
}
