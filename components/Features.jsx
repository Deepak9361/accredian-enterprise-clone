export default function Features() {
  const features = [
    "Industry relevant curriculum",
    "Live mentorship",
    "Hands-on projects",
    "Placement support",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Accredian?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white shadow rounded">
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}