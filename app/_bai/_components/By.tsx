export default function By({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end mt-8">
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        <svg
          className="h-1.5 w-1.5 fill-gray-400"
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
        {children}
      </span>
    </div>
  );
}
