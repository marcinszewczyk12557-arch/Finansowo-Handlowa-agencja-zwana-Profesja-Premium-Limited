export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white py-10">
      <div className="container mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold">
          Metropolis Corp. projekt
        </h3>

        <p className="mt-2 text-xl font-semibold">
          Profesja Premium Limited™
        </p>

        <div className="mt-6 space-y-1 text-neutral-300">
          <p>ul. Bardowskiego bud. 10 lok. 8</p>
          <p>58-303 Wałbrzych</p>
          <p>Dolnośląskie, Polska</p>
        </div>

        <div className="mt-6 space-y-2">
          <p>
            E-mail:
            <br />
            marcin.szewczyk12557@gmail.com
          </p>

          <p>
            Telefon:
            <br />
            +48 886 636 981
          </p>
        </div>

        <div className="mt-8 text-sm text-neutral-400">
          ©™ Profesja Premium Limited™
          <br />
          Wszelkie prawa zastrzeżone.
        </div>

      </div>
    </footer>
  );
}
