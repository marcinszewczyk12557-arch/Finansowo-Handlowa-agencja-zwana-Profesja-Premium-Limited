export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10 text-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">Metropolis Corp. projekt</h3>

        <p className="mt-2 text-xl font-semibold">Profesja Premium Limited™</p>

        <div className="mt-6 space-y-2 text-neutral-300">
          <p>
            <strong>Obszar działalności:</strong>
            <br />
            Internet — działalność o zasięgu globalnym
          </p>

          <p>
            <strong>E-mail:</strong>
            <br />
            <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>
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
