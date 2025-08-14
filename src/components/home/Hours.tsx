const Hours = () => {
  return (
    <section className="container mx-auto px-6 py-5" aria-labelledby="horarios">
      <div className="mb-6" data-reveal>
        <h2 id="horarios" className="font-display text-3xl md:text-4xl">Horários de atendimento</h2>
      </div>
      <div className="overflow-hidden rounded-xl border" data-reveal>
        <table className="w-full text-left">
          <tbody>
            <tr className="border-b bg-secondary/40">
              <td className="px-6 py-4 font-medium">Seg–Sex</td>
              <td className="px-6 py-4">8h às 18h</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-medium">Sábado</td>
              <td className="px-6 py-4">8h às 14h</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Domingo</td>
              <td className="px-6 py-4">Fechado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;
