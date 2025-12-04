export default function ScreenWrapper({ children }) {
  return (
    <div className="min-h-screen w-full bg-mmBg flex justify-center items-start py-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-3xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
