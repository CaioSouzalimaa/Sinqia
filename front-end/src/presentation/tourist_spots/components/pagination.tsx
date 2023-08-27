export const Pagination = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
      Mostrando <span className="font-semibold text-gray-900 dark:text-white">1</span> a <span
        className="font-semibold text-gray-900 dark:text-white">10</span> de <span
        className="font-semibold text-gray-900 dark:text-white">100</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-dark-blue rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Anterior
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-dark-blue border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Próximo
        </button>
      </div>
    </div>
  )
}
