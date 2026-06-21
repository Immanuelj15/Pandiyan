export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-brand-blue rounded-full animate-spin"></div>
        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Loading...</div>
      </div>
    </div>
  );
}
