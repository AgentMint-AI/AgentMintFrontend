interface RoadmapProps {
  roadmap: {
    title: string;
    description: string;
    date: string;
    completed: boolean;
  }[];
}

export default function Roadmap({ roadmap }: RoadmapProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Roadmap</h2>
      <div className="space-y-6">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  item.completed
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {item.completed ? "Completed" : "In Progress"}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="text-sm text-gray-500">
              Target Date: {new Date(item.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
