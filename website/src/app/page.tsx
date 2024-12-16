

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
        
        <h1 className="my-6 font-bold text-6xl bg-gradient-to-r from-orange-600 via-amber-400 to-red-400 dark:from-teal-500 dark:via-blue-300 dark:to-blue-600 text-transparent bg-clip-text animate-gradient bg-300%">Welcome to WebReviewer</h1>

        <div className="flex items-center space-x-2">
          <a href="/submit">
            <button className="border-2 rounded-lg p-3 border-red-600 dark:border-green-600 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-amber-200 hover:dark:text-green-200 hover:dark:from-teal-500 hover:dark:to-blue-600">Review a Site</button>
          </a>
          <a href="/view">
            <button className="border-2 rounded-lg p-3 border-red-600 dark:border-green-600 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-amber-200 hover:dark:text-green-200 hover:dark:from-teal-500 hover:dark:to-blue-600">View Reviews</button>
          </a>
        </div>
    </main>
  );
}
