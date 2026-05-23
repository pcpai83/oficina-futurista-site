export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
           <img
            src="/logo-ofp.png"
            alt="Oficina Futurista do Pedro"
            className="h-10 md:h-12 w-auto object-contain"
           />
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#projetos" className="hover:text-cyan-300">Projetos</a>
            <a href="#canal" className="hover:text-cyan-300">Canal</a>
            <a href="#contacto" className="hover:text-cyan-300">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/logo-oficina.png"
                alt="Oficina Futurista do Pedro"
                className="w-full max-w-[260px] md:max-w-[320px] mb-8 object-contain"
              />
              <p className="inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 mb-6">
                DIY, tecnologia, impressão 3D e criatividade
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Projetos reais feitos numa oficina com visão de futuro.
              </h2>

              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Bem-vindo à Oficina Futurista do Pedro: um canal maker onde transformo ideias em objetos, reparo tecnologia, crio peças em 3D e mostro o processo sem esconder os erros.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-4 bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-bold"
                >
                  Ver no YouTube
                </a>

                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-4 border border-slate-600 text-white hover:bg-white/10"
                >
                  Ver projetos
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/30">
              <div className="rounded-[1.5rem] bg-slate-900 border border-slate-700 p-8">
                <p className="text-cyan-300 text-sm uppercase tracking-widest mb-3">
                  Último projeto
                </p>

                <h3 className="text-2xl md:text-3xl font-black">
                  Sabre de luz DIY
                </h3>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  Transformei um sabre de luz simples num projeto maker com impressão 3D,
                  eletrónica, LEDs e código próprio em CircuitPython.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <a
                    href="https://github.com/pcpai83/LightSaber_CircuitPyton"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-4 text-center font-bold text-cyan-200 hover:bg-cyan-300/20 transition"
                  >
                    Ver projeto no GitHub
                  </a>

                  <a
                    href="https://www.youtube.com/@OficinaFuturistadoPedro"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-red-500 px-5 py-4 text-center font-bold text-white hover:bg-red-400 transition"
                  >
                    Ver vídeo no YouTube
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-slate-400">
                    Projeto aberto: ficheiros, código e documentação disponíveis para quem quiser aprender ou adaptar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="px-6 py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              O que vais encontrar
            </h2>

            <p className="text-slate-300 mb-10 max-w-2xl">
              Projetos práticos, explicados passo a passo, com foco em aprender, testar e criar algo útil ou simplesmente incrível.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-3xl bg-slate-950 border border-white/10 p-7">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">
                  Sabres de Luz DIY
                </h3>
                <p className="text-slate-300">
                  Projetos com impressão 3D, eletrónica, LEDs Neopixel e programação.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-950 border border-white/10 p-7">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">
                  Impressão 3D
                </h3>
                <p className="text-slate-300">
                  Peças úteis, protótipos, suportes, upgrades e projetos de bancada.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-950 border border-white/10 p-7">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">
                  Tecnologia & Reparações
                </h3>
                <p className="text-slate-300">
                  Consolas, PCs, smart home, eletrónica e experiências práticas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="canal" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black">
              Criar, testar, falhar, melhorar.
            </h2>

            <p className="mt-5 text-slate-300 leading-relaxed max-w-3xl">
              Este canal nasceu para mostrar o processo real por trás dos projetos: desde a ideia inicial, desenho 3D, impressão, montagem, testes, problemas e soluções. Sem fingir que tudo corre bem à primeira.
            </p>
          </div>
        </section>

        <section id="contacto" className="px-6 py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto rounded-[2rem] bg-cyan-400/10 border border-cyan-300/20 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black">
              Acompanha a oficina
            </h2>

            <p className="mt-4 text-slate-300">
              Subscreve o canal, segue nas redes e vê os ficheiros dos projetos.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.youtube.com/@OficinaFuturistadoPedro"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-red-500 hover:bg-red-400 text-white px-6 py-4"
              >
                YouTube
              </a>

              <a
                href="https://instagram.com/oficinafuturistadopedro"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-600 text-white hover:bg-white/10 px-6 py-4"
              >
                Instagram
              </a>

              <a
                href="https://github.com/pcpai83/LightSaber_CircuitPyton"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-600 text-white hover:bg-white/10 px-6 py-4"
              >
                GitHub
              </a>

              <a
                href="mailto:contacto@oficinafuturistadopedro.pt"
                className="rounded-2xl border border-slate-600 text-white hover:bg-white/10 px-6 py-4"
              >
                Contacto
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Oficina Futurista do Pedro. Feito para makers, curiosos e criadores.
      </footer>
    </div>
  )
}