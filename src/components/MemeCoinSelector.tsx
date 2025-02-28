import { useState } from "react";
import { MemeCoinOption } from "../../service/MemeCoinAIGenerator";

const MemeCoinSelector = () => {
  const [options, setOptions] = useState<MemeCoinOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateOptions = async (twitterUsername: string) => {
    setLoading(true);
    setError(null);

    try {
      await generateMemeCoinOptions({
        twitterUsername,
        onOptionsGenerated: (newOptions) => {
          setOptions(newOptions);
          setLoading(false);
        },
        onError: (error) => {
          setError(error.message);
          setLoading(false);
        },
      });
    } catch (error) {
      setError("Failed to generate options");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      ) : (
        <div className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">
                {option.name} ({option.symbol})
              </h3>
              <p className="text-gray-600 mb-4">{option.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold">Tokenomics</h4>
                  <ul className="list-disc pl-5">
                    <li>Initial Supply: {option.initialSupply}</li>
                    <li>Burn: {option.tokenomics.burn}%</li>
                    <li>Tax: {option.tokenomics.tax}%</li>
                    <li>Max Wallet: {option.tokenomics.maxWallet}%</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Marketing Style</h4>
                  <ul className="list-disc pl-5">
                    {option.marketingStyle.map((style, idx) => (
                      <li key={idx}>{style}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-2">
                {option.suggestedHashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => {
                  /* Handle selection */
                }}
              >
                Select This Option
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemeCoinSelector;
