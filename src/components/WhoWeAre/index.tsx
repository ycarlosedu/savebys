export default function WhoWeAre() {
  return (
    <section
      id="quem-somos"
      className="bg-white pt-16 w-full flex flex-col items-center justify-center gap-8"
    >
      <div className="max-w-default px-default w-full flex flex-col items-center justify-center gap-8">
        <h2 className="title">Quem Somos</h2>
        <p className="text-center max-w-[610px] text-gray-secondary text-lg">
          A <strong>SAVEBYS</strong> é uma <strong>solução global</strong> para
          apoiar empreendedores que enfrentam grandes desafios para se recuperar
          depois de uma situação de crise causada por fatores externos (p.ex.:
          desastres naturais) com pessoas físicas ou jurídicas dispostas a
          oferecer suporte financeiro ou material, facilitando uma recuperação
          sustentável, ágil e fortalecida.
        </p>
        <hr className="w-full h-[3px] bg-primary" />
      </div>
    </section>
  );
}
