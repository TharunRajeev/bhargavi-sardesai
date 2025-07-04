export default function Connect() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-wide">
        STAY CONNECTED
      </h2>
      <p className="text-base sm:text-lg mb-8 max-w-xl">
        For news and updates, please enter your email here:
      </p>

      <form className="w-full max-w-md space-y-6">
        <div className="text-left">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 rounded bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-white"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex items-center gap-2 text-left">
          <input
            id="subscribe"
            type="checkbox"
            required
            className="w-4 h-4 text-white bg-gray-700 border border-gray-300 rounded"
          />
          <label htmlFor="subscribe" className="text-sm font-medium">
            Yes, subscribe me to your newsletter. <span className="text-red-500">*</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full border border-white py-2 rounded hover:bg-white hover:text-black transition-colors"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}
