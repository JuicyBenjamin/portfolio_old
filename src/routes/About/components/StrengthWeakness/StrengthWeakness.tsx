const StrengthWeaknessPage = () => {
  return (
    <section className="p-16 text-slate-200 pt-8 mb-8">
      <h1 className="text-4xl text-center p-4">My Strengths and Weaknesses</h1>
      <div className="grid gap-8 md:grid-cols-2 justify-center">
        <div>
          <h2 className="text-2xl p-1">Strengths</h2>
          <ul className="bg-slate-800 p-4 px-8 rounded-md list-disc h-full border border-gray-200/50 [&>li]:p-1">
            <li>Works well under pressure</li>
            <li>Thirst for knowledge</li>
            <li>Quick learner</li>
            <li>Friendly</li>
            <li>Openminded</li>
            <li>Teamplayer</li>
            <li>Honest</li>
            <li>Proactive</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl p-1">Weaknesses</h2>
          <ul className="bg-slate-800 p-4 px-8 rounded-md list-disc h-full border border-gray-200/50 [&>li]:p-1">
            <li>Talkative</li>
            <li>Tendency to overestimate own abilities</li>
            <li>In need of structure</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StrengthWeaknessPage;
